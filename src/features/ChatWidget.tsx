import { useState, useEffect, useRef } from "react";
import { useChat } from "../hooks/useChat";
import { useChatStore } from "../store/chatStore";
import ChatHeader from "../components/chat/ChatHeader";
import ChatLoader from "../components/chat/ChatLoader";
import { motion, AnimatePresence } from "framer-motion";
import { ChatInput } from "../components/chat/ChatInput";
import { ChatButton } from "../components/chat/ChatButton";
import { DatePicker } from "../components/picker/DatePicker";
import { TimePicker } from "../components/picker/TimePicker";
import { ChatMessage } from "../components/chat/ChatMessage";
import TicketSummary from "../components/chat/TicketSummary";

export default function ChatWidget() {
  const { sendMessage } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const { isOpen, messages, toggleChat, isLoading } = useChatStore();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Auto-scroll to last message
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowTimePicker(false);
  };

  const handleSendMessage = (message: string) => sendMessage(message);

  const handleChatToggle = () => {
    toggleChat();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-8 right-2 w-[90%] sm:w-3/5 sm:right-6 md:w-2/4 lg:w-2/5 2xl:w-1/4">
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ height: isOpen ? "auto" : isExpanded ? "106px" : "48px" }}
          transition={{ duration: 0.2 }}
          className="flex flex-col max-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {isOpen && (
            <>
              {/* Header */}
              <ChatHeader onClose={handleChatToggle} />

              {/* Chat Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 border-b">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    dateTimeTrigger={index === 3}
                    showDatePicker={() => setShowDatePicker(true)}
                    showTimePicker={() => setShowTimePicker(true)}
                  />
                ))}

                {/* Loading Indicator */}
                {isLoading && <ChatLoader />}

                {/* Ticket Summary */}
                {selectedDate && selectedTime && (
                  <TicketSummary
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onClose={handleChatToggle}
                  />
                )}

                {/* Auto-scroll Ref */}
                <div ref={messagesEndRef} />
              </div>

              {/* Date & Time Pickers */}
              <AnimatePresence>
                {showDatePicker && (
                  <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "60%", opacity: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="absolute bottom-[106px] top-16 left-0 right-0 bg-white rounded-t-lg overflow-hidden"
                  >
                    <DatePicker
                      onSelect={handleDateSelect}
                      onClose={() => setShowDatePicker(false)}
                    />
                  </motion.div>
                )}
                {showTimePicker && (
                  <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "60%", opacity: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="absolute bottom-[106px] top-16 left-0 right-0 bg-white shadow-lg rounded-t-lg overflow-hidden"
                  >
                    <TimePicker
                      onSelect={handleTimeSelect}
                      onClose={() => setShowTimePicker(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* Chat Input & Button */}
          {isExpanded && (
            <ChatInput
              disabled={messages.length === 4}
              onSend={handleSendMessage}
              isExpanded={isExpanded}
            />
          )}
          <div className="w-full z-50">
            <ChatButton
              onClick={() =>
                messages.length ? handleChatToggle() : setIsExpanded(true)
              }
              chatOpened={isOpen || isExpanded}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
