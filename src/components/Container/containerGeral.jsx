import { Div as DivContainer } from "./styles.container.js";

const ContainerGeral = ({ children, className, height }) => (
  <DivContainer height={height} className={className}>
    {children}
  </DivContainer>
);

export default ContainerGeral;
