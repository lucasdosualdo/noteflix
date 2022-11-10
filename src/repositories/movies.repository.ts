import { connection } from "../connection/database.js";

async function getMovies() {
  return connection.query(`SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
    JOIN categories ON movies."categoryId" = categories.id
    JOIN streams ON movies."streamId" = streams.id;`);
}

async function getSelectedMovie(movieId) {
  return connection.query(
    `SELECT movies.id, movies.movie, categories.category, streams.stream FROM movies
  JOIN categories ON movies."categoryId" = categories.id
  JOIN streams ON movies."streamId" = streams.id
  WHERE movies.id = $1;
  `,
    [movieId]
  );
}

export { getMovies, getSelectedMovie };
