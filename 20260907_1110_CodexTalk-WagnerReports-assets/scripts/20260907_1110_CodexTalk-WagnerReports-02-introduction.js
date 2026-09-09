
/* JAVASCRIPT SOURCE 2: CodexTalk1045a0829-002-legacy-script.js */

(function(){
  var left=document.querySelector('.collage-left'),right=document.querySelector('.collage-right');
  if(!left||!right)return;
  var all=[].slice.call(document.querySelectorAll('.editorial-shot'));
  function byAlt(name){return all.find(function(f){var i=f.querySelector('img');return i&&i.alt===name})}
  function setImage(fig,src,alt){if(!fig)return;var img=fig.querySelector('img');img.src=src;img.alt=alt;var cap=fig.querySelector('figcaption');if(cap)cap.textContent=''}
  var trump=byAlt('Donald Trump'),golfer=byAlt('Golf'),ships=byAlt('Reflecting Pool');
  var baseball=byAlt('Baseball'),plane=byAlt('Air Force One'),war=byAlt('U.S. Capitol');
  setImage(ships,'./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-18-d8788649f6ab.jpg','Crowded commercial shipping lane');
  setImage(plane,'./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-19-9b562af74917.jpg','Red and white jumbo airplane');
  setImage(war,'./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-20-6cf6c6f65a4f.jpg','Distant wartime explosions');
  all.forEach(function(f){f.remove()});
  [trump,golfer,ships].forEach(function(f){if(f)left.appendChild(f)});
  [baseball,plane,war].forEach(function(f){if(f)right.appendChild(f)});
  var used=[trump,golfer,ships,baseball,plane,war];
  all.filter(function(f){return used.indexOf(f)<0}).forEach(function(f,i){(i%2?right:left).appendChild(f)});
})();


/* JAVASCRIPT SOURCE 3: CodexTalk1045a0829-003-legacy-script.js */

(function(){
  var controls=document.querySelector('.intro-controls');
  if(!controls||controls.querySelector('.test-stamp'))return;
  var stamp=document.createElement('button');
  stamp.type='button';
  stamp.className='test-stamp';
stamp.textContent='CODEX 941A • LOCAL TEST 08/26/26 • 9:41 AM ET';
stamp.setAttribute('aria-label','Codex local test created August 26, 2026 at 9:41 AM Eastern Time');
  controls.insertBefore(stamp,controls.firstChild);
})();


/* JAVASCRIPT SOURCE 4: CodexTalk1045a0829-004-legacy-script.js */

(function(){
  var trump=document.querySelector('.collage-left>.editorial-shot:nth-child(1) img');
  var plane=document.querySelector('.collage-right>.editorial-shot:nth-child(2) img');
  if(trump){trump.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-21-9e423e45c9d9.png';trump.alt='Donald Trump full-head portrait'}
  if(plane){plane.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-22-659adb7e20eb.png';plane.alt='Current blue-and-white Air Force One'}
})();


/* JAVASCRIPT SOURCE 5: CodexTalk1045a0829-005-legacy-script.js */

(function(){
  var viewpointLine=document.querySelector('.crawl-copy p:nth-child(5)');
  if(viewpointLine)viewpointLine.textContent='BOTH VIEWPOINTS TOGETHER.';
})();


/* JAVASCRIPT SOURCE 6: CodexTalk1045a0829-006-legacy-script.js */

(function(){
  var explosion=document.querySelector('.space-explosion img');
  var fire=document.querySelector('.collage-right>.editorial-shot:nth-child(3) img');
  if(explosion){explosion.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-17-4735841b34c8.png';explosion.alt=''}
  if(fire){fire.src='./20260907_1110_CodexTalk-WagnerReports-assets/images/20260907_1110_CodexTalk-WagnerReports-embedded-image-23-b6b18b7bbfeb.png';fire.alt='Night wildfire and smoke'}
})();


/* JAVASCRIPT SOURCE 7: CodexTalk1045a0829-007-legacy-script.js */

(function(){
  var intro=document.querySelector('.cinema-intro');
  var collages=Array.prototype.slice.call(document.querySelectorAll('.editorial-collage'));
  var started=false;
  function stageConcurrentPictures210(){
    if(started)return;
    started=true;
    collages.forEach(function(group){
      group.style.setProperty('animation','none','important');
      group.style.setProperty('filter','none','important');
      group.style.setProperty('transition','none','important');
      group.style.setProperty('opacity','0','important');
    });
    collages.forEach(function(group){void group.offsetWidth});
    collages.forEach(function(group){
      group.style.setProperty('transition','opacity 8.5s linear','important');
      group.style.setProperty('opacity','1','important');
    });
    setTimeout(function(){document.body.classList.add('earth-ready')},8500);
  }
  if(intro&&intro.classList.contains('finishing'))stageConcurrentPictures210();
  if(intro){
    new MutationObserver(function(){
      if(intro.classList.contains('finishing'))stageConcurrentPictures210();
    }).observe(intro,{attributes:true,attributeFilter:['class']});
  }
})();

