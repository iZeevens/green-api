import styles from "./App.module.css";
import { useState } from "react";
import useAuth from "./hooks/useAuth";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  const {authConfig} = useAuth()
  const [isAuth, setIsAuth] = useState<boolean>(authConfig.isAuth)

  return (
    <div className={styles.container}>
      {isAuth ? <ChatPage /> : <AuthPage setIsAuth={setIsAuth} />}
    </div>
  );
}

export default App;
