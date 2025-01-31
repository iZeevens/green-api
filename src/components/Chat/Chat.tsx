import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatSubmitMsg from "./ChatSubmitMsg/ChatSubmitMsg";
import ChatMsgs from "./ChatMsgs/ChatMsgs";

interface IChatProps {
  selectedUser: string;
}

function Chat({ selectedUser }: IChatProps) {

  return (
    <div className={styles.chat}>
      <ChatHeader selectedUser={selectedUser} />
      <ChatMsgs selectedUser={selectedUser} />
      <ChatSubmitMsg selectedUser={selectedUser} />
    </div>
  );
}

export default Chat;
