import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/LoginButton.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="logout">
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
  );
};

export default LogoutButton;
