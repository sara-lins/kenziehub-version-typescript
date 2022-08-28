import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerGeral from "../../components/Container/containerGeral";
import Background from "../../components/Background/index";

export const ContainerLogin = styled(ContainerGeral)`
  overflow-y: hidden;
`;

export const styleBackground = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login {
    overflow-y: hidden;
  }
`;

export const ContainerRegister = styled.div`
  margin-top: 30px;

  p {
    text-align: center;
    font-size: 0.75rem;
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;

  border-radius: 5px;
  color: var(--grey-0);
  font-weight: bold;
  background-color: var(--grey-1);
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  min-width: 25rem;
  height: 6.25rem;

  @media (max-width: 409px) {
    min-width: 95%;
  }

  img {
    animation: 1s fadeInDownBig;
  }
`;
