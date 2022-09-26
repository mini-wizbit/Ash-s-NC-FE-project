import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getReviews } from "../../utils/api";
import CategoryList from "../CategoriesList/CategoriesList.jsx";


export const AllReviews = ()=>{

    const [reviews, setReviews] = useState([])
    const [theCategory, setTheCategory]=useState("")
    useEffect(()=>{
        getReviews(theCategory).then((ApiReviews)=>{
            setReviews(ApiReviews.reviewArray)
        })
    }, [theCategory])

    return (
        <div>
            <CategoryList setTheCategory={setTheCategory}></CategoryList>
            <p>sort by X</p>
            <ul>
                <div className="review-list">
                    {reviews.map((review) =>{
                        return(
                            <div>
                            <li>
                                <div className="review-card">
                                    <h2 className="review-title">{review.title}</h2>
                                    <img src={review.review_img_url} alt={review.title}></img>
                                    <h3 className="review-owner">Review by {review.owner}</h3>
                                    <h4 className="review-votes"> Votes:{review.votes}</h4>
                                    <p className="review-category">Category:{review.category}</p>
                                    <p key={review.review_id}>placeholder for a link?</p>
                                </div>
                            </li>
                            </div>
                        )
                    })}
                </div>
            </ul>
        </div>
    )

}