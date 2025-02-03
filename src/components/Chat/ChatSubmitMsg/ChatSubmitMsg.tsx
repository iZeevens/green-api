import styles from "./ChatSubmitMsg.module.css";
import { useState } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";

interface IChatSubmitMsgProps {
  selectedUser: string;
}

function ChatSubmitMsg({ selectedUser }: IChatSubmitMsgProps) {
  const [message, setMessage] = useState<string>("");
  const { authConfig } = useAuthInfo();
  const { idInstance, apiTokenInstance, apiUrl } = authConfig;

  const setNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    setMessage("");

    await fetch(
      `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: `${selectedUser.slice(1)}@c.us`,
          message,
        }),
      }
    );
  };

  return (
    <div className={styles.conatiner}>
      <input
        className={styles.input}
        type="text"
        value={message}
        onChange={(e) => setNewMessage(e)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button className={styles.submitBtn} onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatSubmitMsg;
