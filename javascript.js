let btn=document.querySelectorAll("button")

btn[0].addEventListener("click",playVideo)
function playVideo() {
    var video = document.getElementById('vid');
    video.pause();
    btn[0].classList.toggle('none')
    btn[1].classList.toggle('none')
  }
  btn[1].addEventListener("click",stopVideo)
function stopVideo() {
    var video = document.getElementById('vid');
    video.play();
    btn[0].classList.toggle('none')
    btn[1].classList.toggle('none')
  }