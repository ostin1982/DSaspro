import { FC } from "react";
import cn from "classnames";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import patternSvg from "./pattern.svg";
import patternSvg768 from "./pattern-768.svg";
import logoSvg from "./logo.svg";
import mailIconSvg from "./mailIcon.svg";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  return (
    <>
      <main className={cn(styles.root, className)}>
        <section className={styles.pattern}>
          <picture>
            <source srcSet={patternSvg768} media="(min-width: 768px)"></source>
            <img
              src={patternSvg}
              className={styles.images}
              alt="pattern in blue tones"
            />
          </picture>
        </section>
        <section className={styles.container}>
          <div className={styles.logo}>
            <img src={logoSvg} alt="logo" className={styles.logoSvg} />
            <p className={styles.name}>DSAspro</p>
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
          <div className={styles.footer}>
            <p className={styles.text}>© DSAspro 2023</p>
            <div className={styles.mail}>
              <img src={mailIconSvg} alt="letter icon" />
              <a href="mailto: help@dsaspro.com" className={styles.help}>
                help@dsaspro.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignInPage;
