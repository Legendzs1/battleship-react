import Gameboard from './Gameboard'

const Game = () => {
    //const shipsPlaced = false;
    const gameLoop = (players, gameboards) => {
        let playerBoard = gameboards[0]
        let aiBoard = gameboards[1]
        let player = players[0]
        let aiPlayer = players[1]
        playerBoard.createShip([[0,0],[0,1]]) //player
        aiBoard.createShip([[5,3],[5,4],[5,5]]) //ai
        let _isGame = true;
        while(_isGame) {
            player.isLegalMove([5,3],aiBoard)
            aiPlayer.isLegalMove([0,0],playerBoard)
            if(aiBoard.isAllShipsSunk()) {
                _isGame = false;
                return "Winner is human"
            } else if(playerBoard.isAllShipsSunk()) {
                _isGame = false;
                return "Winner is AI"
            }
            //_isGame = false;
        }
    }
    return { gameLoop }
}



export default Game;