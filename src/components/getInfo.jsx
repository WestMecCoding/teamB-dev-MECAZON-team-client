import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const getInfo = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Handle the sign-up and store credentials
  const handleSignup = (email, password) => {
    setCredentials({ email, password });
  };

  // Validate login credentials and return true/false
  const handleLogin = (email, password) => {
    if (email === credentials.email && password === credentials.password) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Signup onSignup={handleSignup} />
      <Login onLogin={handleLogin} />
    </div>
  );
};
export default getInfo