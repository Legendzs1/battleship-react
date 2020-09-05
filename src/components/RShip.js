import React, { useState } from "react";


const RShip = (props) => {
    //const [gameboardPlayer, setGameboardPlayer] = useState(props);


    const ships = {
      2: 'destroyer',
      3: 'cruiser',
      4: 'battleship',
      5: 'carrier',
    };
    const shipStyles = {
        height: "40px"
    }

  return (
    <div className="ships" onDragOver={props.onDragOver}>
        <div className="destroyer ship shipStyle" draggable={true}></div>
    </div>
  );
}
export default RShip;
