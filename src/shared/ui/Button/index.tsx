import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "button" | "submit";
  children: ReactNode;
}

export const Button: FC<Props> = ({ className, type, children }) => {
  return (
    <button className={cn(styles.root, className)} type={type}>
      {children}
    </button>
  );
};
