import { Card } from "./style";
import { FiEdit } from "react-icons/fi";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface ICardTechProps {
  tech: {
    id: string;
    title: string;
    status: string;
    create_at: string;
    updated_at: string;
  };
}

const CardTech = ({ tech }: ICardTechProps) => {
  const { title, status, id } = tech;
  const { showTechModal } = useContext(UserContext);

  return (
    <Card>
      <h4>{title}</h4>
      <span className="ContainerStatus">
        <p>{status}</p>
        <button onClick={() => showTechModal(title, status, id)}>
          <FiEdit />
        </button>
      </span>
    </Card>
  );
};

export default CardTech;
