(function(){
  'use strict';

  var nativeSetTimeout=window.setTimeout.bind(window);
  var nativeClearTimeout=window.clearTimeout.bind(window);
  var nativeRequestAnimationFrame=window.requestAnimationFrame.bind(window);
  var nativeCancelAnimationFrame=window.cancelAnimationFrame.bind(window);
  var scheduled=new Map();
  var nextScheduledId=748090100;
  var presentationPaused=false;

  function normalizeDelay(delay){delay=Number(delay);return Number.isFinite(delay)&&delay>0?delay:0}
  function scheduleRecord(record){
    if(record.cancelled||presentationPaused)return;
    record.scheduledAt=performance.now();
    record.nativeId=nativeSetTimeout(function(){
      record.nativeId=null;
      if(record.cancelled)return;
      if(!record.repeat)scheduled.delete(record.id);
      try{record.callback.apply(window,record.args)}finally{
        if(record.repeat&&!record.cancelled&&scheduled.has(record.id)){
          record.remaining=record.delay;
          scheduleRecord(record);
        }
      }
    },record.remaining);
  }
  function createScheduled(callback,delay,args,repeat){
    if(typeof callback!=='function')return nativeSetTimeout(callback,delay);
    var record={id:nextScheduledId++,callback:callback,args:args,delay:normalizeDelay(delay),remaining:normalizeDelay(delay),repeat:repeat,cancelled:false,nativeId:null,scheduledAt:0};
    scheduled.set(record.id,record);
    scheduleRecord(record);
    return record.id;
  }
  function cancelScheduled(id){
    var record=scheduled.get(id);
    if(!record){nativeClearTimeout(id);return}
    record.cancelled=true;
    if(record.nativeId!==null)nativeClearTimeout(record.nativeId);
    scheduled.delete(id);
  }
  window.setTimeout=function(callback,delay){return createScheduled(callback,delay,[].slice.call(arguments,2),false)};
  window.clearTimeout=cancelScheduled;
  window.setInterval=function(callback,delay){return createScheduled(callback,delay,[].slice.call(arguments,2),true)};
  window.clearInterval=cancelScheduled;

  var audioContexts=[];
  var NativeAudioContext=window.AudioContext||window.webkitAudioContext;
  if(NativeAudioContext){
    function TrackedAudioContext(){
      var context=Reflect.construct(NativeAudioContext,[].slice.call(arguments));
      audioContexts.push(context);
      return context;
    }
    TrackedAudioContext.prototype=NativeAudioContext.prototype;
    Object.setPrototypeOf(TrackedAudioContext,NativeAudioContext);
    if(window.AudioContext)window.AudioContext=TrackedAudioContext;
    if(window.webkitAudioContext)window.webkitAudioContext=TrackedAudioContext;
  }

  var output=null;
  var toggle=null;
  var backButton=null;
  var forwardButton=null;
  var started=false;
  var running=false;
  var accumulated=0;
  var runStartedAt=0;
  var frameId=0;
  var pausedAnimations=[];
  var pausedMedia=[];
  var suspendedContexts=[];

  function elapsed(){return accumulated+(running?performance.now()-runStartedAt:0)}
  function formatElapsed(value){
    var centiseconds=Math.floor(value/10);
    var hundredths=centiseconds%100;
    var totalSeconds=Math.floor(centiseconds/100);
    var seconds=totalSeconds%60;
    var minutes=Math.floor(totalSeconds/60);
    return String(minutes).padStart(2,'0')+':'+String(seconds).padStart(2,'0')+'.'+String(hundredths).padStart(2,'0');
  }
  function render(){
    if(output)output.textContent=formatElapsed(elapsed());
    if(running)frameId=nativeRequestAnimationFrame(render);
  }
  function pauseScheduled(){
    presentationPaused=true;
    var now=performance.now();
    scheduled.forEach(function(record){
      if(record.nativeId===null)return;
      record.remaining=Math.max(0,record.remaining-(now-record.scheduledAt));
      nativeClearTimeout(record.nativeId);
      record.nativeId=null;
    });
  }
  function resumeScheduled(){
    presentationPaused=false;
    scheduled.forEach(function(record){scheduleRecord(record)});
  }
  function pausePresentation(){
    pauseScheduled();
    pausedAnimations=document.getAnimations().filter(function(animation){return animation.playState==='running'});
    pausedAnimations.forEach(function(animation){animation.pause()});
    pausedMedia=[].slice.call(document.querySelectorAll('audio,video')).filter(function(media){return !media.paused&&!media.ended});
    pausedMedia.forEach(function(media){media.pause()});
    suspendedContexts=audioContexts.filter(function(context){return context.state==='running'});
    suspendedContexts.forEach(function(context){context.suspend().catch(function(){})});
  }
  function resumePresentation(){
    resumeScheduled();
    pausedAnimations.forEach(function(animation){try{animation.play()}catch(ignore){}});
    pausedAnimations=[];
    pausedMedia.forEach(function(media){media.play().catch(function(){})});
    pausedMedia=[];
    suspendedContexts.forEach(function(context){context.resume().catch(function(){})});
    suspendedContexts=[];
  }
  function startTimer(){
    if(started)return;
    started=true;
    running=true;
    runStartedAt=performance.now();
    if(toggle){toggle.disabled=false;toggle.textContent='STOP';toggle.dataset.mode='stop';toggle.setAttribute('aria-pressed','false')}
    if(backButton)backButton.disabled=false;
    if(forwardButton)forwardButton.disabled=false;
    render();
  }
  function stopTimer(){
    if(!started||!running)return;
    accumulated+=performance.now()-runStartedAt;
    running=false;
    nativeCancelAnimationFrame(frameId);
    render();
    pausePresentation();
    document.body.classList.add('codex-748a-paused');
    if(toggle){toggle.textContent='START';toggle.dataset.mode='start';toggle.setAttribute('aria-pressed','true')}
  }
  function resumeTimer(){
    if(!started||running)return;
    resumePresentation();
    running=true;
    runStartedAt=performance.now();
    document.body.classList.remove('codex-748a-paused');
    if(toggle){toggle.textContent='STOP';toggle.dataset.mode='stop';toggle.setAttribute('aria-pressed','false')}
    render();
  }
  function toggleTimer(){if(running)stopTimer();else resumeTimer()}

  function advanceScheduled(amount){
    var left=Math.max(0,amount),guard=0;
    while(left>0&&scheduled.size&&guard++<1000){
      var records=[].slice.call(scheduled.values()).filter(function(record){return !record.cancelled});
      if(!records.length)break;
      var step=Math.min.apply(null,records.map(function(record){return record.remaining}));
      if(step>left){records.forEach(function(record){record.remaining-=left});left=0;break}
      records.forEach(function(record){record.remaining=Math.max(0,record.remaining-step)});
      left-=step;
      records.filter(function(record){return record.remaining<=.01&&!record.cancelled}).forEach(function(record){
        if(!record.repeat)scheduled.delete(record.id);else record.remaining=record.delay;
        try{record.callback.apply(window,record.args)}catch(error){nativeSetTimeout(function(){throw error},0)}
      });
    }
  }
  function shiftPresentation(delta){
    if(!started)return;
    if(running)stopTimer();
    var target=Math.max(0,accumulated+delta);
    var applied=target-accumulated;
    if(!applied)return;
    if(applied>0)advanceScheduled(applied);
    else scheduled.forEach(function(record){record.remaining+=-applied});
    document.getAnimations().forEach(function(animation){
      try{animation.pause();animation.currentTime=Math.max(0,(Number(animation.currentTime)||0)+applied)}catch(ignore){}
    });
    pausedAnimations=document.getAnimations();
    [].slice.call(document.querySelectorAll('audio,video')).forEach(function(media){
      try{if(Number.isFinite(media.duration))media.currentTime=Math.max(0,Math.min(media.duration,media.currentTime+applied/1000))}catch(ignore){}
    });
    accumulated=target;
    render();
  }

  window.codexTimingStart=startTimer;
  window.codexTimingController={start:startTimer,stop:stopTimer,resume:resumeTimer,toggle:toggleTimer,seekBy:shiftPresentation,read:function(){return {started:started,running:running,elapsedMilliseconds:elapsed(),display:formatElapsed(elapsed())}}};

  document.addEventListener('DOMContentLoaded',function(){
    var stack=document.createElement('div');
    stack.className='codex-748a-version-stack';
    stack.innerHTML='<div class="codex-748a-version-banner">CODEX 20260907_1110 • LOCAL TEST</div><div class="codex-748a-timing-panel"><button class="codex-748a-seek codex-748a-back" type="button" disabled aria-label="Move presentation back three seconds">BACK 3 SEC</button><div class="codex-748a-timer"><span class="codex-748a-timer-label">TIMER</span><output aria-label="Elapsed presentation time">00:00.00</output></div><button class="codex-748a-toggle" type="button" data-mode="stop" aria-pressed="false" disabled>STOP</button><button class="codex-748a-seek codex-748a-forward" type="button" disabled aria-label="Move presentation forward three seconds">FORWARD 3 SEC</button></div>';
    document.body.appendChild(stack);
    output=stack.querySelector('output');
    toggle=stack.querySelector('.codex-748a-toggle');
    backButton=stack.querySelector('.codex-748a-back');
    forwardButton=stack.querySelector('.codex-748a-forward');
    toggle.addEventListener('click',toggleTimer);
    backButton.addEventListener('click',function(){shiftPresentation(-3000)});
    forwardButton.addEventListener('click',function(){shiftPresentation(3000)});
  });
})();
