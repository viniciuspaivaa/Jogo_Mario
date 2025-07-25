const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over')
const elementoContador = document.getElementById("contador");

let gameRunning = true;
let contador = 0;

const jump = () => {
 mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

async function contadorRodando() {
    while (gameRunning) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo
        contador++;
        elementoContador.textContent = contador * 100;
    }
}

contadorRodando()

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition =+ window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOver.style.display = ('flex')

        gameRunning = false;
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
