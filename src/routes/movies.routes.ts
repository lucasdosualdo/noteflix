import express from "express";
import { postMovies, listMovies, selectMovie } from "../controllers/movies.controller.js";

const router = express.Router();

router.post("/movies", postMovies);
router.get('/movies', listMovies);
router.get('/movies/:movieId', selectMovie)

export default router;
