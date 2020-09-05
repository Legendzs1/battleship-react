import React from "react";


const Grid = (props) => {


  return (

    <div className="grid-container" id={props.gridID}>
      {props.grid.returnGameboard().map((rows, indexR) => (
        <div className="rows" key={indexR} id={indexR}>
          {rows.map((squares, indexC) => (
            <div id={[indexC]} onClick={props.onClick} onDrop={props.onDrop} onDragOver={props.onDragOver} className="squares" key={indexC}>{squares}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
