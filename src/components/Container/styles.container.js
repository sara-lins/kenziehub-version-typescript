import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 25%;
  min-width: 25rem;
  min-height: 30rem;
  height: ${(props) => `${props.height}`};
  padding: 30px 20px;
  border-radius: 10px;
  margin: 15px;
  overflow-y: scroll;

  @media (max-width: 409px) {
    min-width: 97%;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-2);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  color: var(--grey-0);
  background-color: var(--grey-3);

  animation: 1s bounceInLeft;

  .ContainerTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0 15px 0;
    width: 100%;
    height: 10rem;
  }

  .TitleRegister {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .SubTitleRegister {
    font-size: 0.75rem;
    color: var(--grey-1);
  }

  form div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: ${(props) => `${props.height}`};

    .ContainerTitle-login {
      margin-bottom: 10px;
      text-align: center;

      width: 100%;
      height: 20%;

      p {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
      }
    }

    .MessageError {
      font-size: 0.9rem;
      margin-top: 5px;
      color: var(--toastify-color-error);
    }

    .MessageDefault {
      font-size: 0.9rem;
      margin-top: 5px;
      color: var(--grey-1);
    }

    input {
      height: 3.5rem;
      border-radius: 5px;
      padding: 5px 8px;
      margin-top: 10px;
      font-size: 1rem;
      color: var(--grey-0);
      background-color: var(--grey-3);
      border: 1px solid var(--grey-0);

      :focus {
        background-color: var(--grey-2);
        color: var(--grey-0);
        outline-color: transparent;
      }

      ::placeholder {
        font-size: 0.75rem;
      }

      :last-child {
        padding: 5px 0px;
        margin-top: 20px;
        height: 3.75rem;

        background-color: var(--color-primary);
        color: var(--grey-0);
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        border: none;

        &:hover {
          background-color: var(--color-primary-focus);
        }
      }
    }

    label {
      margin-top: 10px;
    }

    .Container-inputs {
      display: flex;
      justify-content: space-between;

      height: 75%;
    }

    select {
      height: 35px;
      margin-top: 10px;
      padding: 10px;

      border-radius: 5px;
      background-color: var(--grey-2);
      color: var(--grey-0);
      font-size: 0.9rem;

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
`;

export const ContainerInputPass = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  margin-top: 10px;

  border-radius: 5px;
  border: 1px solid var(--grey-0);
  font-size: 1rem;
  color: var(--grey-0);
  background-color: ${(props) => `${props.background}`};
  cursor: text;

  :focus {
    background-color: var(--grey-2);
    color: var(--grey-0);
    outline-color: transparent;
  }

  #senha {
    width: 80%;
    height: 100%;
    margin: 0;

    background-color: transparent;
    border: 0;
    outline: 0;
  }

  button {
    display: block;
    width: 20%;
    height: 80%;
    background-color: transparent;
    outline: 0;
  }

  svg {
    font-size: 1.3rem;
    color: var(--grey-0);
    cursor: pointer;
  }
`;
