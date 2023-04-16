import { FC } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";

import burgerSvg from "./burger.svg";
import gearSvg from "./gear.svg";
import usersSvg from "./users.svg";
import plusSvg from "./plus.svg";
import plusWhiteSvg from "./plus-white.svg";
import layersSvg from "./layers-two.svg";
import userSvg from "./user.svg";
import bellSvg from "./bell.svg";
import customersSvg from "./customers.svg";
import styles from "./styles.module.css";

interface Props {
  classNames?: string;
}

const BoardsPage: FC<Props> = ({ classNames }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.module}>
            <div className={styles.blockleft}>
              <Logo className={styles.logo}>DSAspro</Logo>
              <nav className={styles.panel}>
                <a href="/" className={styles.info}>
                  <img src={layersSvg} alt="" />
                  <span className={styles.span}>Boards</span>
                </a>
                <a href="/" className={styles.infowhite}>
                  <img src={userSvg} alt="" />
                  <span className={styles.span}>Members</span>
                </a>
              </nav>
            </div>
            <div className={styles.blockright}>
              <a href="/" className={styles.burger}>
                <img src={burgerSvg} alt="the icon that opens the menu" />
              </a>
              <div className={styles.ring}>
                <img src={bellSvg} alt="" />
              </div>
              <div className={styles.user}>
                <img src={customersSvg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.team}>
            <div className={styles.appellation}>
              <div className={styles.round}>
                <p className={styles.abbreviation}>JU</p>
              </div>
              <div className={styles.caption}>
                <h1 className={styles.title}>Junior Frontend Mentorship</h1>
                <a href="/" className={styles.subtitle}>
                  Private
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <Button className={styles.white}>
                <img src={gearSvg} alt="icon gear wheel" />
                Settings
              </Button>
              <Button>
                <img src={usersSvg} alt="icon users plus" />
                Invite members
              </Button>
            </div>
          </section>
          <section className={styles.start}>
            <button className={styles.plus}>
              <img src={plusSvg} alt="" />
            </button>
            <p className={styles.startup}>Start by creating a board</p>
            <p className={styles.text}>
              Your boards will live here. Start creating by clicking on «New
              board»
            </p>
            <Button className={styles.button}>
              <img src={plusWhiteSvg} alt="" />
              New board
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default BoardsPage;
