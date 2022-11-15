import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import CalendarApp from "./CalendarApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalendarApp />
    </Provider>
  </React.StrictMode>
);
