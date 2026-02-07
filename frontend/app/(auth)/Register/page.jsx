"use client";

import { useState } from "react";
import Link from "next/link";
import "../../Styles/Register.css";

export default function Register() {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    midName: "",
    lastName: "",
    age: "",
    houseNo: "",
    street: "",
    landmark: "",
    area: "",
    district: "",
    state: "",
    country: "",
    mobileCountryCode: "+91",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle register button
  const handleRegister = (e) => {
    e.preventDefault();

    // Password check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Show success message
    setSuccessMessage(
      `You are registered successfully, ${formData.firstName}`
    );

    // Reset form
    setFormData({
      firstName: "",
      midName: "",
      lastName: "",
      age: "",
      houseNo: "",
      street: "",
      landmark: "",
      area: "",
      district: "",
      state: "",
      country: "",
      mobileCountryCode: "+91",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>

        {/* Success Alert */}
        {successMessage && (
          <div className="success-alert">
            You are registered successfully,{" "}
            <strong>{formData.firstName || "User"}</strong>
          </div>
        )}

        {/* Name Fields */}
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="midName"
            placeholder="Middle Name"
            value={formData.midName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {/* Address Section */}
        <h4>Address</h4>
        <div className="row">
          <input
            type="text"
            name="houseNo"
            placeholder="House No."
            value={formData.houseNo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street Name / No."
            value={formData.street}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={formData.landmark}
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {/* Mobile */}
        <div className="row">
          <select
            name="mobileCountryCode"
            value={formData.mobileCountryCode}
            onChange={handleChange}
          >
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Buttons */}
        <div className="btn-group">
          <button type="submit" className="register-btn">
            Register
          </button>

          <button
            type="button"
            className="login-btn"
            onClick={() => alert("Navigate to Login Page")}
          >
            <Link href="/Login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
