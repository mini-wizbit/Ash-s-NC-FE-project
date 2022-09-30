import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { reviewsByQueries } from "../../utils/api";
import { OrderByX } from "../OrderByX/OrderByX";
import { SortByX } from "../SortByX/SortByX";
import "./SortReviews.css";

export const SortReviews = ({ setReviews, theCategory }) => {
  const { review } = useParams();
  const [loading, setLoading] = useState(true);
  const [sortByValue, setSortByValue] = useState(undefined);
  const [orderByValue, setOrderByValue] = useState("desc");

  useEffect(() => {
    setLoading(true);
    reviewsByQueries(theCategory, sortByValue, orderByValue).then(
      (reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setLoading(false);
      }
    );
  }, [sortByValue, orderByValue]);

  return (
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
