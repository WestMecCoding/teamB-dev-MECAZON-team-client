import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Modal.module.css";

const UserStatusModal = () => {
  const [userStatus, setUserStatus] = useState("guest"); // Default to guest
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // Check localStorage for user data on page load
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const password = localStorage.getItem("userPassword");

    if (email && password) {
      setUserStatus("registered");
    } else {
      setUserStatus("guest");
    }

    setIsModalVisible(true); // Show modal on page load
  }, []);

  // Handle redirects based on user status
  const handleRedirect = () => {
    if (userStatus === "guest") {
      navigate("/signup"); // Redirect to Signup Page
    } else if (userStatus === "registered") {
      navigate("/login"); // Redirect to Login Page
    }
  };

  // Hide the modal if not visible
  if (!isModalVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome!</h2>
        {userStatus === "guest" && (
          <p>You are a Guest. Please sign up to continue.</p>
        )}
        {userStatus === "registered" && (
          <p>You are already registered. Please log in to continue.</p>
        )}
        <button onClick={handleRedirect}>
          {userStatus === "guest" ? "Go to Sign Up" : "Go to Login"}
        </button>
      </div>
    </div>
  );
};

export default UserStatusModal;
