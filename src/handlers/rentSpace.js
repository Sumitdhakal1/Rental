import { Router } from "express";
import RentSpace from "../models/rentSpace";

RENTSPACE_ROUTER = Router();

RENTSPACE_ROUTER.get("/", async (req, res, next) => {
  try {
    const rentSpce = await RentSpace();
  } catch (error) {
    next(error);
  }
});
export default RENTSPACE_ROUTER;
