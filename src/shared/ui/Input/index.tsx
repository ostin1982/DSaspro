import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
  children: ReactNode;
}

export const Input: FC<Props> = ({
  className,
  placeholder,
  type,
  name,
  children,
}) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>{children}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(styles.input, className)}
      />
    </label>
  );
};
