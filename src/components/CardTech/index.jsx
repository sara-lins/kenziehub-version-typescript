import { Card } from "./style";
import { VscTrash } from "react-icons/vsc";

const CardTech = ({ tech }) => {
  return (
    <Card>
      <h4>{tech.name}</h4>
      <div>
        <p>{tech.tech}</p>
        <VscTrash />
      </div>
    </Card>
  );
};

export default CardTech;
