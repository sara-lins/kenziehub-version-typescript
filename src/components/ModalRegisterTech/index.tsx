import { HeaderContainer, FormRegisterTech } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterTech } from "../../validator/schema";
import { MdOutlineClose } from "react-icons/md";

Modal.setAppElement(document.getElementById("root")!);

interface IDataSubmitFormRegister {
  title: string;
  status: string;
}

const ModalRegisterTech = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataSubmitFormRegister>({
    resolver: yupResolver(schemaRegisterTech),
  });

  const {
    visibilityModalRegisterTech,
    setVisibilityModalRegisterTech,
    submitRegisterTech,
  } = useContext(UserContext);

  const styleModal: Modal.Styles = {
    overlay: {
      position: "fixed",
      display: "flex",
      zIndex: "1",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(2px)",
      backgroundColor: "#0000007d",
    },
    content: {
      /* position: "none", */
      inset: "0",
      width: "25rem",
      height: "25rem",
      background: "#212529",
      color: "#F8F9FA",
      WebkitOverflowScrolling: "touch",
      borderRadius: "10px",
      border: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "0",
      boxShadow: "3px 3px 5px #000000",
    },
  };

  return (
    <Modal
      isOpen={visibilityModalRegisterTech}
      onRequestClose={() => setVisibilityModalRegisterTech(false)}
      style={styleModal}
      parentSelector={() => document.querySelector("#root")!}
    >
      <HeaderContainer>
        <p>Cadastrar Tecnologia</p>
        <button onClick={() => setVisibilityModalRegisterTech(false)}>
          <MdOutlineClose />
        </button>
      </HeaderContainer>
      <FormRegisterTech
        height="80%"
        onSubmit={handleSubmit(submitRegisterTech)}
      >
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          id="title"
          placeholder="Ex: ReactJs"
          {...register("title")}
        />
        {errors.title && (
          <p className="MessageError">{errors.title?.message}</p>
        )}
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}>
          <option value="">Selecione um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && (
          <p className="MessageError">{errors.status?.message}</p>
        )}
        <button>Cadastrar</button>
      </FormRegisterTech>
    </Modal>
  );
};

export default ModalRegisterTech;
