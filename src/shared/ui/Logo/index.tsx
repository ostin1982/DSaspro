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
    <div className={cn(styles.logo, className)}>
      <img src={logoSvg} alt="logo" className={styles.logoSvg} />
      <p className={styles.name}>{children}</p>
    </div>
  );
};
