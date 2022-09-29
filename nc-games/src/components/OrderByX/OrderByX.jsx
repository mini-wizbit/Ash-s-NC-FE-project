import React from "react";

export const OrderByX = ({orderByValue, setOrderByValue}) =>{
    //code
    const ascClick = (e) =>{
        setOrderByValue(e.target.value)
    }
    const descClick = (e) =>{
        setOrderByValue(e.target.value)
    }

    return(
        <div>
            <button onClick={ascClick} value="asc">Ascending</button>
            <button onClick={descClick} value="desc">Descending</button>

            <p>OrderByX placeholder</p>
        </div>
    )
}