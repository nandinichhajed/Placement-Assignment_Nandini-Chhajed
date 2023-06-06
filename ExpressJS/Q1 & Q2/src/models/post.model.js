import mongoose  from "mongoose"

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide the title of post"]
    },
    body: {
        type: String,
        required: [true, "Please provide the content in your post"]
    }
})

export default mongoose.model("Post", PostSchema);