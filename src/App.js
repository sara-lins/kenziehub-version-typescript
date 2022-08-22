import GlobalStyle from "./styles/global";
import RoutesMain from "./routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalRegisterTech from "./components/ModalRegisterTech/index";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import ModalEditTech from "./components/ModalEditTech";
import ModalConfirmDelete from "./components/ModalConfirmDelete";

function App() {
  const {
    visibilityModalRegisterTech,
    visibilityModalEditTech,
    visibilityConfirmDeleteTechModal,
  } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "var(--grey-3)", color: "white" }}
      />
      {visibilityModalRegisterTech ? (
        <ModalRegisterTech />
      ) : visibilityModalEditTech ? (
        <ModalEditTech />
      ) : (
        visibilityConfirmDeleteTechModal && <ModalConfirmDelete />
      )}

      <RoutesMain />
    </>
  );
}

export default App;
