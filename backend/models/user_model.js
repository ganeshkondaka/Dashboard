import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const user_model = mongoose.model("User", userschema);
export default user_model;