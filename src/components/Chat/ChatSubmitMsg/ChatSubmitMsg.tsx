import styles from "./ChatSubmitMsg.module.css";
import { useState } from "react";

interface IChatSubmitMsgProps {
  onSendMessage: (message: string) => void;
}

function ChatSubmitMsg({ onSendMessage }: IChatSubmitMsgProps) {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <div className={styles.conatiner}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className={styles.submitBtn} onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default ChatSubmitMsg;
