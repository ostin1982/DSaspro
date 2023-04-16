import { FC, ReactNode } from "react";
import cn from "classnames";

import logoSvg from "./logo.svg";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Logo: FC<Props> = ({ className, children }) => {
  return (
    <div className={styles.logo}>
      <img src={logoSvg} alt="logo" className={styles.logoSvg} />
      <p className={cn(styles.name, className)}>{children}</p>
    </div>
  );
};
