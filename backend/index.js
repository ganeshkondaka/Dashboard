import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(json());
app.use(cors());

const db = async () => {
  try {
    mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect DB", error);
  }
};

db();

app.get("/", () => {
  console.log("simple get request ");
});

app.listen(3000, () => {
  return console.log("server is running");
});
