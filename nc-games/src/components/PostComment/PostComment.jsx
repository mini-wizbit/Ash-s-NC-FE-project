import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { commentPost } from "../../utils/api";
import "./PostComment.css";
export const PostComment = () => {
  const { review_id } = useParams();
  const [theComment, setTheComment] = useState("");
  const [didItPost, setDidItPost] = useState(false);
  const [yourComment, setYourComment] = useState({});
  const [isError, setIsError] = useState(false);

  const submit = (e) => {
    setIsError(false);
    e.preventDefault();
    setTheComment(e.target[0].value); //<temp busted to show error handling
    if (!didItPost) {
      commentPost(review_id, {
        username: "tickle122",
        body: e.target[0].value,
      }).then(({ comment }) => {
        if (!comment) {
          setIsError(true);
        }
        setDidItPost(true);
        setYourComment(comment);
      });
    }
  };

  return isError ? (
    <p>Oops something went wrong, please try again later...</p>
  ) : (
    <div className="post-a-comment">
      {didItPost ? <p>Your comment "{yourComment.body}"</p> : null}
      <p className="your-comment">Put your own comment here!</p>
      <form className="comment-form" onSubmit={submit}>
        <input
          className="form-text"
          type="text"
          placeholder="Your comment here"
          required
        />
        <button type="submit">{!didItPost ? "Submit" : "Posted!"}</button>
      </form>
    </div>
  );
};
