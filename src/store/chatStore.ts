import { create } from "zustand";
import { ChatState, Message } from "../types";

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isOpen: false,
  isLoading: false,

  addMessage: (message: Omit<Message, "id" | "timestamp">) => {
    const newMessage: Message = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
      isOpen: state.isOpen ? state.isOpen : true,
    }));
  },

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
}));
