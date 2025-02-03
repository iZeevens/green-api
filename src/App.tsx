import styles from "./App.module.css";
import { useAuth } from "./hooks/useAuth";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  const { isAuth } = useAuth();

  return (
    <div className={styles.container}>
      {isAuth ? <ChatPage /> : <AuthPage />}
    </div>
  );
}

export default App;
