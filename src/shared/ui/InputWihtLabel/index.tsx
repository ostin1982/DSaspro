import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { Input } from "../Input";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
  children: ReactNode;
}

export const InputWithLabel: FC<Props> = ({
  className,
  placeholder,
  type,
  name,
  children,
}) => {
  return (
    <label className={cn(styles.label, className)}>
      <span className={styles.span}>{children}</span>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
    </label>
  );
};
