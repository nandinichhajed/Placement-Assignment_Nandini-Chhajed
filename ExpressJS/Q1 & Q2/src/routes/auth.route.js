import { Router } from "express";
import { SignUp, LogIn, LogOut } from "../controllers/auth.controller.js"


const router = Router();


router.post("/signUp", SignUp);
router.post("/login", LogIn);
router.post("/logout", LogOut);



export default router;