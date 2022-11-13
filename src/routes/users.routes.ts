import express from "express";
import {
  listMoviesByUser,
  updateMovies,
  deleteMovieFromUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users/:userId", listMoviesByUser);
router.put("/users/:userId", updateMovies);
router.delete("/users/:userId", deleteMovieFromUser);

export default router;
