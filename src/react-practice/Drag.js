import React, { useState } from "react";
import Draggable from "react-draggable";

const Drag = () => {
  //to track the position of cursor
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  /******
   * * onMouse Event this is getting triggered...
   */
  const trackPosition = (data) => {
    console.log("🚀 ~ file: Drag.js ~ line 11 ~ Drag ~ data", data);

    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable onDrag={(data) => trackPosition(data)}>
      <div>
        <div
          style={{
            position: "relative",
            cursor: "move",
            color: "Maroon",
            maxWidth: "215px",
            borderRadius: "5px",
            padding: "1em",
            margin: "auto",
            userSelect: "none",
            backgroundColor: "yellow",
          }}
        >
          !!!Drag Race!!! x:{position.x.toFixed(0)} , y: {position.y.toFixed(0)}
          !!!
        </div>
      </div>
    </Draggable>
  );
};

export default Drag;
