import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  max-height: 70px;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  overflow-x: none;

  border-radius: 8px;
  background-color: var(--grey-4);

  animation: 1s fadeInDownBig;
  transition: outline 0.5s linear, color 0.3s linear;

  .ContainerStatus {
    display: flex;
    align-items: center;
    height: auto;
    gap: 30px;

    p {
      font-size: 1rem;
      color: var(--grey-1);
    }

    @media (max-width: 400px) {
      gap: 20px;
      p {
        font-size: 0.8rem;
      }
    }

    svg {
      width: 1.5rem;
      height: auto;
      cursor: pointer;
    }

    button {
      width: 1.5rem;
      height: 2rem;
      background-color: transparent;
    }
  }

  &:hover {
    outline: 1px solid var(--color-primary);
    box-shadow: 2px 3px 5px var(--grey-4);

    p {
      color: var(--grey-0);
    }
  }
`;
