import styles from "./AuthPage.module.css";
import InputAuth from "../../components/InputAuth/InputAuth";

function AuthPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <InputAuth label="Id Instance" />
      <InputAuth label="Api token Instance" />
      <div className={styles.submitContainerBtn}>
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
}

export default AuthPage;
