import { FC } from "react";
import cn from "classnames";

import { Label } from "@/shared/ui/Label";
import { Button } from "@/shared/ui/Button";
import { Clouds, Facebook, Twitter } from "@/shared/ui/Icon";
import { Head } from "@/shared/ui/Head";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const WorkspacePage: FC<Props> = ({ className }) => {
  return (
    <>
      <Head>
        <title>DSAspro: a brand new task management tool — WorkSpace</title>
      </Head>
      <main className={cn(styles.root, className)}>
        <div className={styles.blockleft}>
          <div className={styles.communication}>
            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.text}>
              We’ love to hear from you. Our friendly team is always here to
              chat.
            </p>
            <div className={styles.box}>
              <Clouds />
              <div className={styles.block}>
                <h3 className={styles.contact}>Chat to us</h3>
                <p className={styles.help}>
                  Our friendly team is here to help.
                </p>
                <a href="mailto:hi@dsaspro.com" className={styles.email}>
                  hi@dsaspro.com
                </a>
              </div>
            </div>
          </div>
          <ul className={styles.links}>
            <li>
              <a href="https://facebook.com">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.blockright}>
          <div className={styles.module}>
            <h1 className={styles.title}>Let's build a Workspace</h1>
            <p className={styles.subtitle}>
              Boost your productivity by making it easier for everyone to access
              boards in one location.
            </p>
          </div>
          <form action="" className={styles.form}>
            <div className={styles.fields}>
              <Label type="text" name="name" placeholder="Your Company Co.">
                Workspace name
              </Label>
              <label className={styles.label}>
                <span className={styles.span}>Description</span>
                <textarea
                  name="textarea"
                  placeholder="Our team organizes everything here."
                  className={styles.textarea}
                />
              </label>
            </div>
            <Button type="button" className={styles.button}>
              Get started
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default WorkspacePage;
