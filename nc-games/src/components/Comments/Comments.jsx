import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export const Comments = () =>{
    const { review_id }= useParams()
    const [comments, setComments] = useState([])

    useEffect(()=>{
        //code
    },[review_id])
}