import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Label: FC<Props> = ({ className, children }) => {
  return (
    <label className={cn(styles.label, className)}>
      <span className={styles.span}>{children}</span>
    </label>
  );
};
