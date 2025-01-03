import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    audios: [
      {
        type: Schema.Types.ObjectId,
        ref: "Audio", // Reference to the Audio model
      },
    ],
    owner: {
      type:String,
      required:true, // Reference to the User model
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
