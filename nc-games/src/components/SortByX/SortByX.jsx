import React from "react";

export const SortByX = ({sortByValue, setSortByValue}) =>{

    const handleSort =(e)=>{
        setSortByValue(e.target.value)
    }

    return (
        <>
        <label>
            Sort By:
            <select 
            className="dropdown"
            onChange={handleSort}
            value={sortByValue}
            >
            <option value='title'>Title</option>
            <option value="owner">Owner</option>
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
            </select>
        </label>
        </>
    )
}