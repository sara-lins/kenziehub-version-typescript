import Logo from "../../components/img/Logo.png";
import { FaCodeBranch } from "react-icons/fa";

import { NavBar, Header, Main } from "./styles.home";
import { styleBackground as Background } from "./styles.home.js";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../service/api";

const Home = () => {
  const { user_id } = useParams();
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function editName() {
    let newString = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i - 1] === " " || i === 0) {
        newString += name[i].toUpperCase();
      } else {
        newString += name[i];
      }
    }
    return newString;
  }

  function logout() {
    window.localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    api
      .get(`/users/${user_id}`)
      .then((res) => {
        setName(res.data.name);
        setModule(res.data.course_module);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [user_id]);

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
          </Main>
        </Background>
      )}
    </motion.div>
  );
};

export default Home;
