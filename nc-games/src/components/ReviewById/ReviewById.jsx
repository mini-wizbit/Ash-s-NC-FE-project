import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, voteUpdate } from "../../utils/api";
import "./ReviewById.css";

import { PostComment } from "../PostComment/PostComment";

import { Comments } from "../Comments/Comments";

export const ReviewById = () => {
  const { review_id } = useParams();
  const [reviewById, setReviewById] = useState(1);
  const [loading, setLoading] = useState(true);
  const [vote, setVote] = useState(0);
  const [yourVote, setYourVote] = useState(null);
  const [error, setError] = useState(false);

  const likeVote = (e) => {
    e.currentTarget.disabled = true;
    setYourVote("Liked!");
    setVote((currCount) => currCount + 1);
    voteUpdate(review_id, 1).catch((error) => {
      if (error) {
        setError(true);
        setVote((currCount) => {
          return currCount - 1;
        });
      }
    });
  };
  const dislikeVote = (e) => {
    e.currentTarget.disabled = true;
    setYourVote("Disliked!");
    setVote((currCount) => currCount - 1);
    voteUpdate(review_id, -1).catch((error) => {
      if (error) {
        setError(true);
        setVote((currCount) => {
          return currCount + 1;
        });
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    getReviewById(review_id).then((thisReview) => {
      if (thisReview.message) {
        setError(true);
        return <p>Something went wrong....</p>;
      } else {
        setLoading(false);
        setReviewById(thisReview);
      }
    });
  }, [review_id]);

  return error ? (
    <p>Oops... something went wrong please try again</p>
  ) : loading ? (
    <p>...Loading</p>
  ) : (
    <>
      <div className="reviewById-card">
        <h2>{reviewById.title}</h2>
        <img
          src={reviewById.review_img_url}
          alt={reviewById.title}
          className="reviewById-card-Img"
        ></img>
        <p className="category">The {reviewById.category} game</p>
        <p className="review-body">{reviewById.review_body}</p>
        <h4 className="votes">Total votes: {reviewById.votes + vote}</h4>
        <h4 className="yourVote">{yourVote}</h4>
        <button className="voted" onClick={likeVote}>
          like
        </button>
        <button className="voted" onClick={dislikeVote}>
          dislike
        </button>
        <h4 className="owner">The review by {reviewById.owner}</h4>
      </div>
      <div className="comments">
        <PostComment />
        <Comments />
      </div>
    </>
  );
};
