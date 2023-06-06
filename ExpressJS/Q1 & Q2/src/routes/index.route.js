import {Router} from "express"

import postRoute from "./post.route.js";
import authRoute from "./auth.route.js"

const router = Router();

router.use("/auth", authRoute);
router.use("/", postRoute);

export default router;