import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatSubmitMsg from "./ChatSubmitMsg/ChatSubmitMsg";
import ChatMsgs from "./ChatMsgs/ChatMsgs";
import { IMessage } from "../../types/types";

interface IChatProps {
  selectedUser: string;
  messages: IMessage[];
  onSendMessage: (message: string) => void;
  error?: string;
}


function Chat({ selectedUser, messages, onSendMessage, error }: IChatProps) {

  return (
    <div className={styles.chat}>
      <ChatHeader selectedUser={selectedUser} />
      <ChatMsgs messages={messages} error={error} />
      <ChatSubmitMsg onSendMessage={onSendMessage} />
    </div>
  );
}

export default Chat;
