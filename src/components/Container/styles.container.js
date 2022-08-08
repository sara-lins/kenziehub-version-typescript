import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  max-width: 25rem;
  min-height: 31.25rem;
  padding: 30px 20px;
  border-radius: 10px;

  color: var(--grey-0);
  background-color: var(--grey-3);

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
    height: 100%;

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

    input {
      height: 3.75rem;
      border-radius: 5px;
      padding: 5px 8px;
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: 1rem;
      color: var(--grey-0);
      background-color: var(--grey-3);
      border: 1px solid var(--grey-0);

      :focus {
        background-color: var(--grey-2);
        color: var(--grey-0);
        outline-color: transparent;
      }

      :last-child {
        padding: 5px 0px;
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

    .Container-inputs {
      display: flex;
      justify-content: space-between;

      height: 75%;
    }

    .Container-Resgister {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 25%;
    }
  }
`;
