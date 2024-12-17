import React from "react";
import "../styles/ItemDataModal.css"; 

export default function Modal({ isVisible, onClose, title, children }) {
  if (!isVisible) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
