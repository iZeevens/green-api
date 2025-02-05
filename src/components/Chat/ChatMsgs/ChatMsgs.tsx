import styles from "./ChatMsgs.module.css";
import { useEffect, useRef } from "react";
import { IMessage } from "../../../types/types";

interface IChatMsgsProps {
  messages: IMessage[];
  error: string | undefined
}

function ChatMsgs({ messages, error }: IChatMsgsProps) {
  const contianerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contianerRef.current) return

    contianerRef.current.scrollTop = contianerRef.current.scrollHeight
  }, [messages])

  return (
    <div className={styles.container} ref={contianerRef}>
      {error ? <span className={styles.error}>{error}</span> : ''}
      {messages ? messages.map((item) =>
        item.textMessage || item.extendedTextMessage?.text ? (
          <div
            key={item.idMessage}
            className={`${styles.chatMsg} ${
              item.type === "incoming" ? styles.incoming : styles.outcoming
            }`}
          >
            <span>{item.textMessage || item.extendedTextMessage?.text}</span>
          </div>
        ) : null
      ) : ''}
    </div>
  );
}

export default ChatMsgs;
