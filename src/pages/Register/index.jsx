import Logo from "../../components/img/Logo.png";
import {
  ContainerImg,
  StyleLink as Link,
  BackgroundRegister as Background,
} from "./styles.register";
import ContainerGeral from "../../components/Container/containerGeral";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/index";

const Register = ({ schema }) => {
  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        <ContainerGeral height="auto">
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
            {errors.password?.message ===
            "Necessário ter ao menos: uma letra maiúscula e minúscula, um número e um caracter especial" ? (
              <p className="MessageDefault">{errors.password?.message}</p>
            ) : (
              errors.password?.message
            )}
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
            {errors.contact?.message ===
            "Insira um número com DDD sem parentes e 9 dígitos sem traço" ? (
              <p className="MessageDefault">{errors.contact?.message}</p>
            ) : (
              errors.contact?.message
            )}
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
