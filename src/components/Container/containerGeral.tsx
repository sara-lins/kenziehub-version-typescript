import React, { ReactNode } from "react";
import { Div as DivContainer } from "./styles.container";

interface IContainerGeralProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

const ContainerGeral = ({
  children,
  className,
  height,
}: IContainerGeralProps) => (
  <DivContainer height={`${height}`} className={className}>
    {children}
  </DivContainer>
);

export default ContainerGeral;
