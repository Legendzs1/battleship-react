import React, { useState } from "react";
import Gameboard from "./game/Gameboard";
import NewPlayer from "./game/Player";
import Grid from './Grid'
import RShip from './RShip'

const Game = () => {
  const [gameboardPlayer, setGameboardPlayer] = useState(Gameboard);
  const [gameboardAI, setGameboardAI] = useState(Gameboard);
  //const [player, setPlayer] = useState(NewPlayer);
  const player = NewPlayer();
  //const [playerAI, setPlayerAI] = useState(NewPlayer);
  const createAIShip = () => {
    //console.log(gameboardAI.returnGameboard())
    gameboardAI.createShip([
      [5, 3],
      [5, 4],
      [5, 5],
    ]); 
    //console.log(gameboardAI.returnListOfShips()[0].getCoord())
  };

  const getLegalAIAttack = () => {
    let legalMove = false
    while(legalMove === false) {
      let AISelection = player.isLegalMove([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)],gameboardPlayer)
      if(AISelection === true){
        legalMove = true
        setGameboardPlayer({...gameboardPlayer})
      }
    }
  }

  createAIShip();
  const handleClick = (event) => {
    //console.log([parseInt(event.target.parentNode.id) ,parseInt(event.target.id)])
    //console.log(gameboardPlayer.returnListOfShips())
    let coords = [parseInt(event.target.parentNode.id) ,parseInt(event.target.id)]
    //console.log(gameboardAI)
    //console.log(gameboardPlayer.returnListOfShips()[0].getCoord())
    player.isLegalMove(coords,gameboardAI)
    setGameboardAI({...gameboardAI})
    getLegalAIAttack()
    //player.isLegalMove([Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)],gameboardPlayer)

    //console.log(gameboardAI)
    //setPlayerAI(playerAI)
    //setPlayer(player.isLegalMove(coords,gameboardAI))
    //console.log(e.target.parentNode.parentNode.id)
    
  }

  
  const allowDrop = (event) => {
    event.preventDefault();
  }
  
  const drop = (event) => {
    event.preventDefault();
    //console.log(event.dataTransfer.getData())
    //var data = event.dataTransfer.getData("Text");
    //console.log(data)
    //event.target.appendChild(document.getElementById(data));
    event.target.className += " shipStyle"
    let shipCoords = [[parseInt(event.target.parentNode.id) ,parseInt(event.target.id)]]
    //console.log(shipCoords)
    gameboardPlayer.createShip(shipCoords)
    //console.log(gameboardPlayer.returnListOfShips()[0].getCoord())
    setGameboardPlayer({...gameboardPlayer})
    //console.log(gameboardPlayer.returnGameboard())
    //setGameboardPlayer()
    
  }

  

  return (
    <div className="game">
        <RShip onDragOver={allowDrop} />
        <div>Player</div>
        <Grid grid={gameboardPlayer} onClick={handleClick} gridID={"player"} onDrop={drop} onDragOver={allowDrop}/>
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