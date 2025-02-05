interface IAuthData {
  idInstance: string;
  apiTokenInstance: string;
}

interface IMessage {
  type: "outgoing" | "incoming";
  idMessage: string;
  timestamp: number;
  textMessage: string;
  extendedTextMessage?: {
    text?: string;
    description: string;
    title: string;
  };
}

interface INotification {
  typeWebhook: string;
  idMessage: string;
  messageData: {
    typeMessage: "textMessage";
    textMessageData: {
      textMessage: string;
    };
    extendedTextMessageData: {
      text: string;
    };
  };
  timestamp: number;

  senderData: {
    chatId: string;
    chatName: string;
    sender: string;
  };
}

export type { IAuthData, IMessage, INotification };
