export const SNAKE_SPEED = 1
const gameBoard = document.getElementById('gameBoard')

const snakeBody = [
    { x:11, y:11},
    { x:12, y:11},
    { x:13, y:11}
]

export function update() {
    console.log('update snake')
}

export function draw() {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div')
        snakeSegment.style.gridRowStart = segment.x
        snakeSegment.style.gridColumnStart = segment.y
        gameBoard.appendChild(snakeSegment)
        snakeSegment.classList.add('snake')
    })
}