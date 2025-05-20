import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 4
const gameBoard = document.getElementById('gameBoard')

const snakeBody = [
    { x:-11, y:-11},
    { x:12, y:11},
    { x:13, y:11}
]

export function update() {
    let inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    console.log(snakeBody);
    
}


export function draw() {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div')
        snakeSegment.style.gridRowStart = segment.y
        snakeSegment.style.gridColumnStart = segment.x
        gameBoard.appendChild(snakeSegment)
        snakeSegment.classList.add('snake')
    })
}