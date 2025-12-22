import { Router } from "express";
import { getAllRentSpace, createRentSpace } from "../services/rentSpace.js";
import { authMiddleware, isOwner } from "../middleware/auth.js";

const RENTSPACE_ROUTER = Router();

RENTSPACE_ROUTER.get("/home", async (req, res, next) => {
  try {
    const rentSpce = await getAllRentSpace(req.query);
    res.status(200).json(rentSpce);
  } catch (error) {
    next(error);
  }
});

RENTSPACE_ROUTER.post(
  "/create",
  authMiddleware,
  isOwner,
  async (req, res, next) => {
    try {
      const rentSpace = await createRentSpace(req.body, req.user);
      res.status(200).json(rentSpace);
    } catch (error) {
      next(error);
    }
  }
);

export default RENTSPACE_ROUTER;
