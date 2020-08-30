import React from 'react';
import './App.css';
import Ship from './components/game/Ship.js'

function App() {
  const NewShip = Ship([[5,5],[5,6],[5,7]])
  console.log(NewShip.isHit([5,7]))
  return (
    <div className="App">
      <h1>{NewShip.getLength()}</h1>
    </div>
  );
}

export default App;
