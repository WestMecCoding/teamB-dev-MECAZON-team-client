import styles from "../styles/Signup.module.css";
import React, { useState } from "react";
import { validEmail, validPassword } from "../components/Regex";
import Signup from "./Signup";
import {  useNavigate } from "react-router-dom";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({ email: "", password: "" });
   const [signupInfo, setSignupInfo] = useState(null);
   const navigate = useNavigate(); // Hook for navigation

   // Regular expressions for validation
   const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
   const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password regex (at least 8 chars, 1 letter, 1 digit)

   // Handle form validation
   const validate = () => {
     const newErrors = {};

     if (!validEmail.test(email)) {
       newErrors.email = "Invalid email format.";
     }

     if (!validPassword.test(password)) {
       newErrors.password =
         "Password must be at least 8 characters long and include both letters and numbers.";
     }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };

   // Handle login
   const handleLogin = (e) => {
     e.preventDefault();
     if (validate()) {
       // Retrieve stored email and password from localStorage
       const storedEmail = localStorage.getItem("userEmail");
       const storedPassword = localStorage.getItem("userPassword");

       // Validate the entered email and password against the stored values
       if (email === storedEmail && password === storedPassword) {
         console.log("Login Successful");
         setSignupInfo({ email, password });

         // Redirect to the home page
         navigate("/");
       } else {
         setErrors({
           email: "Invalid email or password",
           password: "Invalid email or password",
         });
       }
     }
   };

   return (
     <div className={styles.container}>
       <h2>Login</h2>
       <form onSubmit={handleLogin} className={styles.form}>
         <div className={styles.inputGroup}>
           <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className={styles.input}
             required
           />
           {errors.email && <p className={styles.error}>{errors.email}</p>}
         </div>

         <div className={styles.inputGroup}>
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className={styles.input}
             required
           />
           {errors.password && (
             <p className={styles.error}>{errors.password}</p>
           )}
         </div>

         <button type="submit" className={styles.button}>
           Login
         </button>
       </form>

       {/* Show collected info after successful login */}
       {signupInfo && (
         <div className={styles.signupInfo}>
           <h3>Collected Login Information:</h3>
           <p>Email: {signupInfo.email}</p>
           <p>Password: (hidden)</p>{" "}
           {/* Don't display the actual password for security reasons */}
         </div>
       )}
     </div>
   );
}
