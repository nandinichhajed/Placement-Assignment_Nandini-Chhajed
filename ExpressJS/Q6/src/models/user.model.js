import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import config from "../config/index.config.js";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "Provide the name"],
        maxLength:[50, "Name of user cannot be more than 50 characters"]
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:[true, "Provide the password"],
        minLength: [8, "Password must be at least 8 characters"],
        select: false
    }
},{timestamps:true});

//middleware
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);

    next();
});


// .methods are used to create some extra functionality for a particular schema
userSchema.methods = {
    // Compare Password
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    },

    getJWTtoken: async function(){
        return await JWT.sign({_id: this._id}, config.JWT_SECRET, {
            expiresIn: config.JWT_EXPIRY
        })
    }
}

export default mongoose.model("User", userSchema);