import styles from "./ChatPage.module.css";
import UsersList from "../../components/UsersList/UsersList";
import Chat from "../../components/Chat/Chat";

function ChatPage() {
  return (
    <div className={styles.container}>
      <UsersList />
      <Chat />
    </div>
  );
}

export default ChatPage;
