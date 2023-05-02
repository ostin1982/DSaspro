import { FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { Input } from "../Input";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
  icon?: ReactNode;
}

export const InputWithIcon: FC<Props> = ({
  placeholder,
  type,
  name,
  icon,
  className,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
      {icon}
    </div>
  );
};
