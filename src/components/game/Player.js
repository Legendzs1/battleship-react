const Player = () => {
  const _receiveCoordsToAttack = (coords, gameboard) => {
    gameboard.receiveAttack(coords);
  };
  const isLegalMove = (coords, gameboard) => {
    if (gameboard.returnGameboard()[coords[0]][coords[1]] === null) {
      _receiveCoordsToAttack(coords, gameboard);
      return true;
    } else {
      return false;
    }
  };

  return { isLegalMove };
};

export default Player;
