// src/App.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import EmailForm from "./components/EmailForm";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <EmailForm />
          <LogoutButton />
        </>
      )}
    </>
  );
};

export default App;
