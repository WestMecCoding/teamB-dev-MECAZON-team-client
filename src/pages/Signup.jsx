import styles from "../styles/Signup.module.css";
import React, { useState } from "react";
import { validEmail, validPassword } from "../components/Regex";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
 const navigate = useNavigate();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Example regex for email
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example regex for password

  const validate = () => {
    const newErrors = {};

    if (!validEmail.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!validPassword.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include both letters and numbers.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
         localStorage.setItem("userEmail", email);
         localStorage.setItem("userPassword", password);
      console.log("Signup email:", email, "password:", password);
      navigate("/Login");
    }

  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}

        <button type="submit" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}
