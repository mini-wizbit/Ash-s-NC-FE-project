import React from "react";

export const SortByX = ({sortByValue, setSortByValue, setSearchBy}) =>{
    const handleSort =(e)=>{
        setSearchBy({sort_by: e.target.value})
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
            <option value="">Select</option>
            <option value='title'>Title</option>
            <option value="owner">Owner</option>
            </select>
        </label>
        </>
    )
}