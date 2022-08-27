import { HeaderContainer, FormRegisterTech } from "../ModalRegisterTech/style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEditTech } from "../../validator/schema";
import { MdOutlineClose } from "react-icons/md";

Modal.setAppElement(document.getElementById("root")!);

interface IDataSubmitFormRegister {
  title: string;
  status: string;
}

const ModalEditTech = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataSubmitFormRegister>({
    resolver: yupResolver(schemaEditTech),
  });

  const {
    visibilityModalEditTech,
    setVisibilityModalEditTech,
    submitEditTech,
    showTitleTechModalEdit,
    showStatusTechModalEdit,
    showTConfirmDelete,
  } = useContext(UserContext);

  const styleModal: Modal.Styles = {
    overlay: {
      position: "fixed",
      display: "flex",
      width: "100vw",
      height: "100vh",
      zIndex: "1",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(2px)",
      backgroundColor: "#0000007d",
    },
    content: {
      /* position: "none", */
      inset: "0",
      width: "25rem",
      height: "30rem",
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
      isOpen={visibilityModalEditTech}
      onRequestClose={() => setVisibilityModalEditTech(false)}
      style={styleModal}
      parentSelector={() => document.querySelector("#root")!} //document.body
    >
      <HeaderContainer>
        <p>Configurações da Tecnologia</p>
        <button onClick={() => setVisibilityModalEditTech(false)}>
          <MdOutlineClose />
        </button>
      </HeaderContainer>
      <FormRegisterTech height="90%" onSubmit={handleSubmit(submitEditTech)}>
        <label htmlFor="title">Tecnologia</label>
        <input
          disabled
          type="text"
          id="title"
          defaultValue={showTitleTechModalEdit}
        />
        <label htmlFor="status">Status Atual</label>
        <input
          disabled
          type="text"
          id="status"
          defaultValue={showStatusTechModalEdit}
        />
        <label htmlFor="status">Editar Status</label>
        <select id="status" {...register("status")}>
          <option value="">Selecione um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status && (
          <p className="MessageError">{errors.status?.message}</p>
        )}
        <span>
          <button type="submit" className="ButtonEditTech">
            Editar
          </button>
          <button
            type={"button"}
            className="ButtonDeleteTech"
            onClick={showTConfirmDelete}
          >
            Excluir
          </button>
        </span>
      </FormRegisterTech>
    </Modal>
  );
};

export default ModalEditTech;
