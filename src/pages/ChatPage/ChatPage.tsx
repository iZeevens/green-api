import styles from "./ChatPage.module.css";
import { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import Chat from "../../components/Chat/Chat";

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<string>('');

  return (
    <div className={styles.container}>
      <UsersList setSelectedUser={setSelectedUser} />
      <Chat selectedUser={selectedUser} />
    </div>
  );
}

export default ChatPage;
