import { getRandomNumber } from '/utils/utils.js'

let world, block, hole, calico, star, score
let velocidad = 50;
let mLeft = 0;
let mTop = 0;

function getElements() {
    world = document.querySelector( '.world' )
    block = document.querySelector( '.block-grey' )
    hole = document.querySelector( '.hole' )
    calico = document.querySelector( '.calico-bird' )
    score = document.querySelector( '.score' )
    star = document.querySelector('.star')
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
    if (mLeft > 400){
        mLeft = 400
    }
    calico.style.marginLeft = mLeft + "px"
}
function moverIzquierda(){
    mLeft -= velocidad;
    if (mLeft < -350){
        mLeft = -350
    }
    calico.style.marginLeft = mLeft + "px"
}
function moverArriba(){
    mTop -= velocidad;
    if (mTop < -450){
        mTop = -450
    }
    calico.style.top = mTop + "px"
}
function moverAbajo(){
    mTop += velocidad;
    if (mTop > 0){
        mTop = 0
    }
    calico.style.top = mTop + "px"
}
function initRandomHoles() {
    hole.addEventListener( 'animationiteration', _ => {
        const randomTop = getRandomNumber(-100, 150)
        hole.style.top = `-${randomTop}px`
    })
} 
function resetAllAnimations(){
    const seconds = 2
    const blockAnimationCss = `blockAnimation ${ seconds }s infinite linear`
    block.style.animation = blockAnimationCss
    hole.style.animation = blockAnimationCss
}
function gameInit() {
    getElements()
    moverDerecha()
    moverIzquierda()
    moverArriba()
    moverAbajo()
    initRandomHoles()
    resetAllAnimations()  
}

gameInit()