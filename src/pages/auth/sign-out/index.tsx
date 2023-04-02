import { SignIn } from "@/features/signIn";

import styles from "./styles.module.css";

const SignOutPage = () => {
  return (
    <main className={styles.root}>
      Sign Out Page
      <SignIn className={styles.form} />
    </main>
  );
};

export default SignOutPage;
