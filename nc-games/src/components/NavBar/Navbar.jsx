import React from "react";
import { Link } from "react-router-dom";

export const Navbar =()=>{
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/api/reviews">Game Reviews</Link>
        </nav>
    </div>
}