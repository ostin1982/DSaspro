import { FC } from "react";
import cn from "classnames";

import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import cloudskSvg from "./clouds.svg";
import facebookSvg from "./facebook.svg";
import twitterSvg from "./twitter.svg";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const WorkpacePage: FC<Props> = ({ className }) => {
  return (
    <>
      <main className={cn(styles.root, className)}>
        <div className={styles.blockleft}>
          <div className={styles.communication}>
            <h2 className={styles.heading}>Get in touch</h2>
            <p className={styles.text}>
              We’ love to hear from you. Our friendly team is always here to
              chat.
            </p>
            <div className={styles.box}>
              <img src={cloudskSvg} alt="dialog icon" />
              <div className={styles.block}>
                <h3 className={styles.contact}>Chat to us</h3>
                <p className={styles.help}>
                  Our friendly team is here to help.
                </p>
                <a href="mailto: hi@dsaspro.com" className={styles.email}>
                  hi@dsaspro.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <a href="facebook.com">
              <img src={facebookSvg} alt="logo facebook" />
            </a>
            <a href="twitter.com">
              <img src={twitterSvg} alt="logo twitter" />
            </a>
          </div>
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
              <Input type="text" name="name" placeholder="Your Company Co.">
                Workspace name
              </Input>
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

export default WorkpacePage;
