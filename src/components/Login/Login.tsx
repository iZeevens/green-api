import styles from "./Login.module.css";
import { useState } from "react";
import InputAuth from "../InputAuth/InputAuth";
import { IAuthData } from "../../types/types";

function Login() {
  const [authData, setAuthData] = useState<IAuthData>({
    idInstance: "",
    apiTokenInstance: "",
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <InputAuth<IAuthData>
        label="Id Instance"
        name="idInstance"
        value={authData.idInstance}
        setValue={setAuthData}
      />
      <InputAuth<IAuthData>
        label="Api token Instance"
        name="apiTokenInstance"
        value={authData.apiTokenInstance}
        setValue={setAuthData}
      />
      <div className={styles.submitContainerBtn}>
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
