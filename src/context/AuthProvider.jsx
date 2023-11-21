// src/context/AuthProvider.js
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const domain = "dev-e50e3xqpjbsxgfv0.us.auth0.com";
  const clientId = "VW3pXHBrRrgJlFqllecVowSdf3fSU74a";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
