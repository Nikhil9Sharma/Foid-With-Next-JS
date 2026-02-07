"use client";

import { useState } from "react";
import "../../Styles/Forget-password.css";

export default function ForgetPassword() {
  // Store input value
  const [userInput, setUserInput] = useState("");

  // Store success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle confirm button
  const handleConfirm = (e) => {
    e.preventDefault();

    if (!userInput) {
      alert("Please enter Email / Mobile / User ID");
      return;
    }

    // Simulate successful password change
    setSuccessMessage(
      `Password changed successfully for ${userInput}`
    );

    // Clear input after success
    setUserInput("");
  };

  return (
    <div className="fp-container">
      <form className="fp-form" onSubmit={handleConfirm}>
        <h2>Forget Password</h2>

        <p className="fp-text">
          Enter your <strong>Email / Mobile Number / User ID</strong>
        </p>

        {/* Success Alert */}
        {successMessage && (
          <div className="fp-success">
            ✅ <strong>{successMessage}</strong>
          </div>
        )}

        {/* Input */}
        <input
          type="text"
          placeholder="Email / Mobile / User ID"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        {/* Button */}
        <button type="submit" className="fp-btn">
          Confirm
        </button>
      </form>
    </div>
  );
}
