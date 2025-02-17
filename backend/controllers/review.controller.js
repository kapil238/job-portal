import Review from "../models/review.model.js";

// @desc    Submit a review
// @route   POST /api/reviews
export const submitReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new Review({ name, rating, comment });
    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully", review: newReview });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Error submitting review" });
  }
};

// @desc    Get all reviews
// @route   GET /api/reviews
export const getAllReviews = async (req, res) => {
  try {
    const { page = 1, limit = 4 } = req.query; // Default to last 4 reviews
    const skip = Math.max(0, (page - 1) * limit);

    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Error fetching reviews" });
  }
};

