import { STATUS_CODE } from "../enums/status.code.js";
import {
  getMoviesByUser,
  verifyMovieStatus,
  setMoviesToUnwatched,
  setMoviesToWatched,
} from "../repositories/users.repository.js";

async function listMoviesByUser(req, res) {
  const { userId } = req.params;
  try {
    const result = await getMoviesByUser(userId);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function updateMovies(req, res) {
  const { userId } = req.params;
  const { movieId } = req.body;
  try {
    const result = await verifyMovieStatus({ userId, movieId });
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    if (result.rows[0].seen === false) {
      await setMoviesToWatched({ userId, movieId });
      return res.status(STATUS_CODE.OK).send(result.rows);
    } else {
      await setMoviesToUnwatched({ userId, movieId });
      return res.status(STATUS_CODE.OK).send(result.rows);
    }
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { listMoviesByUser, updateMovies };
