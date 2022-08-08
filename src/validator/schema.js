import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required().min(8),
});

export const schemaRegister = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  passwordConfirm: yup.string().required().min(8),
  bio: yup.string().required().max(50),
  contact: yup.string().required(),
  module: yup.string().required(),
});
