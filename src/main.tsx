import React from "react";
import { createRoot } from "react-dom/client";

/* App */
import App from "./App";

/* Context */
import { ToastContextProvider } from "./context/toastProvider.context";
import { AuthProvider } from "./context/authProvider.context";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
