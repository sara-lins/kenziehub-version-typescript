import { motion } from "framer-motion";
import React, { useContext } from "react";
import Logo from "../../components/img/Logo.png";
import Tech from "../../components/img/tech.png";
import { UserContext } from "../../contexts/UserContext";
import CardTech from "../../components/CardTech/index";
import ContainerGeral from "../../components/Container/containerGeral";
import HeaderContainer from "../../components/HeaderTechs/index";
import {
  NavBar,
  Header,
  Main,
  styleBackground as Background,
} from "./styles.home";

const Home = () => {
  const { module, loading, editName, logout, user, changeArrObjectsTechs } =
    useContext(UserContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <Background>
          <div className="Loading">Carregando...</div>
        </Background>
      ) : (
        <Background>
          {!user ? (
            <div>
              <p className="FhraseMain">Ops! Tivemos algum problema!</p>
            </div>
          ) : (
            <>
              <NavBar>
                <img src={Logo} alt="Logo" />
                <button type="button" onClick={() => logout()}>
                  Sair
                </button>
              </NavBar>
              <Header>
                <p className="TitleName">Olá, {editName()}!</p>
                <p>{module}</p>
              </Header>
              <Main>
                {!user.techs.length ? (
                  <>
                    <HeaderContainer className="headerContainer" />
                    <span className="ContainerWithoutTechs">
                      <p className="FhraseMain">
                        Você ainda não possui tecnologias cadastradas
                      </p>
                      <div className="ContainerImgAnimation">
                        <img
                          src={Tech}
                          alt="Imagem ilustrativa de uma pessoa com tecnologias"
                        />
                      </div>
                    </span>
                  </>
                ) : (
                  <>
                    <HeaderContainer className="headerContainer" />
                    <ContainerGeral className="Containertechs">
                      <ul>
                        {changeArrObjectsTechs().map((tech) => (
                          <CardTech key={tech.id} tech={tech} />
                        ))}
                      </ul>
                    </ContainerGeral>
                  </>
                )}
              </Main>
            </>
          )}
        </Background>
      )}
    </motion.div>
  );
};

export default Home;
