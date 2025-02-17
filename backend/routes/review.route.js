import express from "express";
import { submitReview, getAllReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", submitReview); // ✅ Fix: Ensure URL matches frontend
router.get("/", getAllReviews);

export default router;
