import styled from "styled-components";
import Background from "../../components/Background";

export const styleBackground = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 10%;
  position: fixed;
  top: 0;
  z-index: 1;

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
  height: 90px;
  padding: 0 10%;
  position: absolute;
  top: 13%;

  border-bottom: 1px solid var(--grey-2);
  color: var(--grey-0);
  font-weight: bold;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 25px;

    padding: 10px 10%;
    height: 110px;
    top: 18%;

    text-align: center;
    font-size: 0.9rem;

    .TitleName {
      font-size: 1rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 1rem;
  position: absolute;
  top: 25%;

  color: var(--grey-0);

  @media (max-width: 550px) {
    top: 35%;
  }

  .ContainerWithoutTechs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding-top: 30px;

    img {
      width: 20rem;
      height: 20rem;
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%,
      100% {
        transform: translatey(0);
      }
      50% {
        transform: translatey(-20px);
      }
    }

    p,
    .ContainerImgAnimation {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      text-align: center;
      padding: 0 10px;
    }
  }

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 70px;

    p {
      width: 50%;
      text-align: start;
      font-size: 1.5rem;
    }

    @media (max-width: 409px) {
      min-width: 90%;

      p {
        font-size: 1.1rem;
      }
    }

    button {
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;

      border-radius: 5px;
      background-color: var(--grey-2);
      color: var(--grey-0);
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: var(--grey-1);
      }
    }
  }

  .Containertechs {
    overflow-y: scroll;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 80%;
    min-height: 420px;
    animation: none;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  div {
    svg {
      width: 20rem;
      font-size: 11rem;
      color: var(--color-primary);
      /* animation: 1.5s rotateIn; */
    }
  }

  .FhraseMain {
    font-weight: bold;
  }
`;
