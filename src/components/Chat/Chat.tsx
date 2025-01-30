import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatSubmitMsg from "./ChatSubmitMsg/ChatSubmitMsg";

interface IChatProps {
  selectedUser: string;
}

function Chat({ selectedUser }: IChatProps) {
  return (
    <div className={styles.chat}>
      <ChatHeader selectedUser={selectedUser} />

      <ChatSubmitMsg />
    </div>
  );
}

export default Chat;
