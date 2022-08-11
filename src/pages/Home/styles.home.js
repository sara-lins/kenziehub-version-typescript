import styled from "styled-components";
import Background from "../../components/Background";

export const styleBackground = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 16%;

  position: fixed;
  top: 0;
  z-index: 2;

  @media (max-width: 450px) {
    height: 17%;
  }

  color: var(--grey-0);
  background-color: var(--grey-4);
  border-bottom: 1px solid var(--grey-2);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;

    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 0.75rem;
    cursor: pointer;

    &:hover {
      background-color: var(--grey-1);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin-top: 9.375rem;
  height: 5rem;

  @media (max-width: 450px) {
    height: 8rem;
    margin-top: 9rem;
  }

  border-bottom: 1px solid var(--grey-2);
  color: var(--grey-0);
  font-weight: bold;
`;

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
  margin-top: 50px;

  line-height: 40px;
  color: var(--grey-0);

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  div {
    width: 50%;
    min-width: 31.25rem;

    svg {
      font-size: 11rem;
      color: var(--color-primary);
      animation: 1.5s rotateIn;
    }
  }

  p {
    width: 80%;
    animation: 1.5s bounceInRight;
  }

  .FhraseMain {
    font-weight: bold;
  }
`;
