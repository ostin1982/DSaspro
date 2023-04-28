import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
}

export const Input: FC<Props> = ({ className, placeholder, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn(styles.input, className)}
    />
  );
};
