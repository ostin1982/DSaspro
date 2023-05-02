import type { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

export const Loading: FC<Props> = ({ className }) => {
  return <div className={cn(styles.root, className)}>Loading...</div>;
};
