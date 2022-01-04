let world, calico, ball, ballGreen, ballPink, ballYellow
let mLeftBall = 0;
let mTopBall = 0;
let mLeftBallGreen = 750;
let mTopBallGreen = 0;
let mLeftBallPink = -50;
let mTopBallPink = 250;
let velocidad = 50;
let mLeft = 0;
let mTop = 0;
let score = 0;
let audio_moneda = new Audio("/styles/audio/audio-moneda.mpeg");
let movements = new Audio("/styles/audio/movements.mpeg");
let lost = new Audio("/styles/audio/lost.mpeg");

//Coger elementos en el DOM

function getElements() {
    world = document.querySelector( '.world' )
    calico = document.querySelector( '.calico-bird' )
    ball = document.querySelector('.ball')
    ballGreen = document.querySelector('.ball-green')
    ballPink = document.querySelector('.ball-pink')
}

//Eventos de teclas
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

//Movimientos de Calico
function moverDerecha(){
    mLeft += velocidad;
    movements.play();
    if (mLeft > 700){
        mLeft = 700
    }
    calico.style.marginLeft = mLeft + "px"
}

function moverIzquierda(){
    mLeft -= velocidad;
    movements.play();
    if (mLeft < -50){
        mLeft = -50
    }
    calico.style.marginLeft = mLeft + "px"
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

//movimiento bola azul
function bolaAzul(){
    mLeftBall += velocidad;
    mTopBall += velocidad;
    if (mLeft == mLeftBall && mTop == mTopBall){
        window.alert("colision con azul");
        } else {
            console.log("no hay colision con azul");
        }
    if (mTopBall > 500){
        mTopBall = 0;
        mLeftBall = 0;
    }
    ball.style.left = mLeftBall + "px"
    ball.style.top = mTopBall + "px"
}

//movimiento bola verde
function bolaVerde(){
    mLeftBallGreen = mLeftBallGreen - velocidad;
    mTopBallGreen = mTopBallGreen + velocidad;
    if (mLeft == mLeftBallGreen && mTop == mTopBallGreen){
        window.alert("colision con verde");
        } else {
            console.log("no hay colision con verde");
        }
    if (mTopBallGreen > 500){
        mTopBallGreen = 0;
        mLeftBallGreen = 750;
    }
    ballGreen.style.left = mLeftBallGreen + "px"
    ballGreen.style.top = mTopBallGreen + "px"
}

//movimiento bola rosa
function bolaRosa(){
    mLeftBallPink = mLeftBallPink + velocidad;
    if (mLeft == mLeftBallPink && mTop == mTopBallPink){
        window.alert("colision con rosa");
        } else {
            console.log("no hay colision con rosa");
        }
    if (mLeftBallPink > 750){
        mLeftBallPink = 0;
    }
    ballPink.style.left = mLeftBallPink + "px"
    ballPink.style.top = mTopBallPink + "px"
}

//detección de superpoder
setInterval(function superPower(){
    var positionX = parseFloat(calico.style.marginLeft)
    var positionY = parseFloat(calico.style.top)
    if (positionX==600 && positionY==400){
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
    bolaAzul()
    bolaVerde()
    bolaRosa()
    colision()
    moverIzquierda()
    moverArriba()
    moverAbajo()
    superPower()
    colisionStars()
    endGame()
}
gameInit()