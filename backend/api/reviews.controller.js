import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiPostReviews(req, res, next) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.review;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };
      const date = new Date();
      const ReviewResponse = await ReviewsDAO.addReview(
        movieId,
        userInfo,
        review,
        date
      );
      res.json({ status: "sucess" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async apiUpdateReviews(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const review = req.body.review;

      const date = new Date();

      const ReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        review,
        date
      );

      var { error } = ReviewResponse;
      if (error) {
        res.status.json({ error });
      }
      if (ReviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review. User may not be origin poster"
        );
      }
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReviews(req, res, next) {
    try {
      const reviewId = req.body.review_id;
      const userId = req.body.user_id;
      const ReviewResponse = await ReviewsDAO.deleteReview(reviewId, userId);
      res.json({ status: "sucess" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
