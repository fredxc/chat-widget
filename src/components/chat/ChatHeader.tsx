import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-red-500 px-4 py-4">
      <img
        src="/assets/tickets-logo.svg"
        alt="Tours & Tickets"
        className="w-1/2 sm:w-auto"
      />
      <div className="flex items-center gap-2 sm:gap-4">
        <img
          alt="Cart"
          src="/assets/icons/cart-icon.svg"
          className="bg-red-400 p-2 rounded-full"
        />
        <button
          onClick={onClose}
          className="text-white hover:bg-red-600 bg-red-400 transition duration-150 p-2 rounded-full"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
