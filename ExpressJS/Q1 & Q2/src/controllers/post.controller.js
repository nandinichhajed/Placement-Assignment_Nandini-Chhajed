import mongoose from "mongoose";
import asyncHandler from "../services/asyncHandler.js";
import customError from "../utils/customError.js";
import Post from "../models/post.model.js";
import crypto from "crypto";

export const send20Post = asyncHandler(async (req, res)=>{

    let posts = [];

    for(let i=0; i<20; i++){
        let title = crypto.randomBytes(10).toString();
        let body = crypto.randomBytes(50).toString();

        posts.push({title: title, body: body});
    }

    const post = await Post.create(posts);

    if(!post){
        throw new customError("An error occured during posting ", 400);
    }

    res.status(200).json({
        success: true,
        message: "All 20 posts are inserted into Database"
    })
})

export const getAllPosts = asyncHandler(async (req,res)=>{
    const post = await Post.find();

    if(!post){
        throw new customError("No Post Found", 400);
    }

    res.status(200).json({
        success: true,
        post
    })
})