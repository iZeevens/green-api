import styles from "./ChatMsgs.module.css";
import { useState, useCallback, useEffect } from "react";
import { IMessage } from "../../../types/types";

interface IChatMsgsProps {
  selectedUser: string;
}

function ChatMsgs({ selectedUser }: IChatMsgsProps) {
  const [messages, setMessages] = useState<IMessage[]>([])

  const handleMsgs = useCallback(async () => {
    const idInstance = localStorage.getItem("idInstance");
    const apiTokenInstance = localStorage.getItem("apiTokenInstance");

    const apiUrl = `https://${idInstance?.slice(0, 4)}.api.greenapi.com`;

    if (selectedUser) {
      const request = await fetch(
        `${apiUrl}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId: `${selectedUser.slice(1)}@c.us`,
            count: 100
          }),
        }
      );

      const msgs = await request.json()

      setMessages(msgs)
    }
  }, [selectedUser]);

  useEffect(() => {
    handleMsgs();
  }, [selectedUser ,handleMsgs]);

  return (
    <div className={styles.container}>
      {messages.map((item) => (
        <div key={item.idMessage} className={styles.chatMsg}>
          <span>{item.textMessage}</span>
          <span>{new Date(item.timestamp * 1000).toLocaleDateString()}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatMsgs;
