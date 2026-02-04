"use client";
import '../..Styles/login.css';
import { useState } from 'react';
import Link from 'next/link';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    }
    return (
        <div className="login-container">
            <h2 className="login-heading">Login to Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="login-label">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="login-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="login-label">Password:</label>
                <input

                    type="password"
                    id="password"
                    name="password"
                    className="login-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-submit-button">Login</button>
            </form>
            <p className="login-register-link">
                Don{"'"}t have an account? <Link href="/auth/Register" className="register-link">Register here</Link>
            </p>
        </div>
    );
}
