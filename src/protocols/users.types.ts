type UsersEntity = {
  id: number;
  userId: number;
  movieId: number;
  seen?: string;
};

type UsersController = Omit<UsersEntity, "id">;

type UsersRepository = {
  id: number;
  movie: string;
  category: string;
  stream: string;
  userId: number;
  seen: boolean;
};

export { UsersEntity, UsersController, UsersRepository };
