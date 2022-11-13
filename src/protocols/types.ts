type MovieEntity = {
  id: number;
  userId: number;
  movieId: number;
  category?: string;
  stream?: string;
  searchMovie?: string;
};

type MovieController = Omit<MovieEntity, "id">;

type UserMovies = {
  id: number;
  movieId: number;
  userId: number;
  seen: boolean;
  createdAt: Date;
};

type GeneralMovies = {
  id: number;
  movie: string;
  category: string;
  stream: string;
};

export { MovieEntity, MovieController, UserMovies, GeneralMovies };
