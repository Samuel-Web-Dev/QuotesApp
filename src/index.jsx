import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { startTransition } from "react";

import "./index.css";
import App from "./App";


  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
