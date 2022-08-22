import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [openEye, setOpenEye] = useState(true);
  const [typeInput, setTypeInput] = useState("password");
  const { user_id } = useParams();
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [showTitleTechModalEdit, setShowTitleTechModalEdit] = useState("");
  const [showStatusTechModalEdit, setShowStatusTechModalEdit] = useState("");
  const [idTech, setIdTech] = useState("");
  const [visibilityModalRegisterTech, setVisibilityModalRegisterTech] =
    useState(false);
  const [visibilityModalEditTech, setVisibilityModalEditTech] = useState(false);
  const [userConfirmDeleteTech, setUserConfirmDeleteTech] = useState(false);
  const [
    visibilityConfirmDeleteTechModal,
    setVisibilityConfirmDeleteTechModal,
  ] = useState(false);

  const toastError = () => {
    toast.error("Ops! Houve algo de errado, tente novamente!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 1,
    });
  };

  useEffect(() => {
    api
      .get(`/profile`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setName(res.data.name);
        setModule(res.data.course_module);
        setUser(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [user_id, user]);

  const submitForm = async (data) => {
    await api
      .post("/sessions", { ...data })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);

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

  const changeStates = (e) => {
    e.preventDefault();
    setOpenEye(!openEye);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
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
          : toastError();
      });
  };

  const editName = () => {
    let newString = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i - 1] === " " || i === 0) {
        newString += name[i].toUpperCase();
      } else {
        newString += name[i];
      }
    }
    return newString;
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  const submitRegisterTech = (data) => {
    console.log(data);
    api
      .post(
        "/users/techs",
        { ...data },
        {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
          },
        }
      )
      .then((res) => {
        toast.success("Tecnologia cadastrada com sucesso!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        setVisibilityModalRegisterTech(false);
      })
      .catch((err) => {
        console.error(err);
        err.response.data.message ===
          "User Already have this technology created you can only update it" &&
          toast.error("Tecnologia já está cadastrada!", {
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

  const changeArrObjectsTechs = () => {
    let newArrObjectsTech = [];
    for (let i = user.techs.length - 1; i >= 0; i--) {
      newArrObjectsTech.push(user.techs[i]);
    }
    return newArrObjectsTech;
  };

  const submitEditTech = (data) => {
    console.log(data);
    api
      .put(
        `/users/techs/${idTech}`,
        { ...data },
        {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
          },
        }
      )
      .then((res) => {
        toast.success(`Status atualizado com sucesso!`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        setVisibilityModalEditTech(false);
      })
      .catch((err) => {
        console.error(err);
        toastError();
      });
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${idTech}`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        toast.success(`Tech deletada com sucesso!`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
        });
        setVisibilityConfirmDeleteTechModal(false);
      })
      .catch((err) => {
        console.error(err);
        toastError();
      });
  };

  const confirmDeleteTech = () => {
    setUserConfirmDeleteTech(true);
    userConfirmDeleteTech && deleteTech();
  };

  const showTechModal = (titleTech, status, idTech) => {
    setShowTitleTechModalEdit(titleTech);
    setShowStatusTechModalEdit(status);
    setIdTech(idTech);
    setVisibilityModalEditTech(true);
  };

  const showTConfirmDelete = () => {
    setVisibilityConfirmDeleteTechModal(true);
    setVisibilityModalEditTech(false);
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
        visibilityModalRegisterTech,
        setVisibilityModalRegisterTech,
        submitRegisterTech,
        changeArrObjectsTechs,
        techs,
        setTechs,
        visibilityModalEditTech,
        setVisibilityModalEditTech,
        submitEditTech,
        deleteTech,
        showTitleTechModalEdit,
        showTechModal,
        showStatusTechModalEdit,
        visibilityConfirmDeleteTechModal,
        showTConfirmDelete,
        confirmDeleteTech,
        setVisibilityConfirmDeleteTechModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
