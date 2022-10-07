import React from "react";
import "./Dice.css";

export const Dice = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="card" id="front"></div>
        <div className="card" id="back"></div>
        <div className="card" id="left"></div>
        <div className="card" id="right"></div>
        <div className="card" id="top"></div>
        <div className="card" id="bottom"></div>
      </div>
    </div>
  );
};
