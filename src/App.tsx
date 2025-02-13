import { lazy, Suspense } from "react";
import { RefreshCw } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ChatWidget = lazy(() => import("./features/ChatWidget"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-light text-gray-600">
          Welcome to Tours & Tickets
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-400 text-white transition duration-150 rounded-xl"
        >
          <RefreshCw size={16} />
          Refresh Page
        </button>
      </div>

      {/* Chat Component Loading State */}
      <Suspense
        fallback={
          <div className="fixed bottom-8 right-6 flex items-center justify-center w-12 h-12 bg-white rounded-full animate-spin">
            <RefreshCw className="text-red-500" size={16} />
          </div>
        }
      >
        <ChatWidget />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
