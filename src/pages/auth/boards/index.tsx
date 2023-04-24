import { FC } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";
import {
  Bell,
  Burger,
  Customers,
  Gear,
  LayersTwo,
  PlusBlue,
  PlusWhite,
  UserIcon,
  UsersIcon,
} from "@/shared/ui/Icon";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const BoardsPage: FC<Props> = ({ className }) => {
  return (
    <>
      <header className={cn(styles.header, className)}>
        <div className={styles.container}>
          <div className={styles.module}>
            <div className={styles.blockleft}>
              <Logo className={styles.logo}>DSAspro</Logo>
              <nav className={styles.panel}>
                <a href="/" className={styles.info}>
                  <LayersTwo />
                  <span className={styles.span}>Boards</span>
                </a>
                <a href="/" className={styles.infowhite}>
                  <UserIcon />
                  <span className={styles.span}>Members</span>
                </a>
              </nav>
            </div>
            <div className={styles.blockright}>
              <a href="/" className={styles.burger}>
                <Burger />
              </a>
              <div className={styles.ring}>
                <Bell />
              </div>
              <div className={styles.user}>
                <Customers />
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
                <p className={styles.title}>Junior Frontend Mentorship</p>
                <a href="/" className={styles.subtitle}>
                  Private
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <Button className={styles.white}>
                <Gear className={styles.gear} />
                Settings
              </Button>
              <Button>
                <UsersIcon />
                Invite members
              </Button>
            </div>
          </section>
          <section className={styles.start}>
            <button className={styles.plus}>
              <PlusBlue />
            </button>
            <p className={styles.startup}>Start by creating a board</p>
            <p className={styles.text}>
              Your boards will live here. Start creating by clicking on «New
              board»
            </p>
            <Button className={styles.button}>
              <PlusWhite />
              New board
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default BoardsPage;
