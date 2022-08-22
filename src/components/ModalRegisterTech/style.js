import styled from "styled-components";

export const HeaderContainer = styled.span`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  background-color: var(--grey-2);

  button {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: var(--grey-0);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const FormRegisterTech = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: ${(props) => `${props.height}`};
  padding: 18px 25px 25px 25px;

  .MessageError {
    font-size: 0.9rem;
    margin-top: 5px;
    color: var(--toastify-color-error);
  }

  label {
    margin-top: 10px;
  }

  select {
    height: 3rem;
    padding: 10px;

    border-radius: 5px;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 0.9rem;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input {
    height: 3rem;
    border-radius: 5px;
    padding: 5px 8px;
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

    :disabled {
      cursor: not-allowed;
      color: var(--grey-1);
    }
  }

  button {
    padding: 5px 0px;
    margin-top: 10px;
    height: 3.75rem;

    background-color: var(--color-primary);
    color: var(--grey-0);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  span {
    display: flex;
    justify-content: space-between;

    button {
      width: 45%;
    }

    .ButtonDeleteTech {
      opacity: 0.9;
      background-color: var(--color-primary-negative);

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const ContainerModalConfirmDelete = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  h3 {
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 30%;
      min-width: 50px;
      height: 3rem;

      border-radius: 8px;
      background-color: var(--color-primary);
      color: var(--grey-0);
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
