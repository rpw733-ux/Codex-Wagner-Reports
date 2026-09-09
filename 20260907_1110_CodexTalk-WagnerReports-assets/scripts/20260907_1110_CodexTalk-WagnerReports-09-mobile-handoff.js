(function(){
  'use strict';
  var stage=document.querySelector('.codex-829a-stage');
  if(stage&&!stage.querySelector('.codex-1826-transition-star')){
    var transitionStar=document.createElement('div');
    transitionStar.className='codex-1826-transition-star';
    transitionStar.setAttribute('aria-hidden','true');
    var cockpit=stage.querySelector('.codex-829a-cockpit-rig');
    stage.insertBefore(transitionStar,cockpit||null);
  }

  var rotate=document.createElement('div');
  rotate.className='codex-1826-rotate';
  rotate.setAttribute('role','status');
  rotate.setAttribute('aria-live','polite');
  rotate.innerHTML='<div class="codex-1826-rotate-card"><span class="codex-1826-rotate-mark" aria-hidden="true">↻</span><strong>ROTATE YOUR PHONE TO LANDSCAPE</strong><span>Wagner Reports will open automatically when your screen is horizontal.</span></div>';
  document.body.appendChild(rotate);

  function isPhoneLandscape(){return matchMedia('(orientation:landscape) and (max-height:540px), (max-width:960px) and (orientation:landscape)').matches}
  function requestPhoneFullscreen(){
    if(!isPhoneLandscape()||document.fullscreenElement||!document.documentElement.requestFullscreen)return;
    document.documentElement.requestFullscreen({navigationUI:'hide'}).catch(function(){});
  }
  document.addEventListener('pointerdown',function(event){
    if(event.target&&event.target.closest&&event.target.closest('.codex-829a-enter,.codex-244p-text-intro'))requestPhoneFullscreen();
  },true);
})();
