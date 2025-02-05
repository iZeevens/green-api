import styles from "./ChatPage.module.css";
import { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import ChatContainer from "../../components/Chat/ChatContainer/ChatContainer";

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<string>('');

  return (
    <div className={styles.container}>
      <UsersList setSelectedUser={setSelectedUser} />
      <ChatContainer selectedUser={selectedUser} />
    </div>
  );
}

export default ChatPage;
