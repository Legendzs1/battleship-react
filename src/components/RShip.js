import React from "react";

const RShip = (props) => {
  return (
    <div
      className="ships"
      onDragOver={props.onDragOver}
      onDragStart={props.onDragStart}
    >
      <h3>Ships</h3>
      <div
        className="ship shipStyle"
        id="destroyer"
        draggable={true}
        onDragEnd={props.onDragEnd}
      ></div>
      <div
        className="ship shipStyle"
        id="cruiser"
        draggable={true}
        onDragEnd={props.onDragEnd}
      ></div>
      <div
        className="ship shipStyle"
        id="battleship"
        draggable={true}
        onDragEnd={props.onDragEnd}
      ></div>
      <div
        className="ship shipStyle"
        id="carrier"
        draggable={true}
        onDragEnd={props.onDragEnd}
      ></div>
    </div>
  );
};
export default RShip;
