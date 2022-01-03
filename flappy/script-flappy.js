let world, calico
let mLeftBall = 0;
let mTopBall = 0;
let velocidad = 50;
let mLeft = 0;
let mTop = 0;
let score = 0;
let audio_moneda = new Audio("/styles/audio/audio-moneda.mpeg");
let movements = new Audio("/styles/audio/movements.mpeg");
let tunnel = new Audio("styles/audio/tunnel.mpeg");
let lost = new Audio("/styles/audio/lost.mpeg");

function getElements() {
    world = document.querySelector( '.world' )
    calico = document.querySelector( '.calico-bird' )
    ball = document.querySelector('.ball')
}
document.addEventListener("keydown", function(e){
    if (e.keyCode == "39"){
        moverDerecha();
    }
    if (e.keyCode == "37"){
        moverIzquierda();
    }
    if (e.keyCode == "38"){
        moverArriba();
    }
    if (e.keyCode == "40"){
        moverAbajo();
    }
})

function moverDerecha(){
    mLeft += velocidad;
    movements.play();
    if (mLeft > 700){
        mLeft = 700
    }
    calico.style.marginLeft = mLeft + "px"
}
setInterval(function moverBolaDrchaAbajo(){
    mLeftBall += velocidad;
    mTopBall += velocidad;
    if (mTopBall > 500){
        mTopBall = 0
        mLeftBall = 0;
    }
    ball.style.marginLeft = mLeftBall + "px"
    ball.style.marginTop = mTopBall + "px"
}, 1000)

function moverIzquierda(){
    mLeft -= velocidad;
    movements.play();
    if (mLeft < -50){
        mLeft = -50
    }
    calico.style.marginLeft = mLeft + "px"
}
function moverBolaIzqAbajo(){
    mLeftBall -= velocidad;
    mTopBall -= velocidad;
    if (mTopBall <= 0) {
        mLeftBall += mLeftBall
        mTopBall += mTopBall
    }
    ball.style.marginLeft = mLeftBall + "px"
    ball.style.marginTop = mTopBall + "px"
}
function moverArriba(){
    mTop -= velocidad;
    movements.play();
    if (mTop < 0){
        mTop = 0
    }
    calico.style.top = mTop + "px"
}
function moverAbajo(){
    mTop += velocidad;
    movements.play();
    if (mTop > 450){
        mTop = 450
    }
    calico.style.top = mTop + "px"
}
//detección de superpoder
setInterval(function superPower(){
    var positionX = parseFloat(calico.style.marginLeft)
    var positionY = parseFloat(calico.style.top)
    if (positionX==400 && positionY==100){
        window.location = '/flappy/flappy-coins.html';
        tunnel.play();
    }
}, 1000)
//detección de estrellas = suman puntos
setInterval(function colisionStars(){
    var positionX = parseFloat(calico.style.marginLeft)
    var positionY = parseFloat(calico.style.top)
    if (positionX==50 && positionY==400 || positionX==50 && positionY==350 || positionX==50 && positionY==300){
        score++;
        document.getElementById("counter-label").innerHTML = score;
        audio_moneda.play();
        }
}, 1000)
//detección de muerte = restar puntos
setInterval(function endGame(){
    var positionX = parseFloat(calico.style.marginLeft)
    var positionY = parseFloat(calico.style.top)
    if (positionX==100 && positionY==400){
        score--;
        document.getElementById("counter-label").innerHTML = score;
        lost.play();
        }
}, 1000)

function gameInit() {
    getElements()
    moverDerecha()
    moverBolaDrchaAbajo()
    colision()
    moverIzquierda()
    moverArriba()
    moverAbajo()
    superPower()
    colisionStars()
    endGame()
}
gameInit()