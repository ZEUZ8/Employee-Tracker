import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FpjsProvider loadOptions={{apiKey:"ogZB5nGdOj9BxyaKNzCq"}}>
      <AppProvider>
        <App />
      </AppProvider>
    </FpjsProvider>
  </React.StrictMode>
);
