import { Router } from "express";
import { CreateUser } from "../services/user.js";

const USER_ROUTER = Router();

USER_ROUTER.post("/", async (req, res, next) => {
  try {
    const user = await CreateUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default USER_ROUTER;
