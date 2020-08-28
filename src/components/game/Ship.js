
const CreateShip = (shipLength, coords) => {
  const _length = shipLength
  const coord = [coords]
  let _isHit = false
  let _isSunk = false
  const getLength = () => _length
  const isHit = () =>  {

  }
  const getCoord = () => coord
  const isSunk = () =>  _isSunk
  return { getLength, isHit, isSunk, getCoord }
}
// finish making a factory function for ship for part 1 of the steps


export default CreateShip;