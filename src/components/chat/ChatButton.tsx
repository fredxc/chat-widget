interface ChatButtonProps {
  onClick: () => void;
  chatOpened: boolean;
}

export function ChatButton({ onClick, chatOpened }: ChatButtonProps) {
  return (
    <div className="flex items-center bg-white overflow-hidden">
      <button
        onClick={onClick}
        className={`flex-1 px-6 py-3 border-r font-semibold hover:bg-gray-50 ${
          chatOpened ? "bg-neutral-100 text-gray-800" : "text-gray-600"
        }`}
      >
        BOOK TICKETS
      </button>
      <div className="w-px h-full bg-gray-200" />
      <button
        onClick={onClick}
        className="flex-1 px-6 py-3 text-gray-600 border-r font-semibold hover:bg-gray-50"
      >
        NEED HELP?
      </button>
      <div className="w-px h-full bg-gray-200" />
      <div className="relative px-4">
        <img src="/assets/bot-logo.svg" alt="Bot Icon" className="h-8" />
      </div>
      <div className="absolute bottom-1 right-2 w-2 h-2 bg-green-400 rounded-full border-white" />
    </div>
  );
}
