import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader/ChatHeader";

function Chat() {

  return (
    <div className={styles.chat}>
      <ChatHeader userName="bla bla bla" />
    </div>
  )
}

export default Chat;
