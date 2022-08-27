import { ContainerBackground } from "./style.background";
import { ReactNode } from "react";

interface IBackgroundProps {
  children: ReactNode;
  className?: string;
}

const Background = ({ children, className }: IBackgroundProps) => (
  <ContainerBackground className={className}>{children}</ContainerBackground>
);
export default Background;
