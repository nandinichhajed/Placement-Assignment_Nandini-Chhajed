import {Router} from "express"

import postRoute from "./post.route.js";
import authRoute from "./auth.route.js";
import blogRoute from "./blog.route.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/", postRoute);
router.use("/", blogRoute);

export default router;