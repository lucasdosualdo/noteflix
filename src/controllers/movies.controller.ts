import { STATUS_CODE } from "../enums/status.code.js";
import {
  getMovies,
  getSelectedMovie,
  getSearchedMovie,
  verifyAddedMovies,
  insertMovie,
} from "../repositories/movies.repository.js";

async function addMovie(req, res) {
  const { userId, movieId } = req.body;
  try {
    const result = await verifyAddedMovies({ userId, movieId });
    if (result.rowCount !== 0) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }
    await insertMovie({ userId, movieId });
    res.sendStatus(STATUS_CODE.OK);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function listMovies(req, res) {
  try {
    const result = await getMovies();
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function selectMovie(req, res) {
  const { movieId } = req.params;
  try {
    const result = await getSelectedMovie(movieId);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows[0]);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function searchMovie(req, res) {
  const { searchMovie } = req.params;
  try {
    const result = await getSearchedMovie(searchMovie);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { addMovie, listMovies, selectMovie, searchMovie };
