type SignUpRepository = {
  id: number;
  userName?: string;
  email: string;
  password?: string;
};

type SignUpController = {
  name: string;
  email: string;
  password: string;
};

export { SignUpRepository, SignUpController };
