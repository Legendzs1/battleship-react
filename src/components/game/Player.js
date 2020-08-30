
const Player = () => {

    const _receiveCoordsToAttack = (coords, gameboard) => {
        gameboard.receiveAttack(coords)
    }

    const isLegalMove = (coords, gameboard) => {
        if(gameboard.returnGameboard()[coords[0]][coords[1]] === null) {
            _receiveCoordsToAttack(coords, gameboard)
        }
        else {return false}
    }

    const receiveMoveFromInput = () => {
        return window.prompt("Enter your")
    }

    return { isLegalMove, receiveMoveFromInput }
}



export default Player;