import express from "express";
import { validateSignUp } from "../controllers/signup.controller.js";

const router = express.Router();

router.post("/signup", validateSignUp);

export default router;
