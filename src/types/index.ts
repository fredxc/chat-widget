export enum MessageType {
  Bot = "bot",
  User = "user",
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  type: MessageType;
}

export interface ChatState {
  isOpen: boolean;
  isLoading: boolean;
  toggleChat: () => void;
  messages: ReadonlyArray<Message>;
  setLoading: (loading: boolean) => void;
  addMessage: (message: Omit<Message, "id" | "timestamp">) => void;
}
