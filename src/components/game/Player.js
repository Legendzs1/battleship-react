
const Player = () => {

    const _receiveCoordsToAttack = (coords, gameboard) => {
        gameboard.receiveAttack(coords)
    }
//if(gameboard.returnGameboard()[coords[0]][coords[1]] === null) {
    const isLegalMove = (coords, gameboard) => {
        //console.log(coords)
        //console.log(gameboard)
        if(gameboard.returnGameboard()[coords[0]][coords[1]] === null) {
            _receiveCoordsToAttack(coords, gameboard)
        }
        else {return false}
    }



    return { isLegalMove }
}



export default Player;