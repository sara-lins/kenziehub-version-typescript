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
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  width: 100%;
  min-height: 20vh;
  max-height: 20vh;

  position: fixed;
  top: 0;
  z-index: 2;

  @media (max-width: 665px) {
    padding: 0 50px;
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
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 9.375rem;
  height: 15rem;
  padding: 0 100px;
  top: 0;

  border-bottom: 1px solid var(--grey-2);
  color: var(--grey-0);
  font-weight: bold;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    height: 15rem;

    text-align: center;
    font-size: 0.9rem;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
  }

  @media (max-width: 665px) {
    padding: 0 50px;
  }

  p {
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-top: 3rem;
  padding: 0 100px;

  color: var(--grey-0);

  @media (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    div {
      svg {
        font-size: 22rem;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 50px;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    line-height: 2rem;
    margin-bottom: 20px;
  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 320px) {
      margin-top: 20px;

      svg {
        margin: 10px;
        font-size: 10rem;
      }
    }
  }

  div {
    svg {
      width: 20rem;
      font-size: 11rem;
      color: var(--color-primary);
      animation: 1.5s rotateIn;
    }
  }

  p {
    width: 100%;
    animation: 1.5s bounceInRight;
  }

  .FhraseMain {
    font-weight: bold;
  }
`;
