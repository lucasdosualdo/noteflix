import express from "express";
import {
  addMovie,
  listMovies,
  selectMovie,
  searchMovie,
} from "../controllers/movies.controller.js";

const router = express.Router();

router.post("/movies", addMovie);
router.get("/movies", listMovies);
router.get("/movies/:movieId", selectMovie);
router.get("/searchmovies/:searchMovie", searchMovie);

export default router;
