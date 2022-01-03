var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown-arkanoid").innerHTML = window.location='/arkanoid/arkanoid.html';
  } else {
    document.getElementById("countdown-arkanoid").innerHTML = "Tu juego empieza en <br>" + timeleft;
  }
  timeleft -= 1;
}, 1000);

