import { connection } from "../connection/database.js";
import { STATUS_CODE } from "../enums/status.code.js";
import { getMovies } from "../repositories/movies.repository.js";

async function postMovies(req, res) {
  const { movie, streamId, categoryId } = req.body;
  try {
    const insertMovie = await connection.query(
      `INSERT INTO movies (movie, "streamId", "categoryId") VALUES ($1, $2, $3);`,
      [movie, streamId, categoryId]
    );
    res.status(STATUS_CODE.CREATED).send("deu bommm");
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function listMovies(req, res) {
  try {
    const result = await getMovies();
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { postMovies, listMovies };
