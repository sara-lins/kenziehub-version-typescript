import { ModalSucess as Container } from "./style.modalSucess";
import { BsCheckCircleFill } from "react-icons/bs";

const ModalSucess = ({ children }) => {
  return (
    <Container>
      <span>
        <div>
          <BsCheckCircleFill />
          <p>{children}</p>
          <button>X</button>
        </div>
        <div></div>
      </span>
    </Container>
  );
};

export default ModalSucess;
