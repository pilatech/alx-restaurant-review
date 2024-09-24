import mongoose from "mongoose";

const Restaurant = mongoose.Schema(
  {
    title: String,
    location: String,
    image: String,
    description: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }]
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Restaurant || mongoose.model("Restaurant", Restaurant);