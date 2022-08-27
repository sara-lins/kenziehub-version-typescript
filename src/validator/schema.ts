import * as yup from "yup";
import { IDataSubmitFormLogin } from "../contexts/UserContext";
import { SchemaOf } from "yup";

export const schemaLogin: SchemaOf<IDataSubmitFormLogin> = yup.object().shape({
  email: yup
    .string()
    .email("Necessário email válido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "No mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Necessário ter ao menos: uma letra maiúscula e minúscula, um número e um caracter especial"
    ),
  passwordConfirm: yup
    .string()
    .required("Necessário confirmar senh")
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual"),
  bio: yup
    .string()
    .required("Bio é obrigatória")
    .max(50, "No máximo 50 caracteres"),
  contact: yup
    .string()
    .required("Contato é obrigatório")
    .min(11, "Insira um número válido")
    .matches(
      /[1-9]{2}9[1-9]\d{4}/,
      "Insira um número com DDD sem parentes e 9 dígitos sem traço"
    ),
  course_module: yup
    .string()
    .required("Módulo é obrigatório")
    .min(5, "Escolha um módulo"),
});

export const schemaRegisterTech = yup.object().shape({
  title: yup.string().required("Tecnologia é obrigatória"),
  status: yup.string().required("Status é obrigatório"),
});

export const schemaEditTech = yup.object().shape({
  status: yup.string().required("Status é obrigatório"),
});
