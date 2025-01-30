import styles from "./ChatHeader.module.css";

interface IChatHeaderProps {
  userName: string;
}

function ChatHeader({ userName }: IChatHeaderProps) {
  return (
    <header>
      <span>{userName}</span>
    </header>
  );
}

export default ChatHeader;
