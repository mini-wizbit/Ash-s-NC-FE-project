import React, { useState } from "react";
import { deleteCommentById } from "../../utils/api";

export const DeleteComment = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (e) => {
    e.currentTarget.disabled = true;
    setIsDeleted(false);
    deleteCommentById(comment.comment_id).then(setIsDeleted(true));
  };

  return (
    <div>
      <h4>Delete comment</h4>
      {isDeleted ? <h4>Deleted, please refresh your browser...</h4> : null}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
