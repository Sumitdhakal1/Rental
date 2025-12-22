import { CreateUser } from "./user.js";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { compare } from "bcrypt";

export const register = async (userData) => {
  const user = await CreateUser(userData);

  const token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return {
    token,
    user,
  };
};
