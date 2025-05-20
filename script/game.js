import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeInterection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

//========== create grid ===========
const gameBoard = document.getElementById('gameBoard')
for (let i = 0; i < 441; i++) {
    const sqr = document.createElement('div')
    sqr.classList.add('sqr')
    gameBoardWrapper.appendChild(sqr)
}
//==================================

let lastRender = 0
let gameover = false

function engine(currentTime) {
    if(gameover) {
        if(confirm('You Died')) {
            window.location = '/'
        }
        return
    }

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
    updateFood()
    failCheck()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function failCheck() {
    gameover = outsideGrid(getSnakeHead()) || snakeInterection()
}