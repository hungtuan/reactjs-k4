import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, loginWithPopup } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="container">
        <h1>Đăng nhập</h1>
        <button onClick={() => loginWithRedirect()}>Login</button>
      </div>
    )
  );
};

export default LoginButton;
