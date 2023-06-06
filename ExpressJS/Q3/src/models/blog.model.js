import mongoose from "mongoose";


const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide the title of your blog"]
    },
    content: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})


export default mongoose.model("Blog", blogSchema);