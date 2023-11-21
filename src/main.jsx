import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Auth0Provider
      domain="dev-e50e3xqpjbsxgfv0.us.auth0.com"
      clientId="VW3pXHBrRrgJlFqllecVowSdf3fSU74a"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Router>
);
