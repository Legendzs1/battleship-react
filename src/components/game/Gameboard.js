import NewShip from './Ship'

const Gameboard = () => {
    let listOfShips = []
    let _gameboard = Array(10).fill(null)
    .map(()=> Array(10).fill(null))

    const createShip = (coords) => {
        const ship = NewShip(coords)
        placeShip(ship)
    }

    const placeShip = (ship) => {
        listOfShips.push(ship)
    }

    const receiveAttack = (attackCoords) => {
        if(returnListOfShips()[0].isHit(attackCoords)) {
            returnGameboard()[attackCoords[0]][attackCoords[1]] = "HIT"
        }
        else returnGameboard()[attackCoords[0]][attackCoords[1]] = "O"

         return returnListOfShips()[0].isHit(attackCoords)
    }


    const returnListOfShips = () => {return listOfShips}

    const returnGameboard = () => _gameboard

    return { createShip, returnListOfShips, placeShip, receiveAttack, returnGameboard };
};

export default Gameboard;
