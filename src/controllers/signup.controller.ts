import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/status.code.js";
import {
  verifyEmail,
  insertRegistry,
} from "../repositories/signup.repository.js";
import { SignUpController } from "../protocols/signup.types.js";

async function validateSignUp(req: Request, res: Response) {
  const { name, email, password } = req.body as SignUpController;
  if (!name || !email || !password)
    return res.sendStatus(STATUS_CODE.BAD_REQUEST);

  try {
    const existingEmail = await verifyEmail(email);
    if (existingEmail.rowCount !== 0) {
      res.status(STATUS_CODE.CONFLICT).send("Email ou senha inválidos!");
      return;
    }
    await insertRegistry({
      name,
      email,
      password,
    } as SignUpController);

    res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { validateSignUp };
