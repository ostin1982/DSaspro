import { FC, ReactNode } from "react";
import cn from "classnames";

import { LogoIcon } from "../Icon";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Logo: FC<Props> = ({ className, children }) => {
  return (
    <div className={styles.logo}>
      <LogoIcon className={styles.logoSvg} />
      <p className={cn(styles.name, className)}>{children}</p>
    </div>
  );
};
