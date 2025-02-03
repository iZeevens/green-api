import styles from "./ChatHeader.module.css";
import ExitBtn from "../ExitBtn/ExitBtn";

interface IChatHeaderProps {
  selectedUser: string;
}

function ChatHeader({ selectedUser }: IChatHeaderProps) {
  return (
    <header className={styles.head}>
      <span className={styles.name}>{selectedUser}</span>
      <ExitBtn />
    </header>
  );
}

export default ChatHeader;
