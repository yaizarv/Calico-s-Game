let world, calico, ballBlue, ballGreen, ballPink, ballYellow, ballRed, gafas
let mLeftBall = 0;
let mTopBall = 0;
let mLeftBallGreen = 450;
let mTopBallGreen = 0;
let mLeftBallPink = -50;
let mTopBallPink = 200;
let mLeftBallYellow = -75;
let mTopBallYellow = 475;
let mLeftBallRed = 500;
let mTopBallRed = 200;
let mLeftGafas = 400;
let mTopGafas = 200;
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
    ballBlue = document.querySelector('.ball')
    ballGreen = document.querySelector('.ball-green')
    ballPink = document.querySelector('.ball-pink')
    ballYellow = document.querySelector('.ball-yellow')
    ballRed = document.querySelector('.ball-red')
    gafas = document.querySelector('.gafas')
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
    calico.style.marginLeft = mLeft + "px";
}

function moverIzquierda(){
    mLeft -= velocidad;
    movements.play();
    if (mLeft < 0){
        mLeft = 0
    }
    calico.style.marginLeft = mLeft + "px";
}
function moverArriba(){
    mTop -= velocidad;
    movements.play();
    if (mTop < 0){
        mTop = 0
    }
    calico.style.top = mTop + "px";
}
function moverAbajo(){
    mTop += velocidad;
    movements.play();
    if (mTop > 450){
        mTop = 450
    }
    calico.style.top = mTop + "px";
}
//colisión con gafas
setInterval(function superPoder(){
    if (mLeft==mLeftGafas && mTop==mTopGafas){
        window.location = "/flappy/flappy-coins.html"
    }
}, 1000)

//movimiento bola azul
setInterval(function bolaAzul(){
    mLeftBall += velocidad;
    mTopBall += velocidad;
    if (mLeft == mLeftBall && mTop == mTopBall){
        window.alert("Te ha alcanzado la bola azul")
        } 
    if (mTopBall > 450){
        mTopBall = 0;
        mLeftBall = 0;
    }
    ballBlue.style.left = mLeftBall + "px";
    ballBlue.style.top = mTopBall + "px";
}, 1000)

//movimiento bola verde
setInterval(function bolaVerde(){
    mLeftBallGreen = mLeftBallGreen - velocidad;
    mTopBallGreen = mTopBallGreen + velocidad;
    if (mLeft == mLeftBallGreen && mTop == mTopBallGreen){
        window.alert("Te ha alcanzado la bola verde");
        } 
    if (mTopBallGreen > 450){
        mTopBallGreen = 0;
        mLeftBallGreen = 450;
    }
    ballGreen.style.left = mLeftBallGreen + "px";
    ballGreen.style.top = mTopBallGreen + "px";
}, 1000)

//movimiento bola rosa
setInterval(function bolaRosa(){
    mLeftBallPink = mLeftBallPink + velocidad;
    if (mLeft == mLeftBallPink && mTop == mTopBallPink){
        window.alert("Te ha alcanzado la bola rosa");
        } 
    if (mLeftBallPink > 500){
        mLeftBallPink = 0;
    }
    ballPink.style.left = mLeftBallPink + "px";
    ballPink.style.top = mTopBallPink + "px";
}, 1000)

//movimiento bola amarilla
setInterval(function bolaAmarilla(){
    mLeftBallYellow = mLeftBallYellow + velocidad;
    mTopBallYellow = mTopBallYellow - velocidad;
    if (mLeft == mLeftBallYellow && mTop == mTopBallYellow){
        window.alert ("Te ha alcanzado la bola amarilla");
        } 
    if (mLeftBallYellow > 400){
        mLeftBallYellow = 100;
        mTopBallYellow = 400;
    }
    ballYellow.style.left = mLeftBallYellow + "px"
    ballYellow.style.top = mTopBallYellow + "px"
}, 1000)

//movimiento bola roja
setInterval(function bolaRoja(){
    mLeftBallRed = mLeftBallRed - velocidad;
    if (mLeft==mLeftBall && mTop == mTopBallRed){
        window.alert("Te ha alcanzado la bola roja");
    } 
    if (mLeftBallRed < 0){
        mLeftBallRed = 500;
    }
    ballRed.style.left = mLeftBallRed + "px";
    ballRed.style.top = mTopBallRed + "px";
}, 1000)

//detección de estrellas = suman puntos
setInterval(function colisionStars(){
    if (mLeft==100 && mTop==100 || mLeft==200 && mTop==100 || mLeft==400 && mTop==100 || mLeft==400 && mTop == 400 || mLeft==400 && mTop==300 || mLeft==200 && mTop==400){
        console.log("he ganado")
        score++;
        document.getElementById("counter-label").innerHTML = score;
        audio_moneda.play();
        }
}, 1000)
//detección de muerte = restar puntos
setInterval(function endGame(){
    if (mLeft==300 && mTop==100 || mLeft==100 && mTop==400){
        score--;
        document.getElementById("counter-label").innerHTML = score;
        lost.play();
        }
}, 1000)

function gameInit() {
    getElements()
    moverDerecha()
    moverIzquierda()
    moverArriba()
    moverAbajo()
    bolaAzul()
    bolaVerde()
    bolaRosa()
    bolaAmarilla()
    bolaRoja()
    superPoder()
    colisionStars()
    endGame()
}
gameInit()