import { FC } from "react";
import cn from "classnames";

import { Head } from "@/shared/ui/Head";
import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import {
  Bell,
  Burger,
  Customers,
  Gear,
  LayersTwo,
  PlusBlue,
  PlusCircle,
  PlusWhite,
  SearchBlueIcon,
  SearchIcon,
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
      <Head>
        <title>DSAspro: a brand new task management tool — Boards</title>
      </Head>
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
          <section className={styles.boards}>
            <div className={styles.box}>
              <h2 className={styles.heading}>Boards</h2>
              <Input
                type="email"
                name="email"
                placeholder="Search"
                className={styles.input}
              >
                <SearchIcon />
              </Input>
            </div>
          </section>
          <section className={styles.whiteboard}>
            <div className={styles.cardPlus}>
              <div className={styles.append}>
                <PlusCircle />
                <p className={styles.wording}>Create new board</p>
              </div>
            </div>
            <div className={styles.card}>
              <p className={styles.sprint}>
                Sprint #3 (03.04.2023 - 10.04.2023)
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.sprint}>
                Sprint #3 (03.04.2023 - 10.04.2023)
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.sprint}>
                Sprint #3 (03.04.2023 - 10.04.2023)
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.sprint}>
                Sprint #3 (03.04.2023 - 10.04.2023)
              </p>
            </div>
            <div className={styles.card}>
              <p className={styles.sprint}>
                Sprint #3 (03.04.2023 - 10.04.2023)
              </p>
            </div>
          </section>
          <section className={styles.start}>
            <button className={styles.plus}>
              <SearchBlueIcon />
            </button>
            <p className={styles.startup}>No boards found</p>
            <p className={styles.text}>
              Your search “Board name” did not match any boards. Please try
              again.
            </p>
            <div className={styles.buttonBox}>
              <Button className={styles.buttonWhite}>Clear search</Button>
              <Button className={styles.button}>
                <PlusWhite />
                New board
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BoardsPage;
