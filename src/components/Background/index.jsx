import { ContainerBackground } from "./style.background";

const Background = ({ children, className }) => (
  <ContainerBackground className={className}>{children}</ContainerBackground>
);
export default Background;
