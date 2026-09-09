
/* JAVASCRIPT SOURCE 8: CodexTalk1045a0829-008-legacy-script.js */

(function(){
  /* Pexels photo 35421778; free website use and modification under the Pexels license, verified 2026-08-25. */
  var lowerLeftShips=document.querySelector('.collage-left>.editorial-shot:nth-child(3) img');
  if(lowerLeftShips){
    lowerLeftShips.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-24-f08665c80a71.jpg';
    lowerLeftShips.alt='Many commercial cargo ships anchored on open water';
  }
})();


/* JAVASCRIPT SOURCE 9: CodexTalk1045a0829-009-legacy-script.js */

(function(){var b=document.querySelector('.sound-toggle');if(b)b.textContent='SOUND ON'})();


/* JAVASCRIPT SOURCE 10: CodexTalk1045a0829-010-be700-full-flash-synchronized-arrival-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  if(!intro)return;
  var started=false;
  function startArrival(){
    if(started||!intro.classList.contains('finishing'))return;
    started=true;
    var blast=document.querySelector('.handoff-explosion818')||document.querySelector('.space-explosion');
    var trump=document.querySelector('.collage-left>.editorial-shot:nth-child(1)');
    var bx=innerWidth/2,by=innerHeight/2;
    if(blast){var br=blast.getBoundingClientRect();if(br.width&&br.height){bx=br.left+br.width/2;by=br.top+br.height/2}}
    document.documentElement.style.setProperty('--be700-blast-x',bx+'px');
    document.documentElement.style.setProperty('--be700-blast-y',by+'px');
    if(trump){
      var tr=trump.getBoundingClientRect();
      var dx=bx-(tr.left+tr.width/2),dy=by-(tr.top+tr.height/2);
      trump.style.setProperty('--be700-trump-dx',dx+'px');
      trump.style.setProperty('--be700-trump-dy',dy+'px');
      trump.style.setProperty('--be700-trump-dx90',(dx*.9)+'px');
      trump.style.setProperty('--be700-trump-dy90',(dy*.9)+'px');
      trump.style.setProperty('--be700-trump-dx75',(dx*.75)+'px');
      trump.style.setProperty('--be700-trump-dy75',(dy*.75)+'px');
      trump.style.setProperty('--be700-trump-dx50',(dx*.5)+'px');
      trump.style.setProperty('--be700-trump-dy50',(dy*.5)+'px');
      trump.style.setProperty('--be700-trump-dx25',(dx*.25)+'px');
      trump.style.setProperty('--be700-trump-dy25',(dy*.25)+'px');
    }
    document.body.classList.add('be700-arrival');
    setTimeout(function(){
      document.querySelectorAll('.editorial-shot').forEach(function(shot){
        shot.style.removeProperty('opacity');
        shot.style.removeProperty('transition');
        shot.style.removeProperty('transform');
        shot.style.removeProperty('filter');
      });
    },0);
  }
  if(intro.classList.contains('finishing'))startArrival();
  new MutationObserver(startArrival).observe(intro,{attributes:true,attributeFilter:['class']});
})();
