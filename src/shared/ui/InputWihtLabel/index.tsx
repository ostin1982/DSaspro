import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { Input } from "../Input";

interface Props {
  label: string;
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
}

export const InputWithLabel: FC<Props> = ({
  className,
  placeholder,
  type,
  name,
  label,
}) => {
  return (
    <label className={cn(styles.label, className)}>
      {label}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
    </label>
  );
};
