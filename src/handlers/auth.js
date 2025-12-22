import { Router } from "express";
import { register } from "../services/auth.js";

const AUTH_ROUTER = Router();

AUTH_ROUTER.post("/register", async (req, res, next) => {
  try {
    const result = await register(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export default AUTH_ROUTER;
