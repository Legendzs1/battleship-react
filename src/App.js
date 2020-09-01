import React from "react";
import "./App.css";
import Gameboard from "./components/game/Gameboard";
import Game from "./components/Game";
import NewPlayer from "./components/game/Player";
const App = (props) =>{

/*   const gameboards = [];
  const players = [];
  const gameboardP = Gameboard(); // player
  const gameboardAI = Gameboard(); // AI
  gameboards.push(gameboardP);
  gameboards.push(gameboardAI);
  const player = NewPlayer();
  const playerAI = NewPlayer();
  players.push(player);
  players.push(playerAI); */
  //gameboards[0].createShip([[0,0],[0,1]]); // player
  //gameboards[1].createShip([[0,0],[0,1]]); // AI

  //game.gameLoop(players,gameboards)
  return (
    <Game />
  );
}

export default App;