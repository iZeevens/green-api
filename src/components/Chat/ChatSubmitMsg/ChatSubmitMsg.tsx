import styles from "./ChatSubmitMsg.module.css"
import { useState } from "react"

function ChatSubmitMsg() {
  const [message, setMessage] = useState<string>('');

  const setNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.conatiner}>
      <input className={styles.input} type="text" value={message} onChange={(e) => setNewMessage(e)} />
      <button className={styles.submitBtn}>Send</button>
    </div>
  )
}

export default ChatSubmitMsg