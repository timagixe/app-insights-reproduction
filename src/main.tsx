import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  AppInsightsProvider,
  ErrorBoundary,
} from "./application-insights/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppInsightsProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppInsightsProvider>
  </StrictMode>
);
