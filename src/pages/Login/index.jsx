import Logo from "../../components/img/Logo.png";
import {
  LinkStyle as Link,
  ContainerImg,
  ContainerRegister,
} from "./styles.login.js";
import { styleBackground as Background } from "./styles.login";
import { ContainerLogin } from "./styles.login";
import { ContainerInputPass } from "../../components/Container/styles.container";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/index";

const Login = ({ schema }) => {
  const [myBackground, setMyBackground] = useState("#212529");
  const { openEye, typeInput, submitForm, changeStates } =
    useContext(UserContext);

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
        <ContainerImg className="Container-img">
          <img src={Logo} alt="Logo" />
        </ContainerImg>
        <ContainerLogin height={"auto"} className="login">
          <form
            onSubmit={handleSubmit(submitForm)}
            onClick={() =>
              myBackground === "#343B41" && setMyBackground("#212529")
            }
          >
            <div className="Container-inputs">
              <div className="ContainerTitle-login">
                <p>Login</p>
              </div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email?.message}
              <label htmlFor="senha">Senha</label>
              <ContainerInputPass
                background={myBackground}
                onClick={() => setMyBackground("#343B41")}
              >
                <input
                  type={typeInput}
                  id="senha"
                  placeholder="Senha"
                  autoComplete="current-password"
                  {...register("password")}
                />{" "}
                <button onClick={changeStates}>
                  {openEye ? <FaEye /> : <FaEyeSlash />}
                </button>{" "}
              </ContainerInputPass>
              {errors.password?.message}
              <input type="submit" value="Entrar" />
            </div>
            <ContainerRegister>
              <p>Ainda não possui uma conta?</p>
              <Link to="/register">Cadastre-se</Link>
            </ContainerRegister>
          </form>
        </ContainerLogin>
      </Background>
    </motion.div>
  );
};

export default Login;
