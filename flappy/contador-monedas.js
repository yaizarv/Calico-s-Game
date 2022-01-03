var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.querySelector(".texto-contador-monedas").innerHTML = window.location='/flappy/flappy.html';
  } else {
    document.querySelector(".texto-contador-monedas").innerHTML = "Te quedan " + timeleft + " segundos para ver dónde están el resto de monedas";
  }
  timeleft -= 1;
}, 1000);

