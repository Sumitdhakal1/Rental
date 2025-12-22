import express from "express";
import connectDB from "./config/database.js";
import HANDLERS from "./handlers/index.js";
import { authMiddleware } from "./middleware/auth.js";

const SERVER = express();
const PORT = process.env.PORT;

connectDB();

SERVER.use(express.json());
SERVER.use(authMiddleware);
SERVER.use("/", HANDLERS);
SERVER.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
