import { FC } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import styles from "./style.module.css";
import { useModel } from "./model";

interface Props {
  className?: string;
}

export const SignIn: FC<Props> = observer(({ className }) => {
  const model = useModel();

  return (
    <form className={cn(styles.root, className)} onSubmit={model.handleSubmit}>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" onChange={model.handleElementChange} />
      </label>
      <button type="submit" disabled={model.isDisabled}>
        Sign in
      </button>
    </form>
  );
});
