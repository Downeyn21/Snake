import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"

//========== create grid ===========
const gameBoard = document.getElementById('gameBoard')
for (let i = 0; i < 441; i++) {
    const sqr = document.createElement('div')
    sqr.classList.add('sqr')
    gameBoardWrapper.appendChild(sqr)
}
//==================================

let lastRender = 0

function engine(currentTime) {
    window.requestAnimationFrame(engine)
    let secondsSinceLastRender = (currentTime - lastRender) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }

    lastRender = currentTime
    
    update()
    draw()
}

engine()

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake()
}