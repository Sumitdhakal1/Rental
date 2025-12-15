import express from "express";
import connectDB from "./config/database.js";

const SERVER = express();
const PORT = process.env.PORT;

connectDB();

SERVER.use(express.json());

SERVER.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
