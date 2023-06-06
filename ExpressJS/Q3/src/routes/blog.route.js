import { Router } from "express";

import { addBlog, deleteBlog, updateBlog, getBlogs } from "../controllers/blog.controller.js";


const router = Router();

router.post("/addBlog", addBlog);

router.put("/updateBlog", updateBlog);

router.delete("/deleteBlog", deleteBlog);

router.get("/getAllBlog", getBlogs);

export default router;