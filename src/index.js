import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import {CartProvider} from './context/cartContext'
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
let domainOfAuth = process.env.REACT_APP_DOAMIN;
let clientOfAuth = process.env.REACT_APP_CLIENTID;


root.render(
  <Auth0Provider
  domain={domainOfAuth}
  clientId={clientOfAuth}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <AppProvider>
      <FilterProvider>
        <CartProvider>
        <App />
       </CartProvider>
      </FilterProvider>
    </AppProvider>
    </Auth0Provider>
);


