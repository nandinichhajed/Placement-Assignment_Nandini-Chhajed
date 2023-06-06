import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import asyncHandler from "../services/asyncHandler.js";
import customError from "../utils/customError.js";


export const addBlog = asyncHandler(async (req,res)=>{
    const {title, content, id:userId} = req.body;

    const user = await User.findById(userId);

    if(!user){
        throw new customError("User not found", 404);
    }

    if(!title || !content){
        throw new customError("Please provide all the details", 400);
    }

    const blog = await Blog.create({
        title,
        content, 
        user: userId
    });

    if(!blog){
        throw new customError("Something went wrong", 400);
    }

    res.status(200).json({
        success: true,
        message: "Blog uploaded successfully",
        blog
    })
});

export const deleteBlog = asyncHandler(async(req,res)=>{
    const {id: blogId} = req.body;

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if(!deletedBlog){
        throw new customError("Some error happened", 400);
    }

    res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
        deletedBlog
    })

});


export const updateBlog = asyncHandler(async (req,res)=>{
    const {id: blogId, title, content} = req.body;

    if(!blogId){
        throw new customError("No blog Found", 404);
    }

    if(!title || !content){
        throw new customError("Please provide all the details", 400);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, {title, content})

    if(!updatedBlog){
        throw new customError("Blog is not updated", 400);
    }

    res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        updatedBlog
    })
});


export const getBlogs = asyncHandler(async( req, res)=>{
    const {id: userId} = req.body;

    const blogs = await Blog.find({user: userId});

    if(!blogs){
        throw new customError("No blog found", 404);
    }

    res.status(200).json({
        blogs
    })
})