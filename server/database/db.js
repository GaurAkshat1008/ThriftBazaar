import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  try {
    const url = process.env.MONGODB_URL;
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting to databse ", error);
  }
};

export default Connection;