import { connection } from "../connection/database.js";
import { QueryResult } from "pg";
import {
  MovieController,
  MovieEntity,
  UserMovies,
  GeneralMovies,
} from "../protocols/movies.types.js";

async function verifyAddedMovies({
  userId,
  movieId,
}: MovieController): Promise<QueryResult<UserMovies>> {
  return connection.query(
    `
  SELECT * FROM "moviesUsers" WHERE "userId" = $1 AND "movieId" = $2;
    `,
    [userId, movieId]
  );
}

async function insertMovie({
  userId,
  movieId,
}: MovieController): Promise<QueryResult<UserMovies>> {
  return connection.query(
    `INSERT INTO "moviesUsers" ("userId", "movieId") VALUES ($1, $2);`,
    [userId, movieId]
  );
}

async function getMovies(): Promise<QueryResult<GeneralMovies>> {
  return connection.query(`SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
    JOIN categories ON movies."categoryId" = categories.id
    JOIN streams ON movies."streamId" = streams.id;`);
}

async function getMoviesByGender(category: string): Promise<QueryResult<GeneralMovies>> {
  return connection.query(
    `SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
  JOIN categories ON movies."categoryId" = categories.id
  JOIN streams ON movies."streamId" = streams.id
  WHERE categories.category = $1;`,
    [category]
  );
}

async function getMoviesByStream(stream: string): Promise<QueryResult<GeneralMovies>> {
  return connection.query(
    `SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
  JOIN categories ON movies."categoryId" = categories.id
  JOIN streams ON movies."streamId" = streams.id
  WHERE streams.stream = $1;`,
    [stream]
  );
}

async function getSelectedMovie(movieId: number): Promise<QueryResult<GeneralMovies>> {
  return connection.query(
    `SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
  JOIN categories ON movies."categoryId" = categories.id
  JOIN streams ON movies."streamId" = streams.id
  WHERE movies.id = $1;
  `,
    [movieId]
  );
}

async function getSearchedMovie(searchMovie: string): Promise<QueryResult<GeneralMovies>> {
  return connection.query(
    `
    SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
    JOIN categories ON movies."categoryId" = categories.id
    JOIN streams ON movies."streamId" = streams.id
    WHERE movies.movie ILIKE $1;
    `,
    [`${searchMovie}%`]
  );
}

export {
  getMovies,
  getSelectedMovie,
  getSearchedMovie,
  verifyAddedMovies,
  insertMovie,
  getMoviesByGender,
  getMoviesByStream,
};
