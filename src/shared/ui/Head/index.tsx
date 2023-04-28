import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  children: ReactNode;
}

export const Head: FC<Props> = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};
