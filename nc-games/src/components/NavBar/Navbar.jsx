import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <div className="NavBar">
      <nav>
        <Link className="NavList" to="/">
          Home
        </Link>
        <Link className="NavList" to="/reviews">
          Game Reviews
        </Link>
        <Link className="NavList" to="/users">
          Our Users
        </Link>
      </nav>
    </div>
  );
};
