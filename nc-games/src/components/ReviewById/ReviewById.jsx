import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById, voteUpdate } from "../../utils/api"



export const ReviewById = () =>{
    const { review_id } = useParams()
    const [reviewNumber, setReviewNumber]= useState(1)
    const [vote, setVotes]=useState(0)

    const likeVote = ()=>{
        setVotes((currCount)=> currCount + 1);
        voteUpdate(review_id, 1)
    }

    const dislikeVote = ()=>{
        setVotes((currCount)=> currCount - 1);
        voteUpdate(review_id, -1)
    }


    useEffect(()=>{
        getReviewById(review_id)
        .then((thisReview)=>{
            setReviewNumber(thisReview)
        })
    },[review_id]) 
    

    return (
        <div className="reviewById-card">
            <li>
                <h2>{reviewNumber.title}</h2>
                <img src={reviewNumber.review_img_url} alt={reviewNumber.title} className="reviewById-card-Img"></img>
                <p>{reviewNumber.review_body}</p>
                <h4>{reviewNumber.votes}</h4>
                <h4>{reviewNumber.owner}</h4>
                <p>{reviewNumber.category}</p>
                <h4>{reviewNumber.votes + vote}</h4>
                <button onClick={likeVote}>Like</button>
                <button onClick={dislikeVote}>Dislike</button>
            </li>

        </div>
    )
}