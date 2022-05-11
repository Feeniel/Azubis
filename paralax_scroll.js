let video = document.getElementById("video");
let headline = document.getElementById("headline");

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  video.style.top = value * 0.5 + 'px';
  headline.style.top = value * 0.6 + 'px';
})
