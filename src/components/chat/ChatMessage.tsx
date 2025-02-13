import { Message } from "../../types";
import { Calendar, Clock } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  dateTimeTrigger?: boolean;
  showDatePicker: () => void;
  showTimePicker: () => void;
  selectedDate?: Date | null;
  selectedTime?: string | null;
}

export function ChatMessage({
  message,
  selectedDate,
  selectedTime,
  showDatePicker,
  showTimePicker,
  dateTimeTrigger,
}: ChatMessageProps) {
  const isBot = message.type === "bot";

  return (
    <div className={`flex w-full ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`${
          dateTimeTrigger ? "max-w-[95%]" : "max-w-[80%]"
        } rounded-xl px-4 py-4 ${
          isBot
            ? "bg-neutral-100 text-gray-800 rounded-bl-none"
            : "bg-sky-300 font-semibold rounded-br-none"
        }`}
      >
        <p className="text-sm">{message.content}</p>
        {isBot && dateTimeTrigger && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={showDatePicker}
              className="flex-1 flex items-center font-medium justify-between bg-white rounded-xl py-2 px-4 hover:bg-gray-50"
            >
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Select Date"}
              <Calendar size={16} />
            </button>
            <button
              onClick={showTimePicker}
              className="flex-1 flex items-center font-medium justify-between bg-white rounded-xl py-2 px-4 hover:bg-gray-50"
            >
              {selectedTime || "Select Time"}
              <Clock size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
