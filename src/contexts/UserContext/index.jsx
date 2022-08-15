import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [openEye, setOpenEye] = useState(true);
  const [typeInput, setTypeInput] = useState("password");
  const { user_id } = useParams();
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${user_id}`)
      .then((res) => {
        setName(res.data.name);
        setModule(res.data.course_module);
        setUser(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [user_id]);

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
      });
  };

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
        navigate("/login");
      })
      .catch((err) => {
        err.response.data.message === "Email already exists"
          ? toast.error("Ops! Esse email já possui cadastro", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              toastId: 1,
            })
          : toast.error("Ops! Houve algo de errado, tente novamente!", {
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
  };

  const changeStates = (e) => {
    e.preventDefault();
    setOpenEye(!openEye);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        openEye,
        setOpenEye,
        typeInput,
        setTypeInput,
        user_id,
        name,
        setName,
        module,
        setModule,
        loading,
        setLoading,
        user,
        setUser,
        editName,
        logout,
        submitForm,
        submitRegister,
        changeStates,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
