import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { reviewsByQueries } from "../../utils/api";
import { SortByX } from "../SortByX/SortByX";

export const SortReviews =({setReviews})=>{
    //code
    const{review} = useParams()
    const[loading, setLoading] = useState(true)
    const[sortByValue, setSortByValue] = useState("created_at") //<-?
    const[orderByValue, setOrderByValue]= useState("desc")
    const[searchBy, setSearchBy]= useSearchParams({
        sort_by: "",
        order: "",
    })

    useEffect(()=>{
        setLoading(true)
        reviewsByQueries(review, sortByValue)
        .then((reviewsFromApi)=>{
            console.log(reviewsFromApi,"<back in sort reviews");
            setReviews(reviewsFromApi)
            setLoading(false)
        })
    },[review, sortByValue, orderByValue])

    return(
        <div>
            <SortByX 
            sortByValue={sortByValue}
            setSortByValue={setSortByValue}
            setSearchBy={setSearchBy}
            ></SortByX>
            <p>Placeholder in SORT</p>
        </div>
    )
}