import { MessageType } from "../types";
import { useChatStore } from "../store/chatStore";
import { useMutation } from "@tanstack/react-query";
import { getBotResponse } from "../services/chatService";

export function useChat() {
  const { addMessage, setLoading } = useChatStore();

  const mutation = useMutation<string, Error, string>({
    mutationFn: getBotResponse,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (response) => {
      addMessage({ content: response, type: MessageType.Bot });
    },
    onError: (error) => {
      console.error("Error fetching bot response:", error);
      addMessage({
        content: "Oops! Something went wrong. Try again.",
        type: MessageType.Bot,
      });
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const sendMessage = (content: string) => {
    addMessage({ content, type: MessageType.User });
    mutation.mutate(content);
  };

  return { sendMessage, isLoading: mutation.isPending };
}
