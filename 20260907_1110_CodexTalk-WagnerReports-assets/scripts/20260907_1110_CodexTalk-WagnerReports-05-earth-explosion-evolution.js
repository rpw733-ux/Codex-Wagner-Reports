
/* JAVASCRIPT SOURCE 15: CodexTalk1045a0829-015-codex-1012a-consolidated-hp-arrival-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 10:12 AM ET';
  if(stamp){
    stamp.textContent='CODEX 1012A • LOCAL TEST 08/26/26 • 10:12 AM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 10:12 AM Eastern Time');
  }
  if(!intro||!currentEnter)return;

  var consolidatedEnter=currentEnter.cloneNode(true);
  consolidatedEnter.setAttribute('aria-label','Enter Wagner Reports with the consolidated center-origin introduction');
  currentEnter.replaceWith(consolidatedEnter);

  function setCenterOffset(node,bx,by){
    var rect=node.getBoundingClientRect();
    node.style.setProperty('--codex-1012a-dx',(bx-(rect.left+rect.width/2))+'px');
    node.style.setProperty('--codex-1012a-dy',(by-(rect.top+rect.height/2))+'px');
  }

  function prepareCenterOrigin(){
    var blast=document.querySelector('.space-explosion img')||document.querySelector('.space-explosion');
    var blastRect=blast&&blast.getBoundingClientRect();
    var bx=innerWidth/2;
    var by=innerHeight/2;
    if(blastRect&&blastRect.width&&blastRect.height){
      bx=blastRect.left+blastRect.width/2;
      by=blastRect.top+blastRect.height/2;
    }
    document.documentElement.style.setProperty('--codex-1012a-blast-x',bx+'px');
    document.documentElement.style.setProperty('--codex-1012a-blast-y',by+'px');
    var destinations=[document.querySelector('.world-zone')].concat(Array.prototype.slice.call(document.querySelectorAll('.editorial-shot')));
    destinations.filter(Boolean).forEach(function(node){setCenterOffset(node,bx,by)});
  }

  consolidatedEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      shot.style.removeProperty('opacity');
      shot.style.removeProperty('transition');
      shot.style.removeProperty('transform');
      shot.style.removeProperty('filter');
    });
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;
    intro.classList.remove('finishing','running','codex-visual-only','codex-926a-sequence','codex-1012a-sequence');
    void intro.offsetWidth;
    prepareCenterOrigin();
    document.body.classList.add('codex-1012a-arrival');
    intro.classList.add('codex-visual-only','codex-1012a-sequence','running');

    /* Visibility begins just before the explosion, remains substantial at its apex, and completes without a black frame. */
    setTimeout(function(){intro.classList.add('finishing')},5150);
    setTimeout(function(){intro.hidden=true},12250);
    setTimeout(function(){
      document.body.classList.add('earth-ready','codex-1012a-arrival-complete');
    },13650);
  });
})();


/* JAVASCRIPT SOURCE 16: CodexTalk1045a0829-016-codex-1022a-no-black-gap-and-higher-earth-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 10:22 AM ET';
  if(stamp){
    stamp.textContent='CODEX 1022A • LOCAL TEST 08/26/26 • 10:22 AM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 10:22 AM Eastern Time');
  }
  if(!intro||!currentEnter)return;

  var correctedEnter=currentEnter.cloneNode(true);
  correctedEnter.setAttribute('aria-label','Enter Wagner Reports with continuous star explosion and Earth introduction');
  currentEnter.replaceWith(correctedEnter);

  function setCenterOffset1022(node,bx,by){
    var rect=node.getBoundingClientRect();
    node.style.setProperty('--codex-1012a-dx',(bx-(rect.left+rect.width/2))+'px');
    node.style.setProperty('--codex-1012a-dy',(by-(rect.top+rect.height/2))+'px');
  }

  function prepareCenterOrigin1022(){
    var blast=document.querySelector('.space-explosion img')||document.querySelector('.space-explosion');
    var blastRect=blast&&blast.getBoundingClientRect();
    var bx=innerWidth/2;
    var by=innerHeight/2;
    if(blastRect&&blastRect.width&&blastRect.height){
      bx=blastRect.left+blastRect.width/2;
      by=blastRect.top+blastRect.height/2;
    }
    var destinations=[document.querySelector('.world-zone')].concat(Array.prototype.slice.call(document.querySelectorAll('.editorial-shot')));
    destinations.filter(Boolean).forEach(function(node){setCenterOffset1022(node,bx,by)});
  }

  correctedEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      shot.style.removeProperty('opacity');
      shot.style.removeProperty('transition');
      shot.style.removeProperty('transform');
      shot.style.removeProperty('filter');
    });
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;
    intro.classList.remove('finishing','running','codex-visual-only','codex-926a-sequence','codex-1012a-sequence','codex-1022a-sequence');
    void intro.offsetWidth;
    prepareCenterOrigin1022();
    document.body.classList.add('codex-1012a-arrival');
    intro.classList.add('codex-visual-only','codex-1022a-sequence','running');

    setTimeout(function(){intro.classList.add('finishing')},5150);
    setTimeout(function(){intro.hidden=true},12250);
    setTimeout(function(){
      document.body.classList.add('earth-ready','codex-1012a-arrival-complete');
    },13650);
  });
})();


/* JAVASCRIPT SOURCE 17: CodexTalk1045a0829-017-codex-1030a-apex-origin-oversized-earth-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 10:30 AM ET';
  if(stamp){
    stamp.textContent='CODEX 1030A • LOCAL TEST 08/26/26 • 10:30 AM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 10:30 AM Eastern Time');
  }
  if(!intro||!currentEnter)return;

  var apexEnter=currentEnter.cloneNode(true);
  apexEnter.setAttribute('aria-label','Enter Wagner Reports with apex-centered Earth and picture arrival');
  currentEnter.replaceWith(apexEnter);

  function setApexOffset1030(node,bx,by){
    var rect=node.getBoundingClientRect();
    var dx=bx-(rect.left+rect.width/2);
    var dy=by-(rect.top+rect.height/2);
    node.style.setProperty('--codex-1030a-dx',dx+'px');
    node.style.setProperty('--codex-1030a-dy',dy+'px');
    node.style.setProperty('--codex-1030a-dx92',(dx*.92)+'px');
    node.style.setProperty('--codex-1030a-dy92',(dy*.92)+'px');
    node.style.setProperty('--codex-1030a-dx68',(dx*.68)+'px');
    node.style.setProperty('--codex-1030a-dy68',(dy*.68)+'px');
    node.style.setProperty('--codex-1030a-dx36',(dx*.36)+'px');
    node.style.setProperty('--codex-1030a-dy36',(dy*.36)+'px');
  }

  function prepareApexOrigin1030(){
    var blast=document.querySelector('.space-explosion img')||document.querySelector('.space-explosion');
    var blastRect=blast&&blast.getBoundingClientRect();
    var bx=innerWidth/2;
    var by=innerHeight/2;
    if(blastRect&&blastRect.width&&blastRect.height){
      bx=blastRect.left+blastRect.width*.505;
      by=blastRect.top+blastRect.height*.493;
    }
    var destinations=[document.querySelector('.world-zone')].concat(Array.prototype.slice.call(document.querySelectorAll('.editorial-shot')));
    destinations.filter(Boolean).forEach(function(node){setApexOffset1030(node,bx,by)});
  }

  apexEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      shot.style.removeProperty('opacity');
      shot.style.removeProperty('transition');
      shot.style.removeProperty('transform');
      shot.style.removeProperty('filter');
    });
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;
    intro.classList.remove('finishing','running','codex-visual-only','codex-926a-sequence','codex-1012a-sequence','codex-1022a-sequence','codex-1030a-sequence');
    void intro.offsetWidth;
    prepareApexOrigin1030();
    intro.classList.add('codex-visual-only','codex-1030a-sequence','running');

    /* 8.05 seconds matches the measured bright apex of the 5.0-second-delayed explosion. */
    setTimeout(function(){document.body.classList.add('codex-1030a-arrival')},8050);
    setTimeout(function(){intro.classList.add('finishing')},12150);
    setTimeout(function(){intro.hidden=true},12300);
    setTimeout(function(){
      document.body.classList.add('earth-ready','codex-1030a-arrival-complete');
    },16550);
  });
})();


/* JAVASCRIPT SOURCE 18: CodexTalk1045a0829-018-codex-1141a-living-explosion-and-forced-earth-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  var world=document.querySelector('.world-zone');
  var earth=document.querySelector('.earth');
  var field=document.querySelector('.button-field');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 11:41 AM ET';
  if(stamp){
    stamp.textContent='CODEX 1141A • LOCAL TEST 08/26/26 • 11:41 AM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 11:41 AM Eastern Time');
  }

  function forceOversizedEarth1141(){
    if(innerWidth<900||!world||!earth||!field)return;
    var size=Math.min(1400,Math.max(1150,innerHeight*1.6));
    var px=size+'px';
    world.style.setProperty('--codex-1141a-earth-size',px,'important');
    world.style.setProperty('position','fixed','important');
    world.style.setProperty('top','80px','important');
    world.style.setProperty('bottom','auto','important');
    world.style.setProperty('left','0','important');
    world.style.setProperty('right','0','important');
    world.style.setProperty('width','100vw','important');
    world.style.setProperty('height',px,'important');
    [earth,field].forEach(function(node){
      node.style.setProperty('position','absolute','important');
      node.style.setProperty('top','0','important');
      node.style.setProperty('bottom','auto','important');
      node.style.setProperty('left','50%','important');
      node.style.setProperty('right','auto','important');
      node.style.setProperty('width',px,'important');
      node.style.setProperty('height',px,'important');
      node.style.setProperty('min-width',px,'important');
      node.style.setProperty('max-width','none','important');
      node.style.setProperty('max-height','none','important');
      node.style.setProperty('margin','0','important');
      node.style.setProperty('transform','translateX(-50%)','important');
    });
  }
  forceOversizedEarth1141();
  addEventListener('resize',forceOversizedEarth1141);

  var blast=document.querySelector('.space-explosion');
  if(blast&&!blast.querySelector('.codex-1141a-motion')){
    var motion=document.createElement('div');
    motion.className='codex-1141a-motion';
    ['core-a','core-b','core-c'].forEach(function(name){
      var core=document.createElement('span');
      core.className='codex-1141a-core '+name;
      motion.appendChild(core);
    });
    for(var c=1;c<=5;c++){
      var cloud=document.createElement('span');
      cloud.className='codex-1141a-cloud cloud-'+c;
      motion.appendChild(cloud);
    }
    for(var s=0;s<30;s++){
      var spark=document.createElement('span');
      var angle=(s*137.508)*Math.PI/180;
      var distance=90+(s%7)*18;
      spark.className='codex-1141a-spark';
      spark.style.setProperty('--spark-x',(Math.cos(angle)*distance)+'px');
      spark.style.setProperty('--spark-y',(Math.sin(angle)*distance*.72)+'px');
      spark.style.setProperty('--spark-r',(angle*180/Math.PI)+'deg');
      spark.style.setProperty('--spark-w',(3+(s%4))+'px');
      spark.style.setProperty('--spark-h',(1+(s%3)*.45)+'px');
      spark.style.setProperty('--spark-delay',(5.05+(s%10)*.13)+'s');
      spark.style.setProperty('--spark-duration',(2.7+(s%6)*.28)+'s');
      motion.appendChild(spark);
    }
    blast.appendChild(motion);
  }

  if(!intro||!currentEnter)return;
  var livingEnter=currentEnter.cloneNode(true);
  livingEnter.setAttribute('aria-label','Enter Wagner Reports with living explosion and synchronized arrival');
  currentEnter.replaceWith(livingEnter);

  function setApexOffset1141(node,bx,by){
    var rect=node.getBoundingClientRect();
    var dx=bx-(rect.left+rect.width/2);
    var dy=by-(rect.top+rect.height/2);
    node.style.setProperty('--codex-1141a-dx',dx+'px');
    node.style.setProperty('--codex-1141a-dy',dy+'px');
    node.style.setProperty('--codex-1141a-dx92',(dx*.92)+'px');
    node.style.setProperty('--codex-1141a-dy92',(dy*.92)+'px');
    node.style.setProperty('--codex-1141a-dx68',(dx*.68)+'px');
    node.style.setProperty('--codex-1141a-dy68',(dy*.68)+'px');
    node.style.setProperty('--codex-1141a-dx36',(dx*.36)+'px');
    node.style.setProperty('--codex-1141a-dy36',(dy*.36)+'px');
  }

  function prepareApexOrigin1141(){
    forceOversizedEarth1141();
    var image=document.querySelector('.space-explosion img');
    var rect=image&&image.getBoundingClientRect();
    var bx=innerWidth/2;
    var by=innerHeight/2;
    if(rect&&rect.width&&rect.height){
      bx=rect.left+rect.width*.505;
      by=rect.top+rect.height*.493;
    }
    var destinations=[world].concat(Array.prototype.slice.call(document.querySelectorAll('.editorial-shot')));
    destinations.filter(Boolean).forEach(function(node){setApexOffset1141(node,bx,by)});
  }

  livingEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      shot.style.removeProperty('opacity');
      shot.style.removeProperty('transition');
      shot.style.removeProperty('transform');
      shot.style.removeProperty('filter');
    });
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;
    intro.classList.remove('finishing','running','codex-visual-only','codex-926a-sequence','codex-1012a-sequence','codex-1022a-sequence','codex-1030a-sequence','codex-1141a-sequence');
    void intro.offsetWidth;
    prepareApexOrigin1141();
    intro.classList.add('codex-visual-only','codex-1141a-sequence','running');

    setTimeout(function(){document.body.classList.add('codex-1141a-arrival')},8050);
    /* No finishing class is added, preventing inherited black fades and delayed picture observers. */
    setTimeout(function(){intro.hidden=true},12300);
    setTimeout(function(){
      document.body.classList.add('earth-ready','codex-1141a-arrival-complete');
      forceOversizedEarth1141();
    },16550);
  });
})();


/* JAVASCRIPT SOURCE 19: CodexTalk1045a0829-019-codex-1152a-visible-oversized-earth-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 11:52 AM ET';
  if(stamp){
    stamp.textContent='CODEX 1152A • LOCAL TEST 08/26/26 • 11:52 AM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 11:52 AM Eastern Time');
  }
})();


/* JAVASCRIPT SOURCE 20: CodexTalk1045a0829-020-codex-1200p-diagnostic-earth-overshoot-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  var world=document.querySelector('.world-zone');
  var earth=document.querySelector('.earth');
  var field=document.querySelector('.button-field');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 12:00 PM ET';
  if(stamp){
    stamp.textContent='CODEX 1200P • LOCAL TEST 08/26/26 • 12:00 PM ET';
    stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 12:00 PM Eastern Time');
  }

  function enforceDiagnosticEarth1200(){
    if(innerWidth<900||!world||!earth||!field)return;
    world.style.setProperty('--codex-1141a-earth-size','1400px','important');
    world.style.setProperty('--codex-1200p-earth-size','1400px','important');
    world.style.setProperty('position','fixed','important');
    world.style.setProperty('top','-300px','important');
    world.style.setProperty('bottom','auto','important');
    world.style.setProperty('left','0','important');
    world.style.setProperty('right','0','important');
    world.style.setProperty('width','100vw','important');
    world.style.setProperty('height','1400px','important');
    world.style.setProperty('z-index','20','important');
    world.style.setProperty('visibility','visible','important');
    world.style.setProperty('overflow','visible','important');
    [earth,field].forEach(function(node){
      node.style.setProperty('position','absolute','important');
      node.style.setProperty('top','0','important');
      node.style.setProperty('bottom','auto','important');
      node.style.setProperty('left','50%','important');
      node.style.setProperty('right','auto','important');
      node.style.setProperty('width','1400px','important');
      node.style.setProperty('height','1400px','important');
      node.style.setProperty('min-width','1400px','important');
      node.style.setProperty('min-height','1400px','important');
      node.style.setProperty('max-width','none','important');
      node.style.setProperty('max-height','none','important');
      node.style.setProperty('margin','0','important');
      node.style.setProperty('transform','translateX(-50%)','important');
      node.style.setProperty('display','block','important');
      node.style.setProperty('visibility','visible','important');
    });
    earth.style.setProperty('opacity','1','important');
    earth.style.setProperty('z-index','1','important');
    earth.style.setProperty('border','3px solid rgba(157,225,255,.92)','important');
    earth.style.setProperty('filter','brightness(1.45) contrast(1.12) saturate(1.28)','important');
    earth.style.setProperty('box-shadow','0 0 0 2px rgba(255,225,146,.78),0 0 34px rgba(99,204,255,.76),0 0 76px rgba(255,190,71,.42)','important');
    field.style.setProperty('z-index','12','important');
  }

  var enforcing=false;
  function enforceDuringArrival1200(){
    enforceDiagnosticEarth1200();
    if(document.body.classList.contains('codex-1141a-arrival')&&!document.body.classList.contains('codex-1141a-arrival-complete')){
      requestAnimationFrame(enforceDuringArrival1200);
    }else{
      enforcing=false;
    }
  }
  function watchDiagnosticArrival1200(){
    if((document.body.classList.contains('codex-1141a-arrival')||document.body.classList.contains('codex-1141a-arrival-complete'))&&!enforcing){
      enforcing=true;
      enforceDuringArrival1200();
    }
  }
  enforceDiagnosticEarth1200();
  addEventListener('resize',enforceDiagnosticEarth1200);
  new MutationObserver(watchDiagnosticArrival1200).observe(document.body,{attributes:true,attributeFilter:['class']});
})();


/* JAVASCRIPT SOURCE 21: CodexTalk1045a0829-021-codex-1217p-real-video-explosion-and-visible-earth-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 12:39 PM ET';
  if(stamp){stamp.textContent='CODEX 1239P • LOCAL TEST 08/26/26 • 12:39 PM ET';stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 12:39 PM Eastern Time')}
  function applyAccessIcons1229(){
    document.querySelectorAll('.button-field .news-button').forEach(function(button){
      var sports=button.classList.contains('sport')||!!button.closest('.sports-row');
      var icon=button.querySelector('.button-icon');
      var hadSpeaker=!!icon&&icon.textContent.indexOf('🔊')!==-1;
      var canListen=!sports&&hadSpeaker;
      var labelNode=Array.prototype.slice.call(button.children).find(function(child){return !child.classList.contains('button-icon')});
      var label=labelNode?labelNode.textContent.trim():'News item';
      if(!icon){icon=document.createElement('span');icon.className='button-icon';button.insertBefore(icon,button.firstChild)}
      icon.classList.add('access-icon');
      icon.classList.toggle('read-only',!canListen);
      icon.innerHTML=canListen?'<span class="access-speaker" aria-hidden="true">🔊</span><span class="read-glasses" aria-hidden="true">👓</span>':'<span class="read-glasses" aria-hidden="true">👓</span>';
      button.setAttribute('aria-label',label+(canListen?', read or listen':', read'));
      if(sports)button.removeAttribute('data-audio');
    });
  }
  applyAccessIcons1229();
  if(!intro||!currentEnter)return;

  var videoStage=document.createElement('div');
  videoStage.className='codex-1217p-video-stage';
  videoStage.setAttribute('aria-hidden','true');
  videoStage.innerHTML='<video class="codex-1217p-flames" muted playsinline preload="none"></video><video class="codex-1217p-blast" muted playsinline preload="none"></video>';
  intro.appendChild(videoStage);
  var blastVideo=videoStage.querySelector('.codex-1217p-blast');
  var flamesVideo=videoStage.querySelector('.codex-1217p-flames');
  blastVideo.playbackRate=.71;
  flamesVideo.playbackRate=.76;
  var videoTimers=[];
  var world=document.querySelector('.world-zone');
  var earth=document.querySelector('.earth');
  var field=document.querySelector('.button-field');

  function clearVideoTimers(){videoTimers.forEach(clearTimeout);videoTimers=[]}
  function resetVideo(video){video.pause();try{video.currentTime=0}catch(ignore){}}
  function releaseInheritedEarthSizing(){[world,earth,field].filter(Boolean).forEach(function(node){node.removeAttribute('style')})}
  function preparePictures(){
    var cx=innerWidth/2,cy=innerHeight/2;
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      var rect=shot.getBoundingClientRect();
      var dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);
      shot.style.setProperty('--codex-1217p-dx',dx+'px');shot.style.setProperty('--codex-1217p-dy',dy+'px');
      shot.style.setProperty('--codex-1217p-dx85',(dx*.85)+'px');shot.style.setProperty('--codex-1217p-dy85',(dy*.85)+'px');
      shot.style.setProperty('--codex-1217p-dx62',(dx*.62)+'px');shot.style.setProperty('--codex-1217p-dy62',(dy*.62)+'px');
      shot.style.setProperty('--codex-1217p-dx30',(dx*.30)+'px');shot.style.setProperty('--codex-1217p-dy30',(dy*.30)+'px');
    });
  }

  var realEnter=currentEnter.cloneNode(true);
  realEnter.setAttribute('aria-label','Enter Wagner Reports with slower moving explosion footage and a no-Earth picture arrival');
  currentEnter.replaceWith(realEnter);
  realEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    clearVideoTimers();resetVideo(blastVideo);resetVideo(flamesVideo);
    releaseInheritedEarthSizing();
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;intro.className='cinema-intro codex-visual-only codex-1217p-sequence running';
    videoTimers.push(setTimeout(function(){flamesVideo.play().catch(function(){})},4550));
    videoTimers.push(setTimeout(function(){blastVideo.play().catch(function(){})},4800));
    videoTimers.push(setTimeout(function(){
      releaseInheritedEarthSizing();
      document.body.classList.add('earth-ready');
      preparePictures();
      void document.body.offsetWidth;
      document.body.classList.add('codex-1217p-arrival');
    },11200));
    videoTimers.push(setTimeout(function(){document.body.classList.add('codex-1217p-arrival-complete')},18400));
    videoTimers.push(setTimeout(function(){intro.hidden=true;resetVideo(blastVideo);resetVideo(flamesVideo)},18850));
  });
  addEventListener('resize',function(){if(document.body.classList.contains('codex-1217p-arrival')||document.body.classList.contains('codex-1217p-arrival-complete'))requestAnimationFrame(releaseInheritedEarthSizing)});
})();


/* JAVASCRIPT SOURCE 22: CodexTalk1045a0829-022-codex-1249p-independent-fireball-arrival-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  var stage=document.querySelector('.report-stage');
  var originalField=document.querySelector('.button-field');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 12:49 PM ET';
  if(stamp){stamp.textContent='CODEX 1249P • LOCAL TEST 08/26/26 • 12:49 PM ET';stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 12:49 PM Eastern Time')}
  if(!intro||!currentEnter||!stage||!originalField)return;

  var composition=document.createElement('div');
  composition.className='codex-1249p-composition';
  composition.setAttribute('aria-label','Wagner Reports final Earth, pictures, and news choices');
  var earth=document.createElement('div');earth.className='codex-1249p-earth';earth.setAttribute('aria-hidden','true');composition.appendChild(earth);

  var categories=originalField.cloneNode(true);
  categories.className='codex-1249p-categories';
  categories.removeAttribute('style');
  var originalButtons=Array.prototype.slice.call(originalField.querySelectorAll('.news-button'));
  Array.prototype.slice.call(categories.querySelectorAll('.news-button')).forEach(function(button,index){
    button.removeAttribute('style');
    var canListen=(button.getAttribute('aria-label')||'').indexOf('read or listen')!==-1;
    var icon=button.querySelector('.button-icon');
    if(!icon){icon=document.createElement('span');button.insertBefore(icon,button.firstChild)}
    icon.className='codex-1249p-access';
    icon.innerHTML=(canListen?'<span class="codex-1249p-speaker" aria-hidden="true">🔊</span>':'')+'<img src="./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-copper-gold-reading-glasses.png" alt="">';
    button.addEventListener('click',function(){if(originalButtons[index])originalButtons[index].click()});
  });
  composition.appendChild(categories);

  var left=document.querySelector('.collage-left'),right=document.querySelector('.collage-right');
  var leftShots=left?Array.prototype.slice.call(left.children).filter(function(node){return node.classList.contains('editorial-shot')}).slice(0,3):[];
  var rightShots=right?Array.prototype.slice.call(right.children).filter(function(node){return node.classList.contains('editorial-shot')}).slice(0,3):[];
  var sources=[];
  for(var i=0;i<3;i++){if(leftShots[i])sources.push(leftShots[i]);if(rightShots[i])sources.push(rightShots[i])}
  var pictureNodes=sources.map(function(source,index){
    var shot=document.createElement('figure');
    shot.className='codex-1249p-shot codex-1249p-shot-'+(index+1);
    shot.innerHTML=source.innerHTML;
    shot.style.setProperty('--codex-1249p-delay',(index===0?0:.38+index*.16)+'s');
    composition.appendChild(shot);
    return shot;
  });
  stage.appendChild(composition);

  function preparePictureOrigins(){
    var cx=innerWidth/2,cy=innerHeight/2;
    pictureNodes.forEach(function(shot){
      var rect=shot.getBoundingClientRect(),dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);
      shot.style.setProperty('--codex-1249p-dx',dx+'px');shot.style.setProperty('--codex-1249p-dy',dy+'px');
      shot.style.setProperty('--codex-1249p-dx86',(dx*.86)+'px');shot.style.setProperty('--codex-1249p-dy86',(dy*.86)+'px');
      shot.style.setProperty('--codex-1249p-dx60',(dx*.60)+'px');shot.style.setProperty('--codex-1249p-dy60',(dy*.60)+'px');
      shot.style.setProperty('--codex-1249p-dx28',(dx*.28)+'px');shot.style.setProperty('--codex-1249p-dy28',(dy*.28)+'px');
    });
  }

  var videoStage=intro.querySelector('.codex-1217p-video-stage');
  var blastVideo=videoStage&&videoStage.querySelector('.codex-1217p-blast');
  var flamesVideo=videoStage&&videoStage.querySelector('.codex-1217p-flames');
  var timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function resetVideo(video){if(!video)return;video.pause();try{video.currentTime=0}catch(ignore){}}

  var finalEnter=currentEnter.cloneNode(true);
  finalEnter.setAttribute('aria-label','Enter Wagner Reports with the final pulsing fireball and six-picture Earth arrival');
  currentEnter.replaceWith(finalEnter);
  finalEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    clearTimers();resetVideo(blastVideo);resetVideo(flamesVideo);
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-active','codex-1249p-arrival','codex-1249p-complete');
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;intro.className='cinema-intro codex-visual-only codex-1217p-sequence running';
    document.body.classList.add('codex-1249p-active');
    preparePictureOrigins();
    if(blastVideo)blastVideo.playbackRate=.71;
    timers.push(setTimeout(function(){if(blastVideo)blastVideo.play().catch(function(){})},4800));
    timers.push(setTimeout(function(){
      preparePictureOrigins();
      document.body.classList.add('earth-ready','codex-1249p-arrival');
    },11000));
    timers.push(setTimeout(function(){document.body.classList.add('codex-1249p-complete')},18400));
    timers.push(setTimeout(function(){intro.hidden=true;resetVideo(blastVideo)},18850));
  });
  addEventListener('resize',preparePictureOrigins);
})();


/* JAVASCRIPT SOURCE 23: CodexTalk1045a0829-023-codex-244p-correct-foundation-and-trump-slice-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 2:44 PM ET';
  if(stamp){stamp.textContent='CODEX 244P • LOCAL TEST 08/26/26 • 2:44 PM ET';stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 2:44 PM Eastern Time')}

  var gate=document.querySelector('.entry-gate');
  var websiteEntry=document.querySelector('.enter-report');
  var textIntroEntry=document.querySelector('.play-intro');
  if(gate&&websiteEntry&&textIntroEntry){
    websiteEntry.textContent='ENTER WAGNER REPORTS WEBSITE';
    websiteEntry.setAttribute('aria-label','Enter the Wagner Reports website with the moving star and explosion introduction');
    textIntroEntry.textContent='ENTER TEXT INTRO AND WAGNER REPORTS WEBSITE (AUDIO)';
    textIntroEntry.setAttribute('aria-label','Enter the audio text introduction and then the Wagner Reports website');
    var choices=document.createElement('div');choices.className='codex-244p-entry-choices';
    websiteEntry.parentNode.insertBefore(choices,websiteEntry);choices.appendChild(websiteEntry);choices.appendChild(textIntroEntry);
    var note=document.createElement('p');note.className='codex-244p-entry-note';note.textContent='CHOOSE THE WEBSITE OR THE AUDIO TEXT INTRODUCTION';choices.appendChild(note);
  }

  var dialog=document.getElementById('trump-news-panel-244p');
  if(dialog){
    dialog.querySelector('.close-panel').addEventListener('click',function(){dialog.close()});
    dialog.addEventListener('click',function(event){if(event.target===dialog)dialog.close()});
  }
  var composition=document.querySelector('.codex-1249p-composition');
  var field=composition&&composition.querySelector('.codex-1249p-categories');
  var trumpButton=field&&Array.prototype.slice.call(field.querySelectorAll('.news-button')).find(function(button){return /Trump News/i.test(button.textContent)});
  if(!trumpButton)return;
  trumpButton.removeAttribute('data-audio');
  var speaker=trumpButton.querySelector('.codex-1249p-speaker');
  var glasses=trumpButton.querySelector('.codex-1249p-access img');
  var status=dialog&&dialog.querySelector('.audio-status');
  var audioUrl='https://pub-e17a6bf77ed540ec863c9dfd3e61ecd8.r2.dev/trump-news-122p0826-charon-128k.mp3';
  var trumpAudio=document.createElement('audio');trumpAudio.id='trump-news-charon-244p';trumpAudio.preload='metadata';trumpAudio.src=audioUrl;document.body.appendChild(trumpAudio);
  function setPlaying(isPlaying){trumpButton.classList.toggle('codex-244p-playing',isPlaying);if(speaker)speaker.setAttribute('aria-label',isPlaying?'Pause Trump News Charon narration':'Play Trump News Charon narration')}
  function toggleTrumpAudio(event){
    if(event){event.preventDefault();event.stopPropagation();if(event.stopImmediatePropagation)event.stopImmediatePropagation()}
    if(trumpAudio.paused){trumpAudio.play().then(function(){setPlaying(true);if(status)status.textContent='Playing the Charon Trump News narration.'}).catch(function(){setPlaying(false);if(status)status.textContent='The audio could not start. Select the speaker again.'})}
    else{trumpAudio.pause();setPlaying(false);if(status)status.textContent='Charon narration paused.'}
  }
  function showCards(event){if(event){event.preventDefault();event.stopPropagation();if(event.stopImmediatePropagation)event.stopImmediatePropagation()}if(dialog&&!dialog.open)dialog.showModal()}
  trumpAudio.addEventListener('ended',function(){setPlaying(false);if(status)status.textContent='Charon narration complete. Select the speaker to hear it again.'});
  trumpAudio.addEventListener('error',function(){setPlaying(false);if(status)status.textContent='The Charon audio could not be loaded from Cloudflare R2.'});
  if(speaker){speaker.removeAttribute('aria-hidden');speaker.setAttribute('title','Play or pause Trump News with Charon');speaker.setAttribute('role','button');speaker.setAttribute('tabindex','0');speaker.setAttribute('aria-label','Play Trump News Charon narration');speaker.addEventListener('click',toggleTrumpAudio,true);speaker.addEventListener('keydown',function(event){if(event.key==='Enter'||event.key===' ')toggleTrumpAudio(event)},true)}
  if(glasses){glasses.alt='Reading glasses';glasses.setAttribute('title','Read Trump News');glasses.setAttribute('role','button');glasses.setAttribute('tabindex','0');glasses.addEventListener('click',showCards,true);glasses.addEventListener('keydown',function(event){if(event.key==='Enter'||event.key===' ')showCards(event)},true)}
})();


/* JAVASCRIPT SOURCE 24: CodexTalk1045a0829-024-codex-412p-continuous-centered-fire-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p');var stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 4:12 PM ET';
  if(stamp){stamp.textContent='CODEX 412P • BETA TEST 08/26/26 • 4:12 PM ET';stamp.setAttribute('aria-label','Codex beta test created August 26, 2026 at 4:12 PM Eastern Time')}
  var inheritedIntro=document.querySelector('.cinema-intro'),currentEntry=document.querySelector('.enter-report'),composition=document.querySelector('.codex-1249p-composition'),stage=document.querySelector('.report-stage');if(!inheritedIntro||!currentEntry||!composition||!stage)return;
  var cleanEntry=currentEntry.cloneNode(true);cleanEntry.textContent='ENTER WAGNER REPORTS WEBSITE';cleanEntry.setAttribute('aria-label','Enter Wagner Reports with three continuous centered explosions and a centered foreground emergence');currentEntry.replaceWith(cleanEntry);
  var apex='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-earth-wagner-photographic.jpg',loop='';
  var overlay=document.createElement('div');overlay.className='codex-412p-intro';overlay.setAttribute('aria-hidden','true');
  function burstMarkup(index){return '<div class="codex-412p-burst codex-412p-burst-'+index+'"><img src="'+apex+'" alt=""><video muted playsinline preload="none" loop></video></div>'}
  overlay.innerHTML='<div class="codex-412p-star"></div>'+burstMarkup(1)+burstMarkup(2)+burstMarkup(3);document.body.appendChild(overlay);
  var videos=Array.prototype.slice.call(overlay.querySelectorAll('video')),shots=Array.prototype.slice.call(composition.querySelectorAll('.codex-1249p-shot')),timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}function resetVideos(){videos.forEach(function(video){video.pause();try{video.currentTime=0}catch(ignore){}})}
  function prepareOrigins(){var cx=innerWidth/2,cy=innerHeight*.54,stageTop=stage.getBoundingClientRect().top;composition.style.setProperty('--codex-412p-stage-y',(cy-stageTop)+'px');shots.forEach(function(shot){var rect=shot.getBoundingClientRect(),dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);shot.style.setProperty('--codex-1249p-dx',dx+'px');shot.style.setProperty('--codex-1249p-dy',dy+'px');shot.style.setProperty('--codex-1249p-dx86',(dx*.86)+'px');shot.style.setProperty('--codex-1249p-dy86',(dy*.86)+'px');shot.style.setProperty('--codex-1249p-dx60',(dx*.60)+'px');shot.style.setProperty('--codex-1249p-dy60',(dy*.60)+'px');shot.style.setProperty('--codex-1249p-dx28',(dx*.28)+'px');shot.style.setProperty('--codex-1249p-dy28',(dy*.28)+'px')})}
  function resetFinalScene(){document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-active','codex-1249p-arrival','codex-1249p-complete','codex-122p-active','codex-412p-active','codex-412p-arrival','codex-412p-complete')}
  cleanEntry.addEventListener('click',function(){clearTimers();resetVideos();resetFinalScene();scrollTo(0,0);var gate=document.querySelector('.entry-gate');if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}inheritedIntro.hidden=true;document.body.classList.add('codex-1249p-active','codex-412p-active');prepareOrigins();overlay.classList.remove('playing','fading');void overlay.offsetWidth;overlay.classList.add('playing');videos.forEach(function(video,index){video.playbackRate=.64;try{video.currentTime=index*.27}catch(ignore){}video.play().catch(function(){})});timers.push(setTimeout(function(){prepareOrigins();document.body.classList.add('earth-ready','codex-1249p-arrival','codex-412p-arrival')},8900));timers.push(setTimeout(function(){overlay.classList.add('fading')},14550));timers.push(setTimeout(function(){document.body.classList.remove('codex-1249p-arrival','codex-412p-arrival');document.body.classList.add('codex-1249p-complete','codex-412p-complete')},16100));timers.push(setTimeout(function(){overlay.classList.remove('playing','fading');resetVideos()},16850))});
  addEventListener('resize',function(){if(document.body.classList.contains('codex-412p-active'))prepareOrigins()});
})();


/* JAVASCRIPT SOURCE 25: CodexTalk1045a0829-025-codex-533p-samsung-compatible-fire-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p'),stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/26/26 <b>•</b> 5:33 PM ET';
  if(stamp){stamp.textContent='CODEX 533P • LOCAL TEST 08/26/26 • 5:33 PM ET';stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 5:33 PM Eastern Time')}
  var oldOverlay=document.querySelector('.codex-412p-intro');if(oldOverlay)oldOverlay.remove();
  var inheritedIntro=document.querySelector('.cinema-intro'),currentEntry=document.querySelector('.enter-report'),composition=document.querySelector('.codex-1249p-composition'),stage=document.querySelector('.report-stage');if(!inheritedIntro||!currentEntry||!composition||!stage)return;
  var cleanEntry=currentEntry.cloneNode(true);cleanEntry.textContent='ENTER WAGNER REPORTS WEBSITE';cleanEntry.setAttribute('aria-label','Enter Wagner Reports with three Samsung-compatible moving fire explosions and a centered foreground emergence');currentEntry.replaceWith(cleanEntry);
  var apex='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-earth-wagner-photographic.jpg',flames='';
  var overlay=document.createElement('div');overlay.className='codex-533p-intro';overlay.setAttribute('aria-hidden','true');
  function burstMarkup(index){return '<div class="codex-533p-burst codex-533p-burst-'+index+'"><div class="codex-533p-media"><img src="'+apex+'" alt=""><video muted playsinline preload="none" loop poster="'+apex+'"></video></div></div>'}
  overlay.innerHTML='<div class="codex-533p-star"></div>'+burstMarkup(1)+burstMarkup(2)+burstMarkup(3);document.body.appendChild(overlay);
  var videos=Array.prototype.slice.call(overlay.querySelectorAll('video')),shots=Array.prototype.slice.call(composition.querySelectorAll('.codex-1249p-shot')),timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}function resetVideos(){videos.forEach(function(video){video.pause();try{video.currentTime=0}catch(ignore){}})}
  function prepareOrigins(){var cx=innerWidth/2,cy=innerHeight*.54,stageTop=stage.getBoundingClientRect().top;composition.style.setProperty('--codex-412p-stage-y',(cy-stageTop)+'px');shots.forEach(function(shot){var rect=shot.getBoundingClientRect(),dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);shot.style.setProperty('--codex-1249p-dx',dx+'px');shot.style.setProperty('--codex-1249p-dy',dy+'px');shot.style.setProperty('--codex-1249p-dx86',(dx*.86)+'px');shot.style.setProperty('--codex-1249p-dy86',(dy*.86)+'px');shot.style.setProperty('--codex-1249p-dx60',(dx*.60)+'px');shot.style.setProperty('--codex-1249p-dy60',(dy*.60)+'px');shot.style.setProperty('--codex-1249p-dx28',(dx*.28)+'px');shot.style.setProperty('--codex-1249p-dy28',(dy*.28)+'px')})}
  function resetFinalScene(){document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-active','codex-1249p-arrival','codex-1249p-complete','codex-122p-active','codex-412p-active','codex-412p-arrival','codex-412p-complete','codex-533p-active')}
  cleanEntry.addEventListener('click',function(){clearTimers();resetVideos();resetFinalScene();scrollTo(0,0);var gate=document.querySelector('.entry-gate');if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}inheritedIntro.hidden=true;document.body.classList.add('codex-1249p-active','codex-412p-active','codex-533p-active');prepareOrigins();overlay.classList.remove('playing','fading');void overlay.offsetWidth;overlay.classList.add('playing');videos.forEach(function(video,index){video.playbackRate=.72;try{video.currentTime=index*.45}catch(ignore){}video.play().catch(function(){})});timers.push(setTimeout(function(){prepareOrigins();document.body.classList.add('earth-ready','codex-1249p-arrival','codex-412p-arrival')},9150));timers.push(setTimeout(function(){overlay.classList.add('fading')},14850));timers.push(setTimeout(function(){document.body.classList.remove('codex-1249p-arrival','codex-412p-arrival');document.body.classList.add('codex-1249p-complete','codex-412p-complete')},16400));timers.push(setTimeout(function(){overlay.classList.remove('playing','fading');resetVideos()},17150))});
  addEventListener('resize',function(){if(document.body.classList.contains('codex-533p-active'))prepareOrigins()});
})();


/* JAVASCRIPT SOURCE 26: CodexTalk1045a0829-026-codex-1020a-correct-533p-fire-foundation-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p'),stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/27/26 <b>•</b> 10:20 AM ET';
  if(stamp){stamp.textContent='CODEX 1020A • LOCAL TEST 08/27/26 • 10:20 AM ET';stamp.setAttribute('aria-label','Codex local test created August 27, 2026 at 10:20 AM Eastern Time');document.body.appendChild(stamp)}
  var inheritedIntro=document.querySelector('.cinema-intro'),currentEntry=document.querySelector('.enter-report'),overlay=document.querySelector('.codex-533p-intro'),composition=document.querySelector('.codex-1249p-composition'),stage=document.querySelector('.report-stage');
  if(!inheritedIntro||!currentEntry||!overlay||!composition||!stage)return;
  var correctEntry=currentEntry.cloneNode(true);correctEntry.textContent='ENTER WAGNER REPORTS WEBSITE';correctEntry.setAttribute('aria-label','Enter Wagner Reports with the preserved three moving MP4 fire explosions and gradual locked six-picture arrival');currentEntry.replaceWith(correctEntry);
  var videos=Array.prototype.slice.call(overlay.querySelectorAll('video')),shots=Array.prototype.slice.call(composition.querySelectorAll('.codex-1249p-shot')),timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function resetVideos(){videos.forEach(function(video){video.pause();try{video.currentTime=0}catch(ignore){}})}
  function prepareOrigins(){var cx=innerWidth/2,cy=innerHeight*.54,stageTop=stage.getBoundingClientRect().top;composition.style.setProperty('--codex-412p-stage-y',(cy-stageTop)+'px');shots.forEach(function(shot){var rect=shot.getBoundingClientRect(),dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);shot.style.setProperty('--codex-1249p-dx',dx+'px');shot.style.setProperty('--codex-1249p-dy',dy+'px');shot.style.setProperty('--codex-1249p-dx86',(dx*.86)+'px');shot.style.setProperty('--codex-1249p-dy86',(dy*.86)+'px');shot.style.setProperty('--codex-1249p-dx60',(dx*.60)+'px');shot.style.setProperty('--codex-1249p-dy60',(dy*.60)+'px');shot.style.setProperty('--codex-1249p-dx28',(dx*.28)+'px');shot.style.setProperty('--codex-1249p-dy28',(dy*.28)+'px')})}
  function resetFinalScene(){document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-active','codex-1249p-arrival','codex-1249p-complete','codex-122p-active','codex-412p-active','codex-412p-arrival','codex-412p-complete','codex-533p-active','codex-1020a-active','codex-1020a-arrival','codex-1020a-complete')}
  correctEntry.addEventListener('click',function(){
    clearTimers();resetVideos();resetFinalScene();scrollTo(0,0);
    var gate=document.querySelector('.entry-gate');if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    inheritedIntro.hidden=true;document.body.classList.add('codex-1249p-active','codex-412p-active','codex-533p-active','codex-1020a-active');prepareOrigins();
    overlay.classList.remove('playing','fading');void overlay.offsetWidth;overlay.classList.add('playing');
    videos.forEach(function(video,index){video.loop=true;video.playbackRate=.72;try{video.currentTime=index*.45}catch(ignore){}video.play().catch(function(){})});
    timers.push(setTimeout(function(){prepareOrigins();document.body.classList.add('earth-ready','codex-1020a-arrival')},10600));
    timers.push(setTimeout(function(){overlay.classList.add('fading')},16400));
    timers.push(setTimeout(function(){document.body.classList.remove('codex-1020a-arrival');document.body.classList.add('codex-1249p-complete','codex-1020a-complete');scrollTo(0,0)},18800));
    timers.push(setTimeout(function(){overlay.classList.remove('playing','fading');resetVideos()},20800));
  });
  addEventListener('resize',function(){if(document.body.classList.contains('codex-1020a-active'))requestAnimationFrame(prepareOrigins)});
})();


/* JAVASCRIPT SOURCE 27: CodexTalk1045a0829-027-codex-1033a-recording-refinement-script.js */

(function(){
  var mastheadLine=document.querySelector('.title-group p'),stamp=document.querySelector('.test-stamp');
  if(mastheadLine)mastheadLine.innerHTML='WWE 231 <b>•</b> 08/27/26 <b>•</b> 10:33 AM ET';
  if(stamp){stamp.textContent='CODEX 1033A • LOCAL TEST 08/27/26 • 10:33 AM ET';stamp.setAttribute('aria-label','Codex local test created August 27, 2026 at 10:33 AM Eastern Time');if(stamp.parentElement!==document.body)document.body.appendChild(stamp)}
  var inheritedIntro=document.querySelector('.cinema-intro'),currentEntry=document.querySelector('.enter-report'),overlay=document.querySelector('.codex-533p-intro'),composition=document.querySelector('.codex-1249p-composition'),stage=document.querySelector('.report-stage');
  if(!inheritedIntro||!currentEntry||!overlay||!composition||!stage)return;
  var refinedEntry=currentEntry.cloneNode(true);refinedEntry.textContent='ENTER WAGNER REPORTS WEBSITE';refinedEntry.setAttribute('aria-label','Enter Wagner Reports with the preserved three moving fires, reduced ribbons, and staged foreground arrival');currentEntry.replaceWith(refinedEntry);
  var videos=Array.prototype.slice.call(overlay.querySelectorAll('video')),shots=Array.prototype.slice.call(composition.querySelectorAll('.codex-1249p-shot')),timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function resetVideos(){videos.forEach(function(video){video.pause();try{video.currentTime=0}catch(ignore){}})}
  function prepareOrigins(){var cx=innerWidth/2,cy=innerHeight*.53,stageTop=stage.getBoundingClientRect().top;composition.style.setProperty('--codex-412p-stage-y',(cy-stageTop)+'px');shots.forEach(function(shot){var rect=shot.getBoundingClientRect(),dx=cx-(rect.left+rect.width/2),dy=cy-(rect.top+rect.height/2);shot.style.setProperty('--codex-1249p-dx',dx+'px');shot.style.setProperty('--codex-1249p-dy',dy+'px');shot.style.setProperty('--codex-1249p-dx86',(dx*.86)+'px');shot.style.setProperty('--codex-1249p-dy86',(dy*.86)+'px');shot.style.setProperty('--codex-1249p-dx60',(dx*.60)+'px');shot.style.setProperty('--codex-1249p-dy60',(dy*.60)+'px');shot.style.setProperty('--codex-1249p-dx28',(dx*.28)+'px');shot.style.setProperty('--codex-1249p-dy28',(dy*.28)+'px')})}
  function resetFinalScene(){document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete','codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete','codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-active','codex-1249p-arrival','codex-1249p-complete','codex-122p-active','codex-412p-active','codex-412p-arrival','codex-412p-complete','codex-533p-active','codex-1020a-active','codex-1020a-arrival','codex-1020a-complete','codex-1033a-active','codex-1033a-arrival','codex-1033a-complete')}
  refinedEntry.addEventListener('click',function(){
    clearTimers();resetVideos();resetFinalScene();scrollTo(0,0);
    var gate=document.querySelector('.entry-gate');if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    inheritedIntro.hidden=true;document.body.classList.add('codex-1249p-active','codex-412p-active','codex-533p-active','codex-1020a-active','codex-1033a-active');prepareOrigins();
    overlay.classList.remove('playing','fading');void overlay.offsetWidth;overlay.classList.add('playing');
    videos.forEach(function(video,index){video.loop=true;video.playbackRate=.72;try{video.currentTime=index*.45}catch(ignore){}video.play().catch(function(){})});
    timers.push(setTimeout(function(){prepareOrigins();document.body.classList.add('earth-ready','codex-1020a-arrival','codex-1033a-arrival')},10200));
    timers.push(setTimeout(function(){overlay.classList.add('fading')},12600));
    timers.push(setTimeout(function(){document.body.classList.remove('codex-1020a-arrival','codex-1033a-arrival');document.body.classList.add('codex-1249p-complete','codex-1020a-complete','codex-1033a-complete');scrollTo(0,0)},17800));
    timers.push(setTimeout(function(){overlay.classList.remove('playing','fading');resetVideos()},18300));
  });
  addEventListener('resize',function(){if(document.body.classList.contains('codex-1033a-active'))requestAnimationFrame(prepareOrigins)});
})();
