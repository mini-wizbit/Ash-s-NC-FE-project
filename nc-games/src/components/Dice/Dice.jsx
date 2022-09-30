import React from "react";
import "./Dice.css";

export const Dice = () => {
  return (
    <div className="container">
      <input className="button" type="button" value="Click Me!"></input>
      <div className="box">
        <div className="card" id="front">
          front
        </div>
        <div className="card" id="back">
          back
        </div>
        <div className="card" id="left">
          left
        </div>
        <div className="card" id="right">
          right
        </div>
        <div className="card" id="top">
          top
        </div>
        <div className="card" id="bottom">
          bottom
        </div>
      </div>
    </div>
  );
};
