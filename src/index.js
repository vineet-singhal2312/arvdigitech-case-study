import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PieChartProvider } from "./provider/pieChartProvider/PieChartProvider";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PieChartProvider>
        <App />
      </PieChartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
