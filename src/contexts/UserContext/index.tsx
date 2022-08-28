import React, { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FieldValue } from "react-hook-form";

interface IDataRegisterTech {
  title?: string;
  status: string;
}

export interface IDataSubmitFormLogin {
  email: string;
  password: string;
}

interface IDataSubmitFormRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bio: string;
  contact: number;
  course_module: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUSer {
  id: string;
  name: string;
  email: string;
  course_module?: string;
  bio?: string;
  contact?: string;
  techs: ITechs[];
  works?: any[];
  created_at?: string;
  updated_at?: string;
  avatar_url?: null;
}

interface ITechs {
  id?: string;
  title: string;
  status: string;
}

interface IUserProviderListData {
  visibilityConfirmDeleteTechModal: boolean;
  visibilityModalEditTech: boolean;
  visibilityModalRegisterTech: boolean;
  showTitleTechModalEdit: string;
  showStatusTechModalEdit: string;
  module: string;
  loading: boolean;
  user: IUSer | { techs: [] };
  openEye: boolean;
  typeInput: string;
  showTechModal: (title: string, status: string, id: string) => void;
  submitEditTech: (data: IDataRegisterTech) => void;
  submitRegisterTech: (data: IDataRegisterTech) => void;
  submitForm: (data: IDataSubmitFormLogin) => void;
  submitRegister: (data: FieldValue<IDataSubmitFormRegister>) => void;
  deleteTech: () => void;
  editName: () => string;
  logout: () => void;
  changeStates: (e: MouseEvent) => void;
  showTConfirmDelete: () => void;
  setVisibilityModalRegisterTech: (
    visibilityModalRegisterTech: boolean
  ) => void;
  setVisibilityConfirmDeleteTechModal: (
    visibilityConfirmDeleteTechModal: boolean
  ) => void;
  setVisibilityModalEditTech: (visibilityModalEditTech: boolean) => void;
  changeArrObjectsTechs: () => any[];
}

export const UserContext = createContext<IUserProviderListData>(
  {} as IUserProviderListData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [openEye, setOpenEye] = useState(true);
  const [typeInput, setTypeInput] = useState("password");
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUSer>({} as IUSer);
  const [showTitleTechModalEdit, setShowTitleTechModalEdit] = useState("");
  const [showStatusTechModalEdit, setShowStatusTechModalEdit] = useState("");
  const [idTech, setIdTech] = useState("");
  const [visibilityModalRegisterTech, setVisibilityModalRegisterTech] =
    useState(false);
  const [visibilityModalEditTech, setVisibilityModalEditTech] = useState(false);
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
  }, []);

  const submitForm = async (data: IDataSubmitFormLogin) => {
    await api
      .post("/sessions", data)
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

  const changeStates = (e: Event) => {
    e.preventDefault();
    setOpenEye(!openEye);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  const submitRegister = (data: FieldValue<IDataSubmitFormRegister>) => {
    api
      .post("/users", data)
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

  const submitRegisterTech = (data: IDataRegisterTech) => {
    api
      .post("/users/techs", data, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then(() => {
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
        searchUSer();
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
    let newArrObjectsTech: any[] = [];
    const arr = user.techs;
    for (let i = arr.length - 1; i >= 0; i--) {
      newArrObjectsTech.push(arr[i]);
    }
    return newArrObjectsTech;
  };

  const submitEditTech = (data: IDataRegisterTech) => {
    api
      .put(`/users/techs/${idTech}`, data, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
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
        searchUSer();
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
      .then(() => {
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

        searchUSer();
      })
      .catch((err) => {
        console.error(err);
        toastError();
      });
  };

  const searchUSer = () => {
    return api
      .get("/profile", {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const showTechModal = (title: string, status: string, id: string) => {
    setShowTitleTechModalEdit(title);
    setShowStatusTechModalEdit(status);
    setIdTech(id);
    setVisibilityModalEditTech(true);
  };

  const showTConfirmDelete = () => {
    setVisibilityConfirmDeleteTechModal(true);
    setVisibilityModalEditTech(false);
  };

  return (
    <UserContext.Provider
      value={{
        changeArrObjectsTechs,
        changeStates,
        deleteTech,
        editName,
        loading,
        logout,
        module,
        openEye,
        setVisibilityConfirmDeleteTechModal,
        setVisibilityModalEditTech,
        setVisibilityModalRegisterTech,
        showStatusTechModalEdit,
        showTConfirmDelete,
        showTechModal,
        showTitleTechModalEdit,
        submitEditTech,
        submitForm,
        submitRegister,
        submitRegisterTech,
        typeInput,
        user,
        visibilityConfirmDeleteTechModal,
        visibilityModalEditTech,
        visibilityModalRegisterTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
/* navigate,
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
        setVisibilityConfirmDeleteTechModal, */
