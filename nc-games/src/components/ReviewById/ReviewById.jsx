import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById } from "../../utils/api"



export const ReviewById = () =>{
    const { review_id } = useParams()
    const [reviewNumber, setReviewNumber]= useState(1)
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        setLoading(true)
        getReviewById(review_id)
        .then((thisReview)=>{
            setLoading(false)
            setReviewNumber(thisReview)
        })
    },[review_id]) 
    

    return loading ?
            (<p>...Loading</p>):
        (

            <div className="reviewById-card">
            <li>
                <h2>{reviewNumber.title}</h2>
                <img src={reviewNumber.review_img_url} alt={reviewNumber.title} className="reviewById-card-Img"></img>
                <p>{reviewNumber.review_body}</p>
                <h4>{reviewNumber.votes}</h4>
                <h4>{reviewNumber.owner}</h4>
                <p>{reviewNumber.category}</p>
            </li>

        </div>
    )
    
}