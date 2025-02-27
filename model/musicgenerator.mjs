// model/Music.mjs
import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  emotion: {
    type: String,
    required: true,
    unique: true, // Ensure that we don't have duplicate emotions
  },
  songs: {
    type: [String],
    required: true,
  },
});

const Music = mongoose.model("Music", musicSchema);

export default Music;
