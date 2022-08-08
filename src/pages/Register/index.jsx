import { ContainerImg } from "./styles.register";
import Logo from "../../components/img/Logo.png";
import ContainerGeral from "../../components/Container/containerGeral";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = ({ schema }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const submitRegister = (data) => {
    console.log(data);
  };
  return (
    <>
      <ContainerImg>
        <img src={Logo} alt="" />
        <button>Voltar</button>
      </ContainerImg>
      <ContainerGeral>
        <div>
          <p>Crie sua conta</p>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <form onSubmit={handleSubmit(submitRegister)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome*"
            {...register("name")}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email*"
            {...register("email")}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha*"
            {...register("password")}
          />
          <label htmlFor="passwordConfirm">Confirmar senha</label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Digite novamente sua nome*"
            {...register("passwordConfirm")}
          />
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <label htmlFor="contact">Contato</label>
          <input
            type="tel"
            id="contact"
            placeholder="Opção de contato*"
            {...register("contact")}
          />
          <label htmlFor="module">Selecionar módulo</label>
          <select id="module" {...register("module")}>
            <option>Selecione um módulo*</option>
            <option value="Primeiro módulo">Primeiro módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo">Terceiro módulo</option>
            <option value="Quarto módulo">Quarto módulo</option>
            <option value="Quinto módulo">Quinto módulo</option>
            <option value="Sexto módulo">Sexto módulo</option>
            <option value="Sétimo módulo">Sétimo módulo</option>
            <option value="Oitavo módulo">Oitavo módulo</option>
          </select>
          <input type="submit" value="Cadastrar" />
        </form>
      </ContainerGeral>
    </>
  );
};

export default Register;
