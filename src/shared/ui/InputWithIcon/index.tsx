import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { Input } from "../Input";
import { SearchIcon } from "../Icon";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: "email" | "text";
}

export const InputWithIcon: FC<Props> = ({
  placeholder,
  type,
  name,
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
      <SearchIcon className={styles.icon} />
    </div>
  );
};
