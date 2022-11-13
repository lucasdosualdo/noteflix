import { STATUS_CODE } from "../enums/status.code.js";
import { Request, Response } from "express";
import { MovieBody } from "../protocols/types.js";
import {
  getMovies,
  getSelectedMovie,
  getSearchedMovie,
  verifyAddedMovies,
  insertMovie,
  getMoviesByGender,
  getMoviesByStream,
} from "../repositories/movies.repository.js";

async function addMovie(req: Request, res: Response) {
  const { userId, movieId } = req.body as MovieBody;
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

async function addMovieByParams(req: Request, res: Response) {
  const { userId } = req.body as MovieBody;
  const { movieId } = req.params as unknown as MovieBody;
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

async function listMovies(req: Request, res: Response) {
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

async function listMoviesByGender(req: Request, res: Response) {
  const { category } = req.params;
  try {
    const result = await getMoviesByGender(category);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function listMoviesByStream(req: Request, res: Response) {
  const { stream } = req.params;
  try {
    const result = await getMoviesByStream(stream);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.status(STATUS_CODE.OK).send(result.rows);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function selectMovie(req: Request, res: Response) {
  const { movieId } = req.params as unknown as MovieBody;
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

async function searchMovie(req: Request, res: Response) {
  const { searchMovie } = req.params as unknown as MovieBody;
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

export {
  addMovie,
  addMovieByParams,
  listMovies,
  selectMovie,
  searchMovie,
  listMoviesByGender,
  listMoviesByStream,
};
