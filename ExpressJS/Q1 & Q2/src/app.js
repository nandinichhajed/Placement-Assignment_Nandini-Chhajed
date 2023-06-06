import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/index.route.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())


app.use("/api/v1", routes);

app.get("/", (req,res)=>{
    res.send("Hey there thanks for using this api. \n Please visit /api/v1/getPosts to get all the posts and api/v1/posts to post randomly generated 20 posts");
});

app.all("*", (req,res)=>{
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
})


export default app;