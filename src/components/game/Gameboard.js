import NewShip from "./Ship";

const Gameboard = () => {
  let listOfShips = [];
  let _gameboard = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  const createShip = (coords) => {
    const ship = NewShip(coords);
    _placeShip(ship);
  };
  const checkIfShipOccupied = (coords) => {
    listOfShips.map((ship) => {
      for (var shipLength = 0; shipLength < ship.length; shipLength++) {
        console.log(coords[0][0]);
        console.log(ship.getCoord()[0][0][shipLength]);
        if (coords[0][shipLength] !== ship.getCoord()[0][0][shipLength]) {
          console.log("false");
        } else {
          console.log("true");
        }
      }
    });
  };

  const _placeShip = (ship) => {
    listOfShips.push(ship);
  };

  const receiveAttack = (attackCoords) => {
    for (let i = 0; i < returnListOfShips().length; i++) {
      if (returnListOfShips()[i].isHit(attackCoords)) {
        returnGameboard()[attackCoords[0]][attackCoords[1]] = "HIT";
        break;
      } else {
        returnGameboard()[attackCoords[0]][attackCoords[1]] = "MISS";
      }
    }
  };

  const isAllShipsSunk = () => {
    for (let i = 0; i < returnListOfShips().length; i++) {
      if (!returnListOfShips()[i].isSunk()) {
        return false;
      }
    }
    return true;
  };

  const returnListOfShips = () => {
    return listOfShips;
  };

  const returnGameboard = () => _gameboard;

  return {
    createShip,
    returnListOfShips,
    checkIfShipOccupied,
    receiveAttack,
    returnGameboard,
    isAllShipsSunk,
  };
};

export default Gameboard;
