import express from "express";
import MovieController from "./movie.controller.js";
import ReviewsController from "./reviews.controller.js";

const router = express.Router(); // get access to express router

router.route("/").get(MovieController.apiGetMovies);

router
  .route("/review")
  .post(ReviewsController.apiPostReviews)
  .put(ReviewsController.apiUpdateReviews)
  .delete(ReviewsController.apiDeleteReviews);

export default router;
