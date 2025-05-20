let inputDirection = { x:0, y:0 }
let LastInput = { x:0, y:0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(LastInput.y !== 0){
                break
            }
            inputDirection = { x:0, y:-1 }
            break
        case 'ArrowDown':
            if(LastInput.y !== 0){
                break
            }
            inputDirection = { x:0, y:1 }
            break
        case 'ArrowRight':
            if(LastInput.x !== 0){
                break
            }
            inputDirection = { x:1, y:0 }
            break
        case 'ArrowLeft':
            if(LastInput.x !== 0){
                break
            }
            inputDirection = { x:-1, y:0}
    }
})

export function getInputDirection() {
    LastInput = inputDirection
    return inputDirection
}