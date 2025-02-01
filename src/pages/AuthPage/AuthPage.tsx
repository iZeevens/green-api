import styles from "./AuthPage.module.css";
import { useState } from "react";
import InputAuth from "../../components/InputAuth/InputAuth";
import { IAuthData } from "../../types/types";

interface IAuthPageProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthPage({ setIsAuth }: IAuthPageProps) {
  const [authData, setAuthData] = useState<IAuthData>({
    idInstance: "",
    apiTokenInstance: "",
  });

  const handleSubmit = () => {
    const { idInstance, apiTokenInstance } = authData;

    localStorage.setItem("idInstance", idInstance);
    localStorage.setItem("apiTokenInstance", apiTokenInstance);
    setIsAuth(true)
  };

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
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
