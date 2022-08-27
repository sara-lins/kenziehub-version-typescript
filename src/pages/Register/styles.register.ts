import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../components/Background";

export const BackgroundRegister = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 25rem;
  height: 5rem;

  @media (max-width: 409px) {
    width: 95%;
  }
`;

export const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;

  font-size: 0.75rem;
  border-radius: 5px;
  background-color: var(--grey-2);
  color: var(--grey-0);
  cursor: pointer;

  &:hover {
    background-color: var(--grey-1);
  }
`;
