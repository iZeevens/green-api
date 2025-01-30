import styles from "./ChatPage.module.css";
import UsersList from "../../components/UsersList/UsersList";

function ChatPage() {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
}

export default ChatPage;
