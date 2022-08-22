import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(<p className="MessageError">Email é obrigatório</p>),
  password: yup
    .string()
    .required(<p className="MessageError">Senha é obrigatória</p>),
});

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required(<p className="MessageError">Nome é obrigatório</p>),
  email: yup
    .string()
    .email(<p className="MessageError">Email inválido</p>)
    .required(<p className="MessageError">Email é obrigatório</p>),
  password: yup
    .string()
    .required(<p className="MessageError">Senha é obrigatória</p>)
    .min(8, <p className="MessageError">No mínimo 8 caracteres</p>)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Necessário ter ao menos: uma letra maiúscula e minúscula, um número e um caracter especial"
    ),
  passwordConfirm: yup
    .string()
    .required(<p className="MessageError">Necessário confirmar senha</p>)
    .oneOf(
      [yup.ref("password")],
      <p className="MessageError">Confirmação de senha deve ser igual</p>
    ),
  bio: yup
    .string()
    .required(<p className="MessageError">Bio é obrigatória</p>)
    .max(50, <p className="MessageDefault">No máximo 50 caracteres</p>),
  contact: yup
    .string()
    .required(<p className="MessageError">Contato é obrigatório</p>)
    .min(11, <p className="MessageError">Insira um número válido</p>)
    .matches(
      /[1-9]{2}9[1-9]\d{4}/,
      "Insira um número com DDD sem parentes e 9 dígitos sem traço"
    ),
  course_module: yup
    .string()
    .required(<p className="MessageError">Módulo é obrigatório</p>)
    .min(5, <p className="MessageError">Escolha um módulo</p>),
});

export const schemaRegisterTech = yup.object().shape({
  title: yup
    .string()
    .required(<p className="MessageError">Tecnologia é obrigatória</p>),
  status: yup
    .string()
    .required(<p className="MessageError">Status é obrigatório</p>),
});

export const schemaEditTech = yup.object().shape({
  status: yup
    .string()
    .required(<p className="MessageError">Status é obrigatório</p>),
});
