var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("counter-time").innerHTML = window.location='/selector.html';
  } else {
    document.getElementById("counter-time").innerHTML = "te quedan " + timeleft + " segundos";
  }
  timeleft -= 1;
}, 1000);
