import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

interface Props {
  className?: string;
}

const OnbordingPage: FC<Props> = ({ className }) => {
  return (
    <>
      <main className={cn(styles.root, className)}>
        <div className={styles.module}>
          <h1 className={styles.title}>Please, introduce yourself</h1>
          <p className={styles.subtitle}>
            You can do this later on Profile page.{" "}
            <a href="/" className={styles.link}>
              Skip
            </a>
          </p>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.fields}>
            <Input type="text" name="name" placeholder="First name">
              First name
            </Input>
            <Input type="text" name="surname" placeholder="Last name">
              Last name
            </Input>
          </div>
          <Button type="button" className={styles.button}>
            Continue
          </Button>
        </form>
      </main>
    </>
  );
};

export default OnbordingPage;
