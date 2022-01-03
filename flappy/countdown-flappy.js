var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown-flappy").innerHTML = window.location='/flappy/flappy.html';
  } else {
    document.getElementById("countdown-flappy").innerHTML = "Tu juego empieza en <br>" + timeleft;
  }
  timeleft -= 1;
}, 1000);

