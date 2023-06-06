import {mongoose} from "mongoose";
import config from "./src/config/index.config.js"
import app from "./src/app.js";

(async ()=>{
    try{
        await mongoose.connect(config.MONGODB_URL);
        console.log("Database Connected");

        app.listen(config.PORT, ()=>{
            console.log(`Listening on the port ${config.PORT}`);
        })
    }catch(err){
        throw err;
    }
})()