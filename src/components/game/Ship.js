const _ = require("lodash");

const CreateShip = (coords) => {
  const coord = [coords];
  let _shipLength = coords.length;
  let _isHit = false;
  let _isSunk = false;
  const getLength = () => _shipLength;
  const isHit = (checkCoord) => {
    let checkCoordinates = [checkCoord];
    for (let i = 0; i < getCoord().length; i++) {
      for (let x = 0; x < getCoord()[i].length; x++) {
        if (_.isEqual(coord[0][x], checkCoordinates[0])) {
          _isHit = true;
          _shipLength--;
          return _isHit;
        }
      }
    }
    return false;
  };

  const getCoord = () => coord;
  const isSunk = () => {
    if (_shipLength === 0) {
      _isSunk = true;
      return _isSunk;
    }
    return false;
  };
  return { getLength, isHit, isSunk, getCoord };
};

export default CreateShip;
