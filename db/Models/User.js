import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String
  },
  {
    timestamps: true,
  }
);
// test-user 66f1167cb02ced888a28f780
export default mongoose.models.User || mongoose.model("User", User);