import { STATUS_CODE } from "../enums/status.code.js";
import { Request, Response } from "express";
import {
  getMoviesByUser,
  verifyMovieStatus,
  setMoviesToUnwatched,
  setMoviesToWatched,
  deleteMovie,
} from "../repositories/users.repository.js";
import { UsersController } from "../protocols/users.types.js";

async function listMoviesByUser(req: Request, res: Response) {
  const { userId } = req.params as unknown as UsersController;
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

async function updateMovies(req: Request, res: Response) {
  const { userId } = req.params as unknown as UsersController;
  const { movieId } = req.body as UsersController;
  try {
    const result = await verifyMovieStatus({
      userId,
      movieId,
    } as UsersController);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    if (result.rows[0].seen === false) {
      await setMoviesToWatched({ userId, movieId } as UsersController);
      return res.status(STATUS_CODE.OK).send(result.rows);
    } else {
      await setMoviesToUnwatched({ userId, movieId } as UsersController);
      return res.status(STATUS_CODE.OK).send(result.rows);
    }
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function deleteMovieFromUser(req: Request, res: Response) {
  const { userId } = req.params as unknown as UsersController;
  const { movieId } = req.body as UsersController;
  try {
    const result = await verifyMovieStatus({
      userId,
      movieId,
    } as UsersController);
    if (result.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    await deleteMovie({ userId, movieId } as UsersController);
    res.sendStatus(STATUS_CODE.OK);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { listMoviesByUser, updateMovies, deleteMovieFromUser };
