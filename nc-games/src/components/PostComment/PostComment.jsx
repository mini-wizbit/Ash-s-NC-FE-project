import React from "react";
import { useParams } from "react-router-dom";

export const PostComment = () =>{

    const {review_id} = useParams()


    const submit =(e)=>{
        e.preventDefault();
    }

    return(
        <div className="post-a-comment">
            <p>post stuff here </p>
            <form onSubmit={submit}>
            <input type="text" placeholder="Your comment here" required />
            <button type="submit">turnary here to confrim clicked!</button>
            </form>
        </div>
        
    )
}