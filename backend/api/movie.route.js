import express from "express";
import MovieController from "./movie.controller.js";

const router = express.Router(); // get access to express router

router.route("/").get(MovieController.apiGetMovies);

export default router;
