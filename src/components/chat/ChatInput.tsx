import { useState } from "react";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSend: (message: string) => void;
  isExpanded: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSend, isExpanded, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 border-b bg-white z-50"
    >
      <input
        type="text"
        value={message}
        disabled={disabled || false}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type and press [enter]"
        className={`flex-1 px-2 py-4 text-gray-700 bg-white focus:outline-none ${
          disabled && "cursor-not-allowed"
        }`}
        autoFocus={isExpanded}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={!message.trim()}
        className={`p-2 rounded-full transition-colors ${
          message.trim() ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.666 7.41785C14.6666 7.71335 14.5866 8.00296 14.4351 8.25301C14.2837 8.50305 14.0671 8.70324 13.8105 8.83031L2.81664 14.246C2.61542 14.3601 2.39252 14.4267 2.16376 14.4411C1.91342 14.4406 1.6672 14.3749 1.44749 14.2502C1.22779 14.1254 1.04159 13.9455 0.905842 13.7267C0.770095 13.508 0.689114 13.2575 0.670273 12.9979C0.651432 12.7383 0.695328 12.4779 0.797966 12.2405L2.50896 8.19821H6.66637C6.8654 8.19821 7.05627 8.116 7.19701 7.96965C7.33774 7.8233 7.41681 7.62481 7.41681 7.41785C7.41681 7.21088 7.33774 7.01239 7.19701 6.86605C7.05627 6.7197 6.8654 6.63748 6.66637 6.63748H2.50896L0.797966 2.63421C0.673988 2.3433 0.638482 2.01993 0.696206 1.70744C0.753931 1.39495 0.902128 1.10828 1.12094 0.885838C1.33974 0.663397 1.61871 0.51582 1.92044 0.462882C2.22217 0.409945 2.53226 0.454179 2.80913 0.589654L13.803 6.00539C14.061 6.13133 14.2791 6.33105 14.4319 6.58117C14.5848 6.8313 14.666 7.1215 14.666 7.41785Z"
            fill="white"
          />
        </svg>
      </motion.button>
    </form>
  );
}
