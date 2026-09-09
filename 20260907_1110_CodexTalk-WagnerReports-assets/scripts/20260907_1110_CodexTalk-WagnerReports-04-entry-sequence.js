
/* JAVASCRIPT SOURCE 11: CodexTalk1045a0829-011-codex-750a-entry-choice.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var originalEnter=document.querySelector('.enter-report');
  var originalSkip=document.querySelector('.skip-intro');
  if(!intro||!originalEnter||!originalSkip)return;

  var directEnter=originalEnter.cloneNode(true);
  originalEnter.replaceWith(directEnter);

  var playIntro=originalSkip.cloneNode(true);
  playIntro.className='play-intro';
  playIntro.textContent='PLAY INTRO';
  playIntro.setAttribute('aria-label','Play the complete Wagner Reports introduction');
  originalSkip.replaceWith(playIntro);

  directEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.classList.remove('running','finishing');
    intro.hidden=true;
    document.body.classList.remove('be700-arrival');
    document.body.classList.add('earth-ready','codex-direct-entry');
    document.querySelectorAll('.editorial-shot').forEach(function(shot){
      shot.style.removeProperty('opacity');
      shot.style.removeProperty('transition');
      shot.style.removeProperty('transform');
      shot.style.removeProperty('filter');
    });
  });

  playIntro.addEventListener('click',function(){originalEnter.click()});
})();


/* JAVASCRIPT SOURCE 12: CodexTalk1045a0829-012-codex-819a-enter-with-visual-intro.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  if(!intro||!currentEnter)return;

  var visualEnter=currentEnter.cloneNode(true);
  visualEnter.setAttribute('aria-label','Enter Wagner Reports with the star and explosion introduction');
  currentEnter.replaceWith(visualEnter);

  visualEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    var stage=document.querySelector('.report-stage');
    var explosionImage=document.querySelector('.space-explosion img');

    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival');
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}
    intro.hidden=false;
    intro.classList.remove('finishing');
    intro.classList.add('codex-visual-only','running');

    setTimeout(function(){
      if(explosionImage&&stage){
        var handoff=document.createElement('div');
        handoff.className='handoff-explosion818';
        var handoffImage=document.createElement('img');
        handoffImage.alt='';
        handoffImage.src=explosionImage.src;
        handoff.appendChild(handoffImage);
        stage.appendChild(handoff);
        setTimeout(function(){handoff.remove()},4200);
      }
      intro.classList.add('finishing');
      setTimeout(function(){intro.hidden=true},3500);
      setTimeout(function(){document.body.classList.add('earth-ready')},10000);
    },7000);
  });
})();


/* JAVASCRIPT SOURCE 13: CodexTalk1045a0829-013-codex-847a-production-controls.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var controls=document.querySelector('.intro-controls');
  var play=document.querySelector('.play-intro');
  var stamp=document.querySelector('.test-stamp');
  if(play){
    play.textContent='PLAY INTRO WITH TEXT';
    play.setAttribute('aria-label','Play the complete Wagner Reports introduction with text');
  }
  if(intro&&controls&&stamp){
    stamp.classList.add('local-test-badge');
    intro.appendChild(stamp);
  }
})();


/* JAVASCRIPT SOURCE 14: CodexTalk1045a0829-014-codex-926a-enter-sequence.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var currentEnter=document.querySelector('.enter-report');
  if(!intro||!currentEnter)return;

  var smoothEnter=currentEnter.cloneNode(true);
  smoothEnter.setAttribute('aria-label','Enter Wagner Reports with the longer white star and smooth explosion introduction');
  currentEnter.replaceWith(smoothEnter);

  smoothEnter.addEventListener('click',function(){
    var gate=document.querySelector('.entry-gate');
    document.body.classList.remove('earth-ready','codex-direct-entry','be700-arrival');
    document.querySelectorAll('.handoff-explosion818').forEach(function(node){node.remove()});
    if(gate){gate.style.opacity='0';gate.style.pointerEvents='none'}

    intro.hidden=false;
    intro.classList.remove('finishing','running','codex-visual-only','codex-926a-sequence');
    void intro.offsetWidth;
    intro.classList.add('codex-visual-only','codex-926a-sequence','running');

    /* Start the arrival clock 2.8 seconds before the explosion apex. */
    setTimeout(function(){intro.classList.add('finishing')},5700);
    setTimeout(function(){intro.hidden=true},12300);
    setTimeout(function(){document.body.classList.add('earth-ready')},20800);
  });
})();

