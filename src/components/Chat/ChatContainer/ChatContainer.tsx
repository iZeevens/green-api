import { useState, useCallback, useEffect, useRef } from "react";
import useAuthInfo from "../../../hooks/useAuthInfo";
import Chat from "../Chat";
import { IMessage, INotification } from "../../../types/types";

interface IChatContainerProps {
  selectedUser: string;
}

function ChatContainer({ selectedUser }: IChatContainerProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [error, setError] = useState<string>("");
  const { authConfig } = useAuthInfo();
  const { idInstance, apiTokenInstance, apiUrl } = authConfig;
  const pollingRef = useRef(true);

  const fetchChatHistory = useCallback(async () => {
    if (!selectedUser) return;
    try {
      const response = await fetch(
        `${apiUrl}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `${selectedUser.slice(1)}@c.us`,
            count: 10,
          }),
        }
      );
      const msgs = await response.json();
      if (Array.isArray(msgs)) {
        setMessages(msgs.reverse());
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }, [selectedUser, apiUrl, idInstance, apiTokenInstance]);

  useEffect(() => {
    fetchChatHistory();
  }, [selectedUser, fetchChatHistory]);

  const pollNotifications = useCallback(async () => {
    if (!selectedUser) return;
    while (pollingRef.current) {
      try {
        const response = await fetch(
          `${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
        );
        const data = await response.json();

        if (data && data.body) {
          const notification = data.body as INotification;

          const senderId = notification.senderData?.sender;
          const formattedSender = senderId
            ? `+${senderId.slice(0, -5)}`
            : undefined;

          if (
            formattedSender &&
            selectedUser === formattedSender &&
            notification?.messageData &&
            !notification.typeWebhook.includes("outgoing")
          ) {
            const msg =
              notification.messageData?.textMessageData?.textMessage ||
              notification.messageData?.extendedTextMessageData?.text;
            const newMessage: IMessage = {
              idMessage: Date.now().toString(),
              textMessage: msg,
              type: "incoming",
              timestamp: notification.timestamp,
            };

            setMessages((prev) => [...prev, newMessage]);
          }
          await fetch(
            `${apiUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`,
            { method: "DELETE" }
          );
        }
      } catch (error) {
        console.error("Ошибка получения уведомления:", error);
      }
    }
  }, [selectedUser, apiUrl, idInstance, apiTokenInstance]);

  useEffect(() => {
    pollingRef.current = true;
    pollNotifications();
    return () => {
      pollingRef.current = false;
    };
  }, [pollNotifications]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const newMessage: IMessage = {
      idMessage: Date.now().toString(),
      textMessage: message,
      type: "outgoing",
      timestamp: Date.now(),
    };
    
    setMessages((prev) => [...prev, newMessage]);

    try {
      await fetch(
        `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `${selectedUser.slice(1)}@c.us`,
            message,
          }),
        }
      );
    } catch (err) {
      console.error("Ошибка отправки сообщения:", err);
    }
  };

  return (
    <Chat
      selectedUser={selectedUser}
      messages={messages}
      onSendMessage={handleSendMessage}
      error={error}
    />
  );
}

export default ChatContainer;
