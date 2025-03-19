import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/user_route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const db = async () => {
  try {
    mongoose.connect(process.env.mongo_url);
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect DB", error);
  }
};

db();

app.use('/api/user',authRouter)

app.listen(3000, () => {
  return console.log("server is running");
});
