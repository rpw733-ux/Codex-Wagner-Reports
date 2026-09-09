(function(){
  'use strict';
  var intro=document.querySelector('.cinema-intro');
  var currentEntry=document.querySelector('.enter-report');
  var controls=document.querySelector('.intro-controls');
  var composition=document.querySelector('.codex-1249p-composition');
  var mastheadLine=document.querySelector('.title-group p');
  var stamp=document.querySelector('.test-stamp');
  var gate=document.querySelector('.entry-gate');
  var carryStar=intro&&intro.querySelector('.red-star-cluster');
  if(!intro||!currentEntry||!controls||!composition||!gate)return;

  if(mastheadLine)mastheadLine.innerHTML='WWE 20260907_1110 <b>•</b> LOCAL TEST';
  if(stamp){
    stamp.textContent='CODEX 20260907_1110 • LOCAL TEST';
    stamp.setAttribute('aria-label','Codex local test created September 7, 2026 at 11:10 AM Eastern Time');
  }

  var openingTitle=gate.querySelector('h2');
  var masthead=document.querySelector('.masthead');
  if(openingTitle&&masthead){
    var openingBrand=document.createElement('div');
    openingBrand.className='codex-829a-entry-brand';
    var leftSeal=masthead.querySelector('.seal');
    var rightSeal=masthead.querySelector('.right-seal');
    if(leftSeal)openingBrand.appendChild(leftSeal.cloneNode(true));
    openingBrand.appendChild(openingTitle);
    if(rightSeal)openingBrand.appendChild(rightSeal.cloneNode(true));
    gate.insertBefore(openingBrand,gate.firstChild);
  }

  var testButton=document.createElement('button');
  testButton.type='button';
  testButton.className='codex-829a-test-button';
  testButton.textContent='CODEX 20260907_1110 • LOCAL TEST';
  testButton.setAttribute('aria-label','Codex local test, September 7, 2026, 11:10 AM Eastern Time');
  testButton.tabIndex=-1;
  controls.appendChild(testButton);

  /* A restrained subset of the generated stars scintillates independently. */
  var introStarField=intro.querySelector('.intro-stars');
  var scintillationSeed=5270831;
  function scintillationRandom(){scintillationSeed=(scintillationSeed*1664525+1013904223)>>>0;return scintillationSeed/4294967296}
  if(introStarField){
    Array.prototype.forEach.call(introStarField.querySelectorAll('i'),function(star,index){
      if(index%7!==0&&index%19!==0)return;
      var palette=index%29===0?['#ffd1c8','#d7ebff','#fff3d0']:index%13===0?['#d2e8ff','#ffffff','#b9dfff']:index%11===0?['#ffe5a8','#fffdf2','#ffd18c']:['#e7f2ff','#ffffff','#d8eaff'];
      star.classList.add('codex-527p-scintillation');
      if(index%31===0)star.classList.add('codex-527p-scintillation-bright');
      star.style.setProperty('--scint-duration',(1.7+scintillationRandom()*4.1).toFixed(2)+'s');
      star.style.setProperty('--scint-delay',(-scintillationRandom()*6.4).toFixed(2)+'s');
      star.style.setProperty('--scint-a',palette[0]);
      star.style.setProperty('--scint-b',palette[1]);
      star.style.setProperty('--scint-c',palette[2]);
    });
  }

  /* One Earth layer owns the complete Florida-to-deep-space maneuver. */
  var overflightEarth=document.createElement('div');
  overflightEarth.className='codex-0906-overflight-earth';
  overflightEarth.setAttribute('aria-hidden','true');
  overflightEarth.innerHTML='<img src="./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-earth-wagner-photographic.jpg" alt="">';
  intro.appendChild(overflightEarth);

  var introCockpit=document.createElement('img');
  introCockpit.className='codex-642p-intro-cockpit';
  introCockpit.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-WagnerSpaceshipCockpit.png';
  introCockpit.alt='';
  introCockpit.setAttribute('aria-hidden','true');
  intro.appendChild(introCockpit);
  var lightMarkup='<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>';
  var introLights=document.createElement('div');
  introLights.className='codex-642p-light-rack';
  introLights.setAttribute('aria-hidden','true');
  introLights.innerHTML=lightMarkup;
  intro.appendChild(introLights);
  var textIntroEntry=document.querySelector('.play-intro');
  var textHandoffTimer=0;
  var openingEarthTimer=0;
  var introTremorTimers=[];
  function clearIntroTremorTimers(){introTremorTimers.forEach(clearTimeout);introTremorTimers=[];intro.classList.remove('codex-642p-intro-tremor','codex-642p-intro-tremor-strong')}
  function beginFloridaDeparture(){
    clearTimeout(openingEarthTimer);
    overflightEarth.style.removeProperty('display');
    overflightEarth.classList.remove('codex-0906-departing','codex-2003-communications-hold');
    void overflightEarth.offsetWidth;
    overflightEarth.classList.add('codex-2003-communications-hold');
    document.body.classList.add('codex-1826-flight');
    intro.classList.add('codex-642p-cockpit-flight');
    openingEarthTimer=setTimeout(function(){
      overflightEarth.classList.remove('codex-2003-communications-hold');
      void overflightEarth.offsetWidth;
      overflightEarth.classList.add('codex-0906-departing');
      openingEarthTimer=setTimeout(function(){overflightEarth.style.display='none'},12600);
    },5000);
  }
  if(textIntroEntry){
    textIntroEntry.addEventListener('click',function(){
      if(window.codexTimingStart)window.codexTimingStart();
      document.body.classList.add('codex-0856-managed-flight');
      beginFloridaDeparture();
      clearTimeout(textHandoffTimer);
      clearIntroTremorTimers();
      /* The text flight remains mechanically steady; one continuous handoff now
         replaces the two legacy tremor starts that Robert saw as bumps. */
      textHandoffTimer=setTimeout(function(){startSequence(true)},58500);
    });
  }

  var stage=document.createElement('div');
  stage.className='codex-829a-stage';
  stage.setAttribute('aria-hidden','true');
  stage.innerHTML='<div class="codex-829a-space"></div><div class="codex-829a-star-system"><div class="codex-829a-corona"></div><div class="codex-829a-white"></div><div class="codex-829a-red"></div><div class="codex-642p-plasma"></div><div class="codex-642p-core"></div></div><div class="codex-829a-cockpit-rig"><img class="codex-829a-cockpit" src="./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-WagnerSpaceshipCockpit.png" alt=""><div class="codex-642p-light-rack" aria-hidden="true">'+lightMarkup+'</div></div>';
  var stageNaturalStars=null;
  if(introStarField){
    stageNaturalStars=introStarField.cloneNode(true);
    stageNaturalStars.classList.add('codex-829a-natural-stars');
    stage.insertBefore(stageNaturalStars,stage.firstChild);
  }
  var stageCarryStar=null;
  if(carryStar){
    stageCarryStar=carryStar.cloneNode(true);
    stageCarryStar.removeAttribute('id');
    stage.appendChild(stageCarryStar);
  }
  stage.insertBefore(composition,stage.querySelector('.codex-829a-cockpit-rig'));
  document.body.appendChild(stage);

  /* A deterministic but irregular star field avoids the visible rows and
     columns produced by repeated radial-gradient tiles. */
  var reportStage=document.querySelector('.report-stage');
  if(reportStage){
    var finalStars=document.createElement('div');
    finalStars.className='codex-1241-final-stars';
    finalStars.setAttribute('aria-hidden','true');
    var starSeed=12410903;
    function finalStarRandom(){starSeed=(starSeed*1664525+1013904223)>>>0;return starSeed/4294967296}
    for(var starIndex=0;starIndex<176;starIndex++){
      var finalStar=document.createElement('i');
      finalStar.style.setProperty('--sx',(finalStarRandom()*100).toFixed(2)+'%');
      finalStar.style.setProperty('--sy',(finalStarRandom()*100).toFixed(2)+'%');
      var starSize=starIndex%31===0?1.65+finalStarRandom()*.85:.42+finalStarRandom()*1.18;
      finalStar.style.setProperty('--ss',starSize.toFixed(2)+'px');
      finalStar.style.setProperty('--so',(0.20+finalStarRandom()*.52).toFixed(2));
      finalStar.style.setProperty('--sc',starIndex%13===0?'#a9dcff':starIndex%17===0?'#ffe0a3':'#fff');
      finalStars.appendChild(finalStar);
    }
    reportStage.insertBefore(finalStars,reportStage.firstChild);
  }

  var earth=composition.querySelector('.codex-1249p-earth');
  var categories=composition.querySelector('.codex-1249p-categories');
  var shots=[].slice.call(composition.querySelectorAll('.codex-1249p-shot'));
  var starSystem=stage.querySelector('.codex-829a-star-system');
  var stageSpace=stage.querySelector('.codex-829a-space');
  var cockpitRig=stage.querySelector('.codex-829a-cockpit-rig');
  if(!earth||!categories||!shots.length||!starSystem)return;

  var creditList=document.querySelector('#image-credits ol');
  if(creditList){
    creditList.innerHTML=[
      '<li>Donald Trump editorial image — OpenAI-generated treatment created for Wagner Reports.</li>',
      '<li>Professional baseball action — OpenAI-generated image created for Wagner Reports.</li>',
      '<li>Professional golfer — OpenAI-generated image created for Wagner Reports.</li>',
      '<li>Air Force One editorial image — OpenAI-generated treatment created for Wagner Reports.</li>',
      '<li><a href="https://www.pexels.com/photo/35421778/" target="_blank" rel="noopener">Cargo ships at sea</a> — Pexels photo 35421778; used under the <a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels license</a>.</li>',
      '<li>Wildfire editorial image — OpenAI-generated treatment created for Wagner Reports.</li>',
      '<li>Earth photographic composite, cockpit artwork, red-star effect, and reading-glasses artwork — Wagner Reports project assets.</li>'
    ].join('');
  }

  function setImportant(element,property,value){element.style.setProperty(property,value,'important')}
  function prepareComposition(){
    setImportant(stageSpace,'display','none');
    if(stageNaturalStars){setImportant(stageNaturalStars,'display','block');setImportant(stageNaturalStars,'opacity','1')}
    setImportant(cockpitRig,'display','block');
    setImportant(starSystem,'display','block');
    setImportant(composition,'visibility','hidden');
    setImportant(composition,'opacity','1');
    setImportant(composition,'animation','none');
    setImportant(earth,'animation','none');
    setImportant(earth,'transition','none');
    setImportant(earth,'opacity','0');
    setImportant(earth,'transform','translate(-50%,-50%) scale(.06)');
    setImportant(earth,'filter','blur(3px) brightness(.78)');
    setImportant(categories,'animation','none');
    setImportant(categories,'transition','none');
    setImportant(categories,'opacity','0');
    setImportant(categories,'transform','translate(-50%,-50%) scale(.94)');
    setImportant(categories,'filter','blur(2px)');
    shots.forEach(function(shot){
      setImportant(shot,'animation','none');
      setImportant(shot,'transition','none');
      setImportant(shot,'opacity','0');
      setImportant(shot,'transform','scale(.94)');
      setImportant(shot,'filter','blur(2px)');
    });
    setImportant(cockpitRig,'opacity','1');
  }
  var earthRevealStarted=false;
  var pageRevealStarted=false;
  var sequenceFinished=false;
  var continuedSequence=false;
  /* Preserve the photographed timing anchors without letting the red-star
     handoff conceal the Earth fade or erase the cockpit around it. */
  var sequenceDuration=15000;
  var pageRevealDelay=4800;
  var pageRevealDuration=8200;
  var earthRevealDuration=8200;
  var foregroundRevealDelay=6400;
  var foregroundRevealDuration=7600;
  var cockpitFadeDelay=13200;
  var cockpitFadeDuration=1800;
  function beginEarthReveal(){
    if(earthRevealStarted)return;
    earthRevealStarted=true;
    setImportant(composition,'visibility','visible');
    var earthDelay=continuedSequence?pageRevealDelay:0;
    var earthSeconds=(continuedSequence?earthRevealDuration:sequenceDuration)/1000+'s';
    var earthDelaySeconds=earthDelay/1000+'s';
    var foregroundDelay=continuedSequence?foregroundRevealDelay:0;
    var foregroundSeconds=(continuedSequence?foregroundRevealDuration:sequenceDuration)/1000+'s';
    var foregroundDelaySeconds=foregroundDelay/1000+'s';
    setImportant(earth,'transition','opacity '+earthSeconds+' cubic-bezier(.42,0,.68,.28) '+earthDelaySeconds+',transform '+earthSeconds+' linear '+earthDelaySeconds+',filter '+earthSeconds+' linear '+earthDelaySeconds);
    setImportant(categories,'transition','opacity '+foregroundSeconds+' cubic-bezier(.22,.61,.36,1) '+foregroundDelaySeconds+',transform '+foregroundSeconds+' cubic-bezier(.22,.61,.36,1) '+foregroundDelaySeconds+',filter '+foregroundSeconds+' linear '+foregroundDelaySeconds);
    shots.forEach(function(shot){setImportant(shot,'transition','opacity '+foregroundSeconds+' cubic-bezier(.22,.61,.36,1) '+foregroundDelaySeconds+',transform '+foregroundSeconds+' cubic-bezier(.22,.61,.36,1) '+foregroundDelaySeconds+',filter '+foregroundSeconds+' linear '+foregroundDelaySeconds)});
    void earth.offsetWidth;
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        setImportant(earth,'opacity','1');
        setImportant(earth,'transform','translate(-50%,-50%) scale(1)');
        setImportant(earth,'filter','blur(0) brightness(1)');
        setImportant(categories,'opacity','1');
        setImportant(categories,'transform','translate(-50%,-50%) scale(1)');
        setImportant(categories,'filter','blur(0)');
        shots.forEach(function(shot){setImportant(shot,'opacity','1');setImportant(shot,'transform','none');setImportant(shot,'filter','none')});
        if(continuedSequence){
          setImportant(cockpitRig,'transition','opacity '+(cockpitFadeDuration/1000)+'s linear '+(cockpitFadeDelay/1000)+'s');
          setImportant(cockpitRig,'opacity','0');
          setImportant(introCockpit,'transition','opacity '+(cockpitFadeDuration/1000)+'s linear '+(cockpitFadeDelay/1000)+'s');
          setImportant(introCockpit,'opacity','0');
          setImportant(introLights,'transition','opacity '+(cockpitFadeDuration/1000)+'s linear '+(cockpitFadeDelay/1000)+'s');
          setImportant(introLights,'opacity','0');
        }
      });
    });
    if(continuedSequence)later(finish,sequenceDuration);
    else later(beginPageReveal,pageRevealDelay);
  }
  function beginPageReveal(){
    if(pageRevealStarted)return;
    pageRevealStarted=true;
    document.body.classList.add('codex-829a-page-reveal','earth-ready','codex-1249p-arrival','codex-412p-arrival','codex-1020a-arrival','codex-1033a-arrival');
    setImportant(cockpitRig,'transition','opacity '+(pageRevealDuration/1000)+'s linear');
    setImportant(cockpitRig,'opacity','0');
    later(finish,pageRevealDuration);
  }
  function finish(){
    if(sequenceFinished)return;
    sequenceFinished=true;
    /* Lock every destination value before removing the now-transparent
       transition scenery so the last frame and final page are identical. */
    setImportant(earth,'opacity','1');
    setImportant(earth,'transform','translate(-50%,-50%) scale(1)');
    setImportant(earth,'filter','blur(0) brightness(1)');
    setImportant(categories,'opacity','1');
    setImportant(categories,'transform','translate(-50%,-50%) scale(1)');
    setImportant(categories,'filter','blur(0)');
    shots.forEach(function(shot){setImportant(shot,'opacity','1');setImportant(shot,'transform','none');setImportant(shot,'filter','none')});
    setImportant(earth,'transition','none');
    setImportant(categories,'transition','none');
    shots.forEach(function(shot){setImportant(shot,'transition','none')});
    setImportant(stageSpace,'display','none');
    setImportant(cockpitRig,'display','none');
    setImportant(starSystem,'display','none');
    if(continuedSequence){
      intro.hidden=true;
      setImportant(intro,'transition','none');
    }
    document.body.classList.remove('codex-829a-sequence','codex-829a-tremor','codex-642p-tremor-strong','codex-642p-from-text','codex-527p-continuation','codex-829a-earth-arrival','codex-829a-page-reveal','codex-1249p-arrival','codex-412p-arrival','codex-1020a-arrival','codex-1033a-arrival');
    document.body.classList.add('codex-1249p-active','codex-412p-active','codex-1020a-active','codex-1033a-active','codex-1249p-complete','codex-412p-complete','codex-1020a-complete','codex-1033a-complete','codex-829a-final','earth-ready');
    scrollTo(0,0);
  }
  function resetClasses(){
    document.body.classList.remove(
      'earth-ready','codex-direct-entry','be700-arrival','codex-1012a-arrival','codex-1012a-arrival-complete',
      'codex-1030a-arrival','codex-1030a-arrival-complete','codex-1141a-arrival','codex-1141a-arrival-complete',
      'codex-1217p-arrival','codex-1217p-arrival-complete','codex-1249p-arrival','codex-1249p-complete',
      'codex-412p-arrival','codex-412p-complete','codex-1020a-arrival','codex-1020a-complete',
      'codex-1033a-arrival','codex-1033a-complete','codex-829a-sequence','codex-829a-tremor','codex-642p-tremor-strong','codex-642p-from-text','codex-527p-continuation',
      'codex-829a-earth-arrival','codex-829a-page-reveal','codex-829a-final'
    );
  }

  prepareComposition();
  var entry=currentEntry.cloneNode(true);
  entry.className='codex-829a-enter';
  entry.textContent='WEB BUILD — OPEN FINAL WEBSITE';
  entry.setAttribute('aria-label','Open the completed Wagner Reports website immediately');
  currentEntry.replaceWith(entry);
  if(textIntroEntry){
    textIntroEntry.textContent='TOTAL — VIDEO, TEXT, AND AUDIO';
    textIntroEntry.setAttribute('aria-label','Play the total Wagner Reports introduction with video, text, and audio');
  }
  var timers=[];
  function later(action,delay){timers.push(setTimeout(action,delay))}
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  var started=false;
  earth.addEventListener('transitionend',function(event){
    if(!continuedSequence&&earthRevealStarted&&event.target===earth&&event.propertyName==='opacity')beginPageReveal();
  });
  stageSpace.addEventListener('transitionend',function(event){
    if(pageRevealStarted&&event.target===stageSpace&&event.propertyName==='opacity')finish();
  });
  function startSequence(fromText){
    if(started)return;
    if(window.codexTimingStart)window.codexTimingStart();
    started=true;
    var continuedFromText=fromText===true;
    continuedSequence=continuedFromText;
    clearTimeout(textHandoffTimer);
    if(!continuedFromText)clearIntroTremorTimers();
    clearTimers();
    earthRevealStarted=false;
    pageRevealStarted=false;
    sequenceFinished=false;
    resetClasses();
    prepareComposition();
    scrollTo(0,0);
    document.body.classList.add('codex-1249p-active','codex-412p-active','codex-1020a-active','codex-1033a-active','codex-829a-sequence');
    if(continuedFromText){
      document.body.classList.add('codex-642p-from-text','codex-527p-continuation');
      setImportant(starSystem,'display','none');
      setImportant(stageSpace,'display','none');
      if(stageNaturalStars)setImportant(stageNaturalStars,'display','none');
      setImportant(cockpitRig,'display','none');
      setImportant(intro,'transition','none');
      setImportant(intro,'opacity','1');
      setImportant(intro,'visibility','visible');
      setImportant(intro,'background','transparent');
      intro.hidden=false;
      if(carryStar)setImportant(carryStar,'display','block');
      if(stageCarryStar)setImportant(stageCarryStar,'display','none');
      /* Keep the live introduction star, natural field, and cockpit above the
         transparent stage.  This removes both element swaps that produced the
         photographed white and red blinks. */
    }else{
      starSystem.style.removeProperty('display');
    }
    void stage.offsetWidth;
    if(!continuedFromText)intro.hidden=true;
    /* No late cockpit or host tremor: the Earth reveal owns the transition. */
    beginEarthReveal();
  }
  window.codex1247StartSequence=function(){startSequence(false)};
  var directOpeningStarted=false;
  function startDirectOpening(){
    if(directOpeningStarted||started)return;
    directOpeningStarted=true;
    started=true;
    /* WEB BUILD is the practical shortcut: it bypasses the entire presentation
       timeline and exposes the already-completed interactive report page. */
    document.body.classList.add('codex-route-video-only');
    var soundToggle=document.querySelector('.sound-toggle');
    if(soundToggle&&/SOUND ON/i.test(soundToggle.textContent||''))soundToggle.click();
    clearTimeout(textHandoffTimer);
    clearTimeout(openingEarthTimer);
    clearIntroTremorTimers();
    clearTimers();
    earthRevealStarted=false;
    pageRevealStarted=false;
    sequenceFinished=false;
    continuedSequence=false;
    resetClasses();
    prepareComposition();
    intro.hidden=true;
    setImportant(intro,'transition','none');
    finish();
  }
  window.codex1247StartSequence=startDirectOpening;
  entry.setAttribute('onpointerdown','window.codex1247StartSequence()');
  entry.setAttribute('onclick','window.codex1247StartSequence()');
  function interceptEntry(event){
    if(event.target&&event.target.closest&&event.target.closest('.codex-829a-enter')){
      event.preventDefault();
      event.stopImmediatePropagation();
      startDirectOpening();
    }
  }
  window.addEventListener('pointerdown',interceptEntry,true);
  window.addEventListener('click',interceptEntry,true);
  entry.onpointerdown=startDirectOpening;
  entry.onclick=startDirectOpening;
  window.addEventListener('keydown',function(event){
    if((event.key==='Enter'||event.key===' ')&&event.target&&event.target.closest&&event.target.closest('.codex-829a-enter'))interceptEntry(event);
  },true);
})();
