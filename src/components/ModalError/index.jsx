import { ModalError as Container } from "./style.modalError";
import { MdError } from "react-icons/md";

const ModalError = ({ children }) => {
  return (
    <Container>
      <span>
        <div>
          <MdError />
          <p>{children}</p>
          <button>X</button>
        </div>
        <div></div>
      </span>
    </Container>
  );
};

export default ModalError;
