import styles from "./ChatSubmitMsg.module.css"

function ChatSubmitMsg() {

  return (
    <div className={styles.conatiner}>
      <input className={styles.input} type="text" />
      <button className={styles.submitBtn}>Send</button>
    </div>
  )
}

export default ChatSubmitMsg