import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { reviewsByQueries } from "../../utils/api";
import { OrderByX } from "../OrderByX/OrderByX";
import { SortByX } from "../SortByX/SortByX";

export const SortReviews =({setReviews, theCategory})=>{
    //code
    const{review} = useParams()
    const[loading, setLoading] = useState(true)
    const[sortByValue, setSortByValue] = useState(undefined) //<-?
    const[orderByValue, setOrderByValue]= useState("desc")
    
    console.log(review, "<<");

    useEffect(()=>{
        setLoading(true)
        reviewsByQueries(theCategory,sortByValue, orderByValue)
        .then((reviewsFromApi)=>{
            setReviews(reviewsFromApi)
            setLoading(false)
        })
    },[sortByValue, orderByValue])

    console.log(orderByValue, "<<< order");    return(
        <div>
            <SortByX 
            sortByValue={sortByValue}
            setSortByValue={setSortByValue}
            ></SortByX>
            <OrderByX
            orderByValue={orderByValue}
            setOrderByValue={setOrderByValue}
            ></OrderByX>
        </div>
    )
}