import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { reviewsByQueries } from "../../utils/api";
import { OrderByX } from "../OrderByX/OrderByX";
import { SortByX } from "../SortByX/SortByX";
import { Loading } from "../Loader/Loader";
import "./SortReviews.css";

export const SortReviews = ({ setReviews, theCategory }) => {
  const { review } = useParams();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortByValue, setSortByValue] = useState("title");
  const [orderByValue, setOrderByValue] = useState("asc");

  useEffect(() => {
    setLoading(true);
    reviewsByQueries(theCategory, sortByValue, orderByValue)
      .then((reviewsFromApi) => {
        setIsError(false);
        setLoading(false);
        setReviews(reviewsFromApi);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [sortByValue, orderByValue]);

  return isError ? (
    <p>Oops... something went wrong.</p>
  ) : loading ? (
    <>
      <Loading></Loading>
      <p>...Loading please wait</p>
    </>
  ) : (
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
  );
};
