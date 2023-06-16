import React from "react"
import ReactDom from 'react-dom';
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext"
import { ParkProvider } from "./contexts/ParkContext";

ReactDom.render(
  <React.StrictMode>
    <ParkProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ParkProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);