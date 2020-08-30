import React from "react";
import "./App.css";
import Gameboard from "./components/game/Gameboard.js";

function App() {
  const gameboard = Gameboard();
  gameboard.createShip([
    [0, 0],
    [0, 1],
  ]);
  gameboard.createShip([
    [5, 5],
    [5, 4],
  ]);
  gameboard.receiveAttack([0, 0]);
  //gameboard.receiveAttack([1, 6]);
  console.log(gameboard.returnGameboard().join('\n'));
  console.log(gameboard.returnGameboard()[0][0]);

  return (
    <div className="game">
    <div className="grid-container">
      {gameboard.returnGameboard().map((rows, indexR) => (
        <div className="rows" key={indexR}>
          {rows.map((squares, indexC) => (
            <div className="squares" key={indexC}>{squares}</div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
export default App;
