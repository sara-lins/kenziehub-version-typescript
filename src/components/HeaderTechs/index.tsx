import { Button, DivContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

type headerContainerProps = { className: string };

const HeaderContainer = ({ className }: headerContainerProps) => {
  const { setVisibilityModalRegisterTech } = useContext(UserContext);
  return (
    <>
      <DivContainer className={className}>
        <p>Tecnologias</p>
        <Button onClick={() => setVisibilityModalRegisterTech(true)}>+</Button>
      </DivContainer>
    </>
  );
};

export default HeaderContainer;
