import React from "react";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h2>Login</h2>

      {isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
};

export default Login;