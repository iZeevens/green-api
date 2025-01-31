interface IAuthData {
  idInstance: string;
  apiTokenInstance: string;
}

interface IMessage {
  type: 'outgoing' | 'incoming',
  idMessage: string,
  timestamp: number,
  textMessage: string,
  extendedTextMessage: {
    text?: string,
    description: string,
    title: string
  }
}

export type { IAuthData, IMessage };
