import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils/api";
import CategoryList from "../CategoriesList/CategoriesList.jsx";
import { Loading } from "../Loader/Loader";
import { SortReviews } from "../SortReviews/SortReviews";
import "./AllReviews.css";

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
    <>
      <Loading></Loading>
      <p>...Loading please wait</p>
    </>
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
                <img
                  classname="review-img"
                  src={review.review_img_url}
                  alt={review.title}
                ></img>
                <div className="review-extras">
                  <h3 className="review-owner">Review by</h3>
                  <h3 className="review-owner">{review.owner}</h3>
                  <h4 className="review-votes"> Votes:{review.votes}</h4>
                  <p className="review-category"> Category:</p>
                  <p className="review-categoryV2">{review.category}</p>
                  <Link
                    to={`/reviews/${review.review_id}`}
                    key={review.review_id}
                  >
                    More Info Here
                  </Link>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
