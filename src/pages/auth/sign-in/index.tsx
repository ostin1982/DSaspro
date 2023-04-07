import { SignIn } from "@/features/signIn";

import styles from "./styles.module.css";

const SignInPage = () => {
  return (
    <main className={styles.root}>
      Sign In Page
      <SignIn className={styles.form} />
    </main>
  );
};

export default SignInPage;
