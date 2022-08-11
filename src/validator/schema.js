import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(<p className="MessageError">Email é obrigatório</p>),
  password: yup
    .string()
    .required(<p className="MessageError">Senha é obrigatória</p>)
    .min(6, <p className="MessageDefault">No mínimo 6 caracteres</p>),
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
    .min(6, <p className="MessageDefault">No mínimo 6 caracteres</p>),
  passwordConfirm: yup
    .string()
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
    .min(11, <p className="MessageError">Insira um número válido</p>)
    .required(<p className="MessageError">Contato é obrigatório</p>),
  course_module: yup
    .string()
    .min(5, <p className="MessageError">Escolha um módulo</p>)
    .required(<p className="MessageError">Módulo é obrigatório</p>),
});
