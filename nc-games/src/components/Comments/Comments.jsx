import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentsById } from "../../utils/api";
import { DeleteComment } from "../DeleteComments/DeleteComment";
import { Loading } from "../Loader/Loader";
import "./Comments.css";
export const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setLoading(true);
    commentsById(review_id).then((apiCommentsById) => {
      if (apiCommentsById.message) {
        setIsError(true);
      } else {
        setLoading(false);
        setComments(apiCommentsById);
      }
    });
  }, [review_id]);

  const realTime = (comments) => {
    const timeStr = comments.slice(0, 10);
    return timeStr;
  };

  return isError ? (
    <p>Oops.. something went wrong...</p>
  ) : loading ? (
    <>
      <Loading></Loading>
      <p>...loading</p>
    </>
  ) : (
    <>
      <h2 className="comments-title">Comments</h2>
      <div className="comments-box">
        <ul>
          {comments.map((comment) => {
            return (
              <div className="each-comment">
                <li className="Comment-list" key={comment.comment_id}>
                  <h4>Made By{comment.author}</h4>
                  <p>{comment.body}</p>
                  <p>This has {comment.votes} likes</p>
                  <p>{realTime(comment.created_at)}</p>
                  <p className="lineBreaker"></p>
                </li>
                <DeleteComment comment={comment} />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
