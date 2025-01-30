import styles from "./ChatHeader.module.css";

interface IChatHeaderProps {
  selectedUser: string;
}

function ChatHeader({ selectedUser }: IChatHeaderProps) {
  return (
    <header className={styles.head}>
      <span className={styles.name}>{selectedUser}</span>
    </header>
  );
}

export default ChatHeader;
