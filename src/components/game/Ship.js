const _ = require('lodash')

const CreateShip = (shipLength, coords) => {
  const _length = shipLength
  const coord = [coords]
  let _isHit = false
  let _isSunk = false
  const getLength = () => _length
  const isHit = (checkCoord) =>  {
    let checkCoordinates = [checkCoord]
    for(let i = 0; i < getCoord().length; i++) {
      for(let x = 0; x < getCoord()[i].length; x++) {
        if(_.isEqual(coord[0][x],checkCoordinates[0])){
          _isHit = true
          return _isHit
        }
      }
    }
    return false
  }
  const getCoord = () => coord
  const isSunk = () =>  _isSunk
  return { getLength, isHit, isSunk, getCoord }
}



export default CreateShip;