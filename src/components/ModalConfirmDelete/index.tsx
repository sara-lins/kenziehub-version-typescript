import { useContext } from "react";
import Modal from "react-modal";
import { UserContext } from "../../contexts/UserContext";

import { ContainerModalConfirmDelete } from "../ModalRegisterTech/style";

Modal.setAppElement(document.getElementById("root")!);

const ModalConfirmDelete = () => {
  const {
    deleteTech,
    visibilityConfirmDeleteTechModal,
    setVisibilityConfirmDeleteTechModal,
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
      /* position: "", */
      inset: "0",
      width: "20rem",
      height: "20rem",
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
      isOpen={visibilityConfirmDeleteTechModal}
      onRequestClose={() => setVisibilityConfirmDeleteTechModal(false)}
      style={styleModal}
      parentSelector={() => document.body}
    >
      <ContainerModalConfirmDelete>
        <div>
          <h3>Tem certeza que desejar excluir essa Tecnologia?</h3>
        </div>
        <div>
          <button onClick={deleteTech}>Sim</button>
          <button onClick={() => setVisibilityConfirmDeleteTechModal(false)}>
            Não
          </button>
        </div>
      </ContainerModalConfirmDelete>
    </Modal>
  );
};

export default ModalConfirmDelete;
