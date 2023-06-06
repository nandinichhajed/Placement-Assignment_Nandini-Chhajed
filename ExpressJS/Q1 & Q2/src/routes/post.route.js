import { Router } from "express";

import { send20Post, getAllPosts } from "../controllers/post.controller.js";

import { isLoggedIn } from "../middlewares/auth.middleware.js"

const router = Router();


router.post("/posts", isLoggedIn, send20Post);

router.get("/getPosts", getAllPosts);


export default router;