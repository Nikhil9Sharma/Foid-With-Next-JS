"use client";
import '../../Styles/Forget-password.css';

export default function ForgetPassword() {
return (
    <div className="forget-password-container">
        <h2 className="forget-password-heading">Forgot Your Password?</h2>
        <p className="forget-password-instruction">
            Enter your email address below, and we{"'"}ll send you instructions to reset your password.
        </p>
        <form className="forget-password-form">
            <label htmlFor="email" className="forget-password-label">Email Address:</label>
            <input
                type="email"
                id="email"
                name="email"
                className="forget-password-input"
                placeholder="Enter your email"
                required
            />
            <button type="submit" className="forget-password-submit-button">Send Reset Instructions</button>
        </form>
    </div>
);
}