import Gameboard from './Ship'

const Player = () => {
    
    const receiveCoordsToAttack = (coords, gameboard) => {
        gameboard.receiveAttack(coords)
    }

    return { receiveCoordsToAttack }
}



export default Player;