import joi from "joi";

const signUpSchema = joi.object({
  name: joi.string().required().trim(),
  email: joi.string().required().email(),
  password: joi.string().required().trim(),
});

const signInSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().trim(),
});

export { signInSchema, signUpSchema };
