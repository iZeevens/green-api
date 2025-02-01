import styles from "./ChatMsgs.module.css";
import { useState, useCallback, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { IMessage } from "../../../types/types";

interface IChatMsgsProps {
  selectedUser: string;
}

function ChatMsgs({ selectedUser }: IChatMsgsProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { authConfig } = useAuth();
  const { idInstance, apiTokenInstance, apiUrl } = authConfig;

  const fetchMessages = useCallback(async () => {
    if (!selectedUser) return;

    const request = await fetch(
      `${apiUrl}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: `${selectedUser.slice(1)}@c.us`,
          count: 10,
        }),
      }
    );

    const msgs = await request.json();

    setMessages(msgs.reverse());
  }, [selectedUser, apiTokenInstance, apiUrl, idInstance]);

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(fetchMessages, 5000);

    return () => clearInterval(interval);
  }, [selectedUser, fetchMessages]);

  return (
    <div className={styles.container}>
      {messages.map((item) =>
        item.textMessage ? (
          <div
            key={item.idMessage}
            className={`${styles.chatMsg} ${
              item.type === "incoming" ? styles.incoming : styles.outcoming
            }`}
          >
            <span>{item.textMessage}</span>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default ChatMsgs;
