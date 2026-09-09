(function(){
  'use strict';
  var source='./20260907_1110_CodexTalk-WagnerReports-assets/audio/fronbondi_skegs-drone-space-travel-hyperdrive-engine-humming-background-235901.mp3';
  var ambience=document.createElement('audio');
  var soundToggle=document.querySelector('.sound-toggle');
  var timelineStarted=false;
  ambience.src=source;
  ambience.preload='auto';
  ambience.volume=.10;
  ambience.loop=false;
  ambience.playsInline=true;
  ambience.setAttribute('aria-hidden','true');
  ambience.setAttribute('data-codex-cockpit-ambience','');
  document.body.appendChild(ambience);

  function soundIsOn(){return !soundToggle||!/SOUND OFF/i.test(soundToggle.textContent||'')}
  function startAmbience(){
    if(timelineStarted||document.body.classList.contains('codex-route-video-only'))return;
    timelineStarted=true;
    ambience.currentTime=0;
    if(soundIsOn())ambience.play().catch(function(error){ambience.dataset.playError=error&&error.name?error.name:'play-failed'});
  }
  function handlePresentationEntry(event){
    if(event.target&&event.target.closest&&event.target.closest('.play-intro'))startAmbience();
  }
  document.addEventListener('click',handlePresentationEntry);
  if(soundToggle)soundToggle.addEventListener('click',function(){
    if(!soundIsOn())ambience.pause();
    else if(timelineStarted&&!document.body.classList.contains('codex-route-video-only'))ambience.play().catch(function(error){ambience.dataset.playError=error&&error.name?error.name:'play-failed'});
  });
  window.codexCockpitAmbience={
    element:ambience,
    read:function(){return {started:timelineStarted,paused:ambience.paused,currentTime:ambience.currentTime,volume:ambience.volume,readyState:ambience.readyState,source:ambience.currentSrc||ambience.src,error:ambience.error&&ambience.error.code||null}}
  };
})();
