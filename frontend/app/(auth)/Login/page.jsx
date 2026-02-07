"use client";

import { useState } from "react";
import Link from "next/link";
import "../../Styles/Login.css";

export default function LoginPage() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [successUser, setSuccessUser] = useState("");

  // fake login handler
  const handleLogin = () => {
    if (emailOrMobile && password) {
      setSuccessUser(emailOrMobile);
      alert(`You are login successfully as ${emailOrMobile}`);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleForgotPassword = () => {
    alert("Password reset link has been sent (demo)");
  };

  const handleSwitchRegister = () => {
    alert("Redirect to Register Page (demo)");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="title">Login</h2>

        {/* Success Message */}
        {successUser && (
          <p className="success-msg">
            You are logged in successfully as <b>{successUser}</b>
          </p>
        )}

        {/* Email / Mobile */}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Forgot Password */}
        <span className="forgot"
        >
          <Link href="/Forget-password">Forgot Password ?</Link>
        </span>

        {/* Buttons */}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <button className="switch-btn"
        >
          <Link href="/Register">Switch to Register</Link>
        </button>
      </div>
    </div>
  );
}
