import { FC } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";
import { InputWithLabel } from "@/shared/ui/InputWihtLabel";
import { MailIcon } from "@/shared/ui/Icon";
import { Head } from "@/shared/ui/Head";

import patternSvg from "./pattern.svg";
import patternSvg768 from "./pattern-768.svg";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  return (
    <>
      <Head>
        <title>DSAspro: a brand new task management tool — Sign - In</title>
      </Head>
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
          <div className={styles.logomark}>
            <Logo className={styles.name}>DSAspro</Logo>
          </div>
          <div className={styles.module}>
            <div className={styles.info}>
              <h1 className={styles.title}>Sign in</h1>
              <p className={styles.subtitle}>Start your 30-day free trial.</p>
            </div>
            <form action="#" className={styles.form}>
              <InputWithLabel
                type="email"
                name="email"
                placeholder="Enter your email"
                label="Email"
              />
              <Button type="button">Get started</Button>
            </form>
          </div>
          <div className={styles.footer}>
            <p className={styles.text}>© DSAspro 2023</p>
            <div className={styles.mail}>
              <MailIcon />
              <a href="mailto:help@dsaspro.com" className={styles.help}>
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
