import React, { useState, forceUpdate } from "react";
import Gameboard from "./game/Gameboard";
import NewPlayer from "./game/Player";
import Grid from './Grid'

const Game = () => {
  const [gameboardPlayer, setGameboardPlayer] = useState(Gameboard);
  const [gameboardAI, setGameboardAI] = useState(Gameboard);
  //const [player, setPlayer] = useState(NewPlayer);
  const player = NewPlayer();
  //const [playerAI, setPlayerAI] = useState(NewPlayer);

  const gameLoop = () => {
    /*         let playerBoard = gameboards[0]
        let aiBoard = gameboards[1]
        let player = players[0]
        let aiPlayer = players[1] */
    gameboardPlayer.createShip([
      [0, 0],
      [0, 1],
    ]); //player
    gameboardAI.createShip([
      [5, 3],
      [5, 4],
      [5, 5],
    ]); //ai
    // let _isGame = true;
    // while (_isGame) {
    //   player.isLegalMove([5, 3], gameboardAI);
    //   playerAI.isLegalMove([0, 0], gameboardPlayer);
    //   if (gameboardAI.isAllShipsSunk()) {
    //     _isGame = false;
    //     return "Winner is human";
    //   } else if (gameboardPlayer.isAllShipsSunk()) {
    //     _isGame = false;
    //     return "Winner is AI";
    //   }
    //   //_isGame = false;
    // }
  };
  gameLoop();
  const handleClick = (e) => {
    //console.log([parseInt(e.target.id),parseInt(e.target.parentNode.id)])
    let coords = [parseInt(e.target.id),parseInt(e.target.parentNode.id)]
    console.log(gameboardAI)
    player.isLegalMove(coords,gameboardAI)
    setGameboardAI({...gameboardAI})
    player.isLegalMove([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)],gameboardPlayer)
    setGameboardPlayer({...gameboardPlayer})
    //console.log(gameboardAI)
    //setPlayerAI(playerAI)
    //setPlayer(player.isLegalMove(coords,gameboardAI))
    //console.log(e.target.parentNode.parentNode.id)
    //handle click is essentially the game loop
    //running into issue that setPlayer updates DOM elements into it and when
    //the second time something is clicked it doesn't reconigze as undefined because of it

  }


  return (
    <div className="game">
        <div>Player</div>
        <Grid grid={gameboardPlayer} onClick={handleClick} gridID={"player"}/>
        <div>AI</div>
        <Grid grid={gameboardAI} onClick={handleClick} gridID={"ai"}/>
    </div>
  );
};

export default Game;

/* <div className="game">
<div>Player</div>
<div className="grid-container">
  {gameboardPlayer.returnGameboard().map((rows, indexR) => (
    <div className="rows" key={indexR}>
      {rows.map((squares, indexC) => (
        <div className="squares" key={indexC}>
          {squares}
        </div>
      ))}
    </div>
  ))}
</div>
<div>AI</div>
<div className="grid-container">
  {gameboardAI.returnGameboard().map((rows, indexR) => (
    <div className="rows" key={indexR}>
      {rows.map((squares, indexC) => (
        <div className="squares" key={indexC}>
          {squares}
        </div>
      ))}
    </div>
  ))}
</div>
</div> */