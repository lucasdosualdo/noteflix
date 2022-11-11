import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import moviesrouter from "./routes/movies.routes.js";
import usersRouter from "./routes/users.routes.js";
dotenv.config();
const app = express();
app.use(express.json()).use(cors());

app.get("/status", (req, res) => {
  res.send("ok");
});

app.use(moviesrouter);
app.use(usersRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
