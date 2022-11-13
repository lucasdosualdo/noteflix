import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import moviesrouter from "./routes/movies.routes.js";
import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json()).use(cors());

app.get("/status", (req: Request, res: Response) => {
  res.send("ok");
});

app.use(moviesrouter);
app.use(usersRouter);
app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
