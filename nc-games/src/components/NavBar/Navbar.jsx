import React from "react";
import { Link } from "react-router-dom";

export const Navbar =()=>{
    return(

        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/reviews">Game Reviews</Link>
        </nav>
    </div>
        )
}