import express from "express";
import { postMovies, listMovies } from "../controllers/movies.controller.js";

const router = express.Router();

router.post("/movies", postMovies);
router.get('/movies', listMovies)

export default router;
