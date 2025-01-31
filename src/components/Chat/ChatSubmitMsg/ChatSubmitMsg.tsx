import styles from "./ChatSubmitMsg.module.css";
import { useState } from "react";

interface IChatSubmitMsgProps {
  selectedUser: string;
}

function ChatSubmitMsg({ selectedUser }: IChatSubmitMsgProps) {
  const [message, setMessage] = useState<string>("");

  const setNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const idInstance = localStorage.getItem("idInstance");
    const apiTokenInstance = localStorage.getItem("apiTokenInstance");

    const apiUrl = `https://${idInstance?.slice(0, 4)}.api.greenapi.com`;

    const request = await fetch(
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
      />
      <button className={styles.submitBtn} onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatSubmitMsg;
