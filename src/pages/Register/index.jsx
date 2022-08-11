import Logo from "../../components/img/Logo.png";
import {
  ContainerImg,
  StyleLink as Link,
  BackgroundRegister as Background,
} from "./styles.register";
import ContainerGeral from "../../components/Container/containerGeral";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../service/api";

const Register = ({ schema }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitRegister = (data) => {
    api
      .post("/users", { ...data })
      .then((res) => {
        toast.success(`Conta ${res.data.name} criada com sucesso!`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      })
      .catch(() => {
        toast.error("Ops! algo deu errado, tente novamente!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
      });
    navigate("/login");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Background>
        <ContainerImg>
          <img src={Logo} alt="" />
          <Link to="/login">Voltar</Link>
        </ContainerImg>
        <ContainerGeral>
          <div className="ContainerTitle">
            <p className="TitleRegister">Crie sua conta</p>
            <p className="SubTitleRegister">Rápido e grátis, vamos nessa</p>
          </div>
          <form onSubmit={handleSubmit(submitRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome*"
              {...register("name")}
            />
            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite aqui seu email*"
              {...register("email")}
            />
            {errors.email?.message}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha*"
              {...register("password")}
            />
            {errors.password?.message}
            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="Digite novamente sua senha*"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Fale sobre você*"
              {...register("bio")}
            />
            {errors.bio?.message}
            <label htmlFor="contact">Contato</label>
            <input
              type="tel"
              id="contact"
              placeholder="(00) 00000-0000*"
              {...register("contact")}
            />
            {errors.contact?.message}
            <label htmlFor="module">Módulo</label>
            <select id="module" {...register("course_module")}>
              <option value="">Selecione um módulo*</option>
              <option value="Primeiro módulo (Front-End Básico)">
                Primeiro módulo
              </option>
              <option value="Segundo módulo (Front-End Intermediário)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Front-End Avançado)">
                Terceiro módulo
              </option>
              <option value="Quarto módulo (Back-End básico)">
                Quarto módulo
              </option>
              <option value="Quinto módulo (Back-End Intermediário)">
                Quinto módulo
              </option>
              <option value="Sexto módulo (Back-End Avançado)">
                Sexto módulo
              </option>
            </select>
            {errors.course_module?.message}
            <input type="submit" value="Cadastrar" />
          </form>
        </ContainerGeral>
      </Background>
    </motion.div>
  );
};

export default Register;
