import React from "react";
import { Dice } from "../Dice/Dice";
import { Loading } from "../Loader/Loader";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <h2 className="welcome-message">Welcome to Ash's NC games</h2>
      <Dice></Dice>
    </>
  );
};
