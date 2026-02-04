"use client";
import "../../Styles/Register.css";
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    }
    return (
        <div className="register-container">
            <h2 className="register-heading">Create a New Account</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="register-label">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="register-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="register-label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="register-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirmPassword" className="register-label">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="register-input"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="register-submit-button">Register</button>
            </form>
        </div>
    );
}
