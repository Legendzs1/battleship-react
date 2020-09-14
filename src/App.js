import React from "react";
import "./App.css";
import Game from "./components/Game";

const App = (props) => {
  return (
    <div>
      <Game />
      <div className="rules">Drag your Ships to your grid to play</div>
    </div>
  );
};

export default App;
