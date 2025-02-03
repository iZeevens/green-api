import styles from "./ExitBtn.module.css";
import { useAuth } from "../../../hooks/useAuth";

function ExitBtn() {
  const { setIsAuth } = useAuth();

  const handleBtnExit = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  return (
    <button onClick={handleBtnExit} className={styles.btnExit}>
      Exit
    </button>
  );
}

export default ExitBtn;
