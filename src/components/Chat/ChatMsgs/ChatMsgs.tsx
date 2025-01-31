import styles from "./ChatMsgs.module.css";
import { useCallback, useEffect } from "react";

interface IChatMsgsProps {
  selectedUser: string;
}

function ChatMsgs({ selectedUser }: IChatMsgsProps) {
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

      console.log(request);
    }
  }, [selectedUser]);

  useEffect(() => {
    handleMsgs();
  }, [selectedUser ,handleMsgs]);

  return (
    <div className={styles.container}>
      <span>3</span>
      <span>5</span>
      <span>7</span>
    </div>
  );
}

export default ChatMsgs;
