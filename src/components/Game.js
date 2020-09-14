import React, { useState, useEffect } from "react";
import Gameboard from "./game/Gameboard";
import NewPlayer from "./game/Player";
import Grid from "./Grid";
import RShip from "./RShip";

const Game = () => {
  const [gameboardPlayer, setGameboardPlayer] = useState(Gameboard);
  const [gameboardAI, setGameboardAI] = useState(Gameboard);
  const [gameWinnerText, setGameWinnerText] = useState("");
  const [gameWinner, setGameWinner] = useState(false);
  const [AIShipNums, setAIShipNums] = useState([]);
  const [IDOfShip, setIDOfShip] = useState("");
  const player = NewPlayer();

  const getAINum = () => {
    let goodNum = false;
    while (!goodNum) {
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i <= AIShipNums.length; i++) {
        if (AIShipNums[i] === num) {
          break;
        } else if (i === AIShipNums.length) {
          setAIShipNums(AIShipNums.push(num));
          goodNum = true;
          return num;
        }
      }
    }
  };

  const generateAIShipCoord = (length) => {
    let shipMap = [];
    let randNum1 = getAINum();
    let randNum2 = Math.floor(Math.random() * 5);
    for (let i = 0; i < length; i++) {
      if (i !== 0) {
        shipMap.push([randNum1, randNum2++]);
      } else {
        shipMap.push([randNum1, randNum2]);
        randNum2++;
      }
    }
    return shipMap;
  };

  const setShipOnGrid = (id, xCoord, yCoord) => {
    let ships = {
      destroyer: 2,
      cruiser: 3,
      battleship: 4,
      carrier: 5,
    };
    let player = document.getElementById("player");
    let row = player.getElementsByClassName("rows");
    let grid = [];
    let length = ships[id];
    let index = xCoord;
    let initialVal = xCoord;
    while (length > 0) {
      if (index === 10) {
          console.log(initialVal)
          console.log(row[initialVal])
          row[--initialVal].children[yCoord].className += " shipStyle";
          grid.push([parseInt(initialVal), parseInt(yCoord)]);
          length--;
      } else {
        row[xCoord++].children[yCoord].className += " shipStyle";
        grid.push([parseInt(index++), parseInt(yCoord)]);
        length--;
      }
    }
    return grid;
  };

  const createAIShip = () => {
    let ships = {
      0: generateAIShipCoord(2),
      1: generateAIShipCoord(3),
      2: generateAIShipCoord(4),
      3: generateAIShipCoord(5),
    };
    for (let i = 0; i < 4; i++) {
      gameboardAI.createShip(ships[i]);
    }
  };

  const getLegalAIAttack = () => {
    let legalMove = false;
    while (legalMove === false) {
      let AISelection = player.isLegalMove(
        [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
        gameboardPlayer
      );
      if (AISelection === true) {
        legalMove = true;
        setGameboardPlayer({ ...gameboardPlayer });
      }
    }
  };
  const checkWinner = () => {
    if (gameboardAI.isAllShipsSunk()) {
      setGameWinner(true);
      setGameWinnerText("Player is Winner");
    } else if (gameboardPlayer.isAllShipsSunk()) {
      setGameWinner(true);
      setGameWinnerText("The AI is too powerful");
    }
  };

  const handleClick = (event) => {
    let coords = [
      parseInt(event.target.parentNode.id),
      parseInt(event.target.id),
    ];
    player.isLegalMove(coords, gameboardAI);
    checkWinner();
    setGameboardAI({ ...gameboardAI });
    getLegalAIAttack();
    checkWinner();
  };

  const allowDragging = (event) => {
    event.preventDefault();
  };

  const dragStart = (event) => {
    setIDOfShip(event.target.id);
  };

  const dragEnd = (event) => {
    document.getElementById(event.target.id).setAttribute("draggable", false);
    document.getElementById(event.target.id).style.backgroundColor = "#e36e40";
  };

  const drop = (event) => {
    event.preventDefault();
    event.target.className += " shipStyle";
    let shipCoords = setShipOnGrid(
      IDOfShip,
      event.target.parentNode.id,
      event.target.id
    );
    gameboardPlayer.createShip(shipCoords);
    setGameboardPlayer({ ...gameboardPlayer });
  };

  useEffect(() => {
    createAIShip();
  }, []);

  return (
    <div className="game">
      <RShip
        onDragOver={allowDragging}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
      />
      <div className="player">Player</div>
      <Grid
        grid={gameboardPlayer}
        onClick={handleClick}
        gridID={"player"}
        onDrop={drop}
        onDragOver={allowDragging}
      />
      <div className="player">AI</div>
      <Grid grid={gameboardAI} onClick={handleClick} gridID={"ai"} />
      <div className="winnerText">
        {gameWinner ? <div>{gameWinnerText}</div> : <div></div>}
      </div>
    </div>
  );
};

export default Game;
