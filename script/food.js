import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const EXPANTION_RATE = 1

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANTION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const foodSegment = document.createElement('div')
    foodSegment.style.gridRowStart = food.y
    foodSegment.style.gridColumnStart = food.x
    foodSegment.classList.add('food')
    gameBoard.appendChild(foodSegment)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
