import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils/api";
import CategoryList from "../CategoriesList/CategoriesList.jsx";
import { SortReviews } from "../SortReviews/SortReviews";

export const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [theCategory, setTheCategory] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews(theCategory)
      .then((ApiReviews) => {
        setIsError(false);
        setLoading(false);
        setReviews(ApiReviews.reviews);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [theCategory]);

  return isError ? (
    <p>Oops... something went wrong.</p>
  ) : loading ? (
    <p>...Loading please wait</p>
  ) : (
    <div>
      <CategoryList setTheCategory={setTheCategory}></CategoryList>
      <SortReviews
        setReviews={setReviews}
        theCategory={theCategory}
      ></SortReviews>
      <ul>
        <div className="review-list">
          {reviews.map((review) => {
            return (
              <li className="review-cards">
                <h2 className="review-title">{review.title}</h2>
                <img src={review.review_img_url} alt={review.title}></img>
                <h3 className="review-owner">Review by {review.owner}</h3>
                <h4 className="review-votes"> Votes:{review.votes}</h4>
                <p className="review-category">Category:{review.category}</p>
                <Link
                  to={`/reviews/${review.review_id}`}
                  key={review.review_id}
                >
                  More Info Here
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
