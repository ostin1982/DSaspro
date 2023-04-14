import { FC } from "react";
import cn from "classnames";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import patternSvg from "./pattern.svg";
import logoSvg from "./logo.svg";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  return (
    <>
      <main className={cn(styles.root, className)}>
        <section className={styles.pattern}>
          <img
            src={patternSvg}
            className={styles.images}
            alt="pattern in blue tones"
          />
        </section>
        <section className={styles.container}>
          <div className={styles.logo}>
            <img src={logoSvg} alt="logo" className={styles.logoSvg} />
          </div>
          <div className={styles.module}>
            <div className={styles.info}>
              <h1 className={styles.title}>Sign in</h1>
              <p className={styles.subtitle}>Start your 30-day free trial.</p>
            </div>
            <form action="#" className={styles.form}>
              <Input type="email" name="email" placeholder="Enter your email">
                Email
              </Input>
              <Button>Get started</Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignInPage;
