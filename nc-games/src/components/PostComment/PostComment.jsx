import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { commentPost } from "../../utils/api";

export const PostComment = () =>{

    const {review_id} = useParams()
    const[theComment, setTheComment]=useState("")
    const[didItPost, setDidItPost]=useState(false)
    const[yourComment, setYourComment]=useState({})


    const submit =(e)=>{
        e.preventDefault();
        setTheComment(e.target[0].value)

        commentPost(review_id, {
        username: 'tickle122',
        body: e.target[0].value
    }).then(({comment})=>{
        setDidItPost(true)
        setYourComment(comment)
    })
    }

    return(
        <div className="post-a-comment">
            { didItPost? (<p>Your comment "{yourComment.body}"</p>): null }
            <p>Put your own comment here!</p>
            <form onSubmit={submit}>
            <input type="text" placeholder="Your comment here" required />
            <button type="submit">{!didItPost ? "Submit" : "Posted!"}</button>
            </form>
        </div>
        
    )
}