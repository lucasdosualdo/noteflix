import { connection } from "../connection/database.js";
import { QueryResult } from "pg";
import {
  UsersEntity,
  UsersController,
  UsersRepository,
} from "../protocols/users.types.js";

async function getMoviesByUser(
  userId: number
): Promise<QueryResult<UsersRepository>> {
  return connection.query(
    `
    SELECT movies.id, movies.movie, categories.category, streams.stream, "moviesUsers"."userId", "moviesUsers".seen FROM movies
    JOIN categories ON movies."categoryId" = categories.id
    JOIN streams ON movies."streamId" = streams.id
    JOIN "moviesUsers" ON movies.id = "moviesUsers"."movieId"
    WHERE "moviesUsers"."userId" = $1;
    `,
    [userId]
  );
}

async function verifyMovieStatus({
  userId,
  movieId,
}: UsersController): Promise<QueryResult<UsersRepository>> {
  return connection.query(
    `
    SELECT movies.id, movies.movie, categories.category, streams.stream, "moviesUsers"."userId", "moviesUsers".seen FROM movies
    JOIN categories ON movies."categoryId" = categories.id
    JOIN streams ON movies."streamId" = streams.id
    JOIN "moviesUsers" ON movies.id = "moviesUsers"."movieId"
    WHERE "moviesUsers"."userId" = $1 AND "moviesUsers"."movieId" = $2;
    `,
    [userId, movieId]
  );
}

async function setMoviesToUnwatched({
  userId,
  movieId,
}: UsersController): Promise<QueryResult<UsersEntity>> {
  return connection.query(
    `UPDATE "moviesUsers" SET seen = false WHERE "moviesUsers"."userId" = $1 AND "moviesUsers"."movieId" = $2;`,
    [userId, movieId]
  );
}

async function setMoviesToWatched({
  userId,
  movieId,
}: UsersController): Promise<QueryResult<UsersEntity>> {
  return connection.query(
    `UPDATE "moviesUsers" SET seen = true WHERE "moviesUsers"."userId" = $1 AND "moviesUsers"."movieId" = $2;`,
    [userId, movieId]
  );
}

async function deleteMovie({
  userId,
  movieId,
}: UsersController): Promise<QueryResult<UsersEntity>> {
  return connection.query(
    `DELETE FROM "moviesUsers" WHERE "userId" = $1 AND "movieId" = $2;`,
    [userId, movieId]
  );
}

export {
  getMoviesByUser,
  setMoviesToUnwatched,
  verifyMovieStatus,
  setMoviesToWatched,
  deleteMovie,
};
