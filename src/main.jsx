import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import store from "./store";
import { getAccessToken } from "./utils/localstorage";
import { FetchMe } from "./slice/authSlice";

if (getAccessToken()) {
  store.dispatch(FetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SidebarProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </SidebarProvider>
  </Provider>
);
