import NewShip from './Ship'

const Gameboard = () => {
    let listOfShips = []
    const gameBoardIsHere = () => {return true}
    const createShip = () => {
        const ship = NewShip([[0,0],[0,1]])
        placeShip(ship)
    }

    const placeShip = (ship) => {
        listOfShips.push(ship)
    }

    const receiveAttack = (attackCoords) => {
         return returnListOfShips()[0].isHit(attackCoords)
    }

    const returnListOfShips = () => {return listOfShips}



    return { gameBoardIsHere, createShip, returnListOfShips, placeShip, receiveAttack };
};

export default Gameboard;
