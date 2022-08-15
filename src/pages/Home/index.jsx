import Logo from "../../components/img/Logo.png";
import { FaCodeBranch } from "react-icons/fa";

import { NavBar, Header, Main } from "./styles.home";
import { styleBackground as Background } from "./styles.home.js";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardTech from "../../components/CardTech/index";

const Home = () => {
  const { module, loading, editName, logout, user } = useContext(UserContext);

  //useEffect

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <Background>
          <div>Carregando...</div>
        </Background>
      ) : (
        <Background>
          <NavBar>
            <img src={Logo} alt="Logo" />
            <button onClick={() => logout()}>Sair</button>
          </NavBar>
          <Header>
            <p>Olá, {editName()}!</p>
            <p>{module}</p>
          </Header>
          <Main>
            {!user.length ? (
              <>
                <div>
                  <p className="FhraseMain">
                    Que pena! Estamos em desenvolvimento :(
                  </p>
                  <p>
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades.
                  </p>
                </div>
                <div>
                  <FaCodeBranch />
                </div>
              </>
            ) : (
              <ul>
                {user.user.techs.map(
                  (tech) => tech === "techs" && <CardTech tech={tech} />
                )}
              </ul>
            )}
          </Main>
        </Background>
      )}
    </motion.div>
  );
};

export default Home;
