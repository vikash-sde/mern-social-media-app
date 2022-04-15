import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tag: [String],
  selectedFile: String,
  likedCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    dafault: new Date(),
  },
});


const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;