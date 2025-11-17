import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Your main App component
import App from "./App.jsx";

// React Router: top-level router wrapper
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* React Router must wrap your whole app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
