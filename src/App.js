import React from 'react';
import './App.css';
import Ship from './components/game/Ship.js'

function App() {
  const NewShip = Ship(6,[[5,5],[5,6]])
  console.log(NewShip.getCoord() )
  return (
    <div className="App">
      <h1>{NewShip.getLength()}</h1>
      <h1>{NewShip.isHit()}</h1>
      <h1>{NewShip.isSunk()}</h1>
    </div>
  );
}

export default App;
