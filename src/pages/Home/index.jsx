import { NavBar, Header, Main } from "./styles.home";
import Logo from "../../components/img/Logo.png";
const Home = ({ name, module }) => {
  return (
    <>
      <NavBar>
        <img src={Logo} alt="Logo" />
        <button>Sair</button>
      </NavBar>
      <Header>
        <p>Olá, {name}</p>
        <p>{module}</p>
      </Header>
      <Main>
        <p className="FhraseMain">Que pena! Estamos em desenvolvimento :(</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades.
        </p>
      </Main>
    </>
  );
};

export default Home;
