import { ReactNode } from "react";
import UserProvider from "../UserContext";

interface IProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: IProviderProps) => (
  <UserProvider>{children}</UserProvider>
);
export default Provider;
