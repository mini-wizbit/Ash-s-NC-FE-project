import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentsById } from "../../utils/api";


export const Comments = () =>{
    const { review_id }= useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        setLoading(true);
        commentsById(review_id)
        .then((apiCommentsById) => {
            setLoading(false);
            setComments(apiCommentsById)
        })
    },[review_id])

    const realTime = (comments) =>{
        const timeStr = comments.slice(0,10)
        return timeStr
    }
    
    
    return loading? (<p>...loading</p>): (
        <div className="comments-box">
            <h2>Comments</h2>
            <ul>
                {comments.map((comment)=>{
                    return(
                        <>
                        <li key={comment.comment_id}>
                            <h4>Made By{comment.author}</h4>
                            <p>{comment.body}</p>
                            <p>This has {comment.votes} likes</p>
                            <p>{realTime(comment.created_at)}</p>
                            <p className="lineBreaker"></p>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}