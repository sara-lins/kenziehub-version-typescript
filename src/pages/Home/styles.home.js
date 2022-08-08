import styled from "styled-components";

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
    width: 50px;
    height: 30px;

    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
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
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-top: 50px;

  line-height: 40px;
  color: var(--grey-0);

  p {
    display: flex;
    align-items: center;
    padding: 15px 60px;
  }

  .FhraseMain {
    font-weight: bold;
  }
`;
