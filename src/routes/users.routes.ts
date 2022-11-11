import express from "express";
import {
  listMoviesByUser,
  updateMovies,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users/:userId", listMoviesByUser);
router.put("/users/:userId", updateMovies);

export default router;
