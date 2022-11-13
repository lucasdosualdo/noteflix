import express from "express";
import {
  addMovie,
  addMovieByParams,
  listMovies,
  selectMovie,
  searchMovie,
  listMoviesByGender,
  listMoviesByStream,
} from "../controllers/movies.controller.js";

const router = express.Router();

router.post("/movies", addMovie);
router.post("/movies/:movieId", addMovieByParams);
router.get("/movies", listMovies);
router.get("/movies/categories/:category", listMoviesByGender);
router.get("/movies/streams/:stream", listMoviesByStream);
router.get("/movie/:movieId", selectMovie);
router.get("/searchmovies/:searchMovie", searchMovie);

export default router;
