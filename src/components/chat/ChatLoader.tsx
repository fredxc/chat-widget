export default function ChatLoader() {
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.2s]"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.4s]"></div>
    </div>
  );
}
