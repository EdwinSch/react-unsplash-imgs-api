import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Styles
import "./index.css";
// Global context provider
import { AppProvider } from "./context.jsx";
// React query provider
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
// React query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
);
