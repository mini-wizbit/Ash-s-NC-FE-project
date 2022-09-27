
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById, voteUpdate } from "../../utils/api"


export const ReviewById = () => {
  const { review_id } = useParams();
  const [reviewById, setReviewById] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviewById(review_id).then((thisReview) => {
      setLoading(false);
      setReviewById(thisReview);
    });
  }, [review_id]);


  return loading ? (
    <p>...Loading</p>
  ) : (
    <div className="reviewById-card">
      <h2>{reviewById.title}</h2>
      <img
        src={reviewById.review_img_url}
        alt={reviewById.title}
        className="reviewById-card-Img"
      ></img>
      <p>{reviewById.review_body}</p>
      <h4>{reviewById.votes}</h4>
      <h4>{reviewById.owner}</h4>
      <p>{reviewById.category}</p>
    </div>
  );
};
