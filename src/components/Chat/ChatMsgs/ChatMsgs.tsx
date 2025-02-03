import styles from "./ChatMsgs.module.css";
import { useState, useCallback, useEffect } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";
import { IMessage } from "../../../types/types";

interface IChatMsgsProps {
  selectedUser: string;
}

function ChatMsgs({ selectedUser }: IChatMsgsProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState<string>("");
  const { authConfig } = useAuthInfo();
  const { idInstance, apiTokenInstance, apiUrl } = authConfig;

  const fetchMessages = useCallback(async () => {
    if (!selectedUser) return;

    try {
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
    } catch (error) {
      if (error instanceof Error) {
        setError(`Error: ${error.message}`);
      }
    }
  }, [selectedUser, apiTokenInstance, apiUrl, idInstance]);

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(fetchMessages, 5000);

    return () => clearInterval(interval);
  }, [selectedUser, fetchMessages]);

  return (
    <div className={styles.container}>
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        messages.map((item) =>
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
        )
      )}
    </div>
  );
}

export default ChatMsgs;
