import ContainerGeral from "../../components/Container/containerGeral.jsx";
import { LinkStyle as Link, ContainerImg } from "./styles.login.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../components/img/Logo.png";

const Login = ({ schema }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>teste</h1>
      <ContainerImg className="Container-img">
        <img src={Logo} alt="Logo" />
      </ContainerImg>
      <ContainerGeral>
        <form onSubmit={handleSubmit(submitForm)}>
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
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              {...register("senha")}
            />
            <input type="submit" value="Entrar" />
          </div>
          <div className="Container-Resgister">
            <p>Ainda não possui cadastro?</p>
            <Link>Cadastre-se</Link>
          </div>
        </form>
      </ContainerGeral>
    </>
  );
};

export default Login;
