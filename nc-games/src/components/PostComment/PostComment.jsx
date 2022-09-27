import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { commentPost } from "../../utils/api";

export const PostComment = () =>{

    const {review_id} = useParams()
    const[theComment, setTheComment]=useState("")


    const submit =(e)=>{
        e.preventDefault();
        setTheComment(e.target.value)
        console.log(theComment);
    //spacing
    //commentPost(review_id, "XYZ")
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