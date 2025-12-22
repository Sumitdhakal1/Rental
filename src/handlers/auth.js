import { Router } from "express";
import { register, login } from "../services/auth.js";

const AUTH_ROUTER = Router();

AUTH_ROUTER.post("/register", async (req, res, next) => {
  try {
    const result = await register(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

AUTH_ROUTER.post("/login", async (req, res, next) => {
  try {
    const result = await login(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(erroer);
  }
});

export default AUTH_ROUTER;
