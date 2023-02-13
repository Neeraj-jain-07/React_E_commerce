import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import {CartProvider} from './context/cartContext'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
      <FilterProvider>
        <CartProvider>
        <App />
       </CartProvider>
      </FilterProvider>
    </AppProvider>
);


