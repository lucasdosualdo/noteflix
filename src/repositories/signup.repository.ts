import { connection } from "../connection/database.js";
import { QueryResult } from "pg";
import {
  SignUpRepository,
  SignUpController,
} from "../protocols/signup.types.js";

async function verifyEmail(
  email: string
): Promise<QueryResult<SignUpRepository>> {
  return connection.query(`SELECT email FROM users WHERE email = $1;`, [email]);
}

async function insertRegistry({
  name,
  email,
  password,
}: SignUpController): Promise<QueryResult<SignUpRepository>> {
  return connection.query(
    `INSERT INTO users ("userName", email, password) VALUES ($1, $2, $3);`,
    [name, email, password]
  );
}

export { verifyEmail, insertRegistry };
