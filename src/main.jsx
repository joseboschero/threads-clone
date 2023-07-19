import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
