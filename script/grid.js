export function randomGridPosition() {
    return {
        x: Math.ceil(Math.random() * 21),
        y: Math.ceil(Math.random() * 21)
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
    
}