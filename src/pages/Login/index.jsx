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
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import api from "../../service/api";

const Login = ({ schema }) => {
  const [myBackground, setMyBackground] = useState("#212529");
  const [openEye, setOpenEye] = useState(true);
  const [typeInput, setTypeInput] = useState("password");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    api
      .post("/sessions", { ...data })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);

        toast.success("Logado com sucesso!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        navigate(`/dashboard/${res.data.user.id}`);
      })
      .catch((err) => {
        err.response.data.message ===
          "Incorrect email / password combination" &&
          toast.error("Email ou senha inválidos", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 1,
          });
      })
      .finally();
  };

  const changeStates = (e) => {
    e.preventDefault();
    setOpenEye(!openEye);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };
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
        <ContainerLogin>
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
