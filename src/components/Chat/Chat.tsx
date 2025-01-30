import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatSubmitMsg from "./ChatSubmitMsg/ChatSubmitMsg";

function Chat() {

  return (
    <div className={styles.chat}>
      <ChatHeader userName="bla bla bla" />

      <ChatSubmitMsg />
    </div>
  )
}

export default Chat;
