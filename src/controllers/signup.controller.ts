import { connection } from "../connection/database.js";
import {Request, Response} from 'express';
//import bcrypt from "bcrypt";
// import { v4 as uuid, validate } from "uuid";
// import { signUpSchema } from "../schemas/authSchema.js";
import { STATUS_CODE } from "../enums/status.code.js";

// type Validate = {
//   error: boolean;
// };

async function validateSignUp(req: Request, res: Response) {
  const { name, email, password } = req.body;
  // const validation = signUpSchema.validate(req.body, { abortEarly: false });

  // if (validate.error as Validate) {
  //   const err = validation.error.details.map((err) => err.message);
  //   res.status(422).send(err);
  //   return;
  // }
  if (!name || !email || !password)
    return res.sendStatus(STATUS_CODE.BAD_REQUEST);

  try {
    const existingEmail = await connection.query(
      `SELECT * FROM users WHERE email = $1;`,
      [email]
    );
    if (existingEmail.rowCount !== 0) {
      res.status(STATUS_CODE.CONFLICT).send("Email ou senha inválidos!");
      return;
    }
    //  const passwordList = await connection.query(`SELECT password FROM users`);

    //  const existingPassword = passwordList.rows.filter((value) =>
    //    bcrypt.compareSync(password, value.password)
    //  );

    //  if (existingPassword.length !== 0) {
    //    return res.status(STATUS_CODE.CONFLICT).send("Email ou senha inválidos!");
    //  }

    //  const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query(
      `INSERT INTO users ("userName", email, password) VALUES ($1, $2, $3);`,
      [name, email, password /*passwordHash*/]
    );

    res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { validateSignUp };
