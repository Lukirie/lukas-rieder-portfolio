import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress third-party warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('feature_collector')) {
    return; // Suppress feature_collector warnings
  }
  originalWarn(...args);
};

createRoot(document.getElementById("root")!).render(<App />);
