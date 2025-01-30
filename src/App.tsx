import styles from "./App.module.css"
import AuthPage from "./pages/AuthPage/AuthPage"
import ChatPage from "./pages/ChatPage/ChatPage"

function App() {

  

  return (
    <div className={styles.container}>
      <ChatPage />
    </div>
  )
}

export default App
