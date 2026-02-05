"use client";
import "../../Styles/Register.css";
import { useState } from "react";

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

    const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            dob: '',
            address: '',
            state: '',
            zipCode: '',
            country: '',
            email: '',
            phone: ''
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    }
    return (
        <div className="register-container">
            <h2 className="register-heading">Register on the Friends of Indian Diaspora</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-section">
            <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your first name"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your last name"
                required
            />
            </div>
        </div>
          {/* Personal Details */}
        <div className="form-section">
            <div className="form-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="address" className="form-label">Address</label>
            <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your full address"
                required
            />
            </div>
        </div>
          {/* Location */}
        <div className="form-section form-row">
            <div className="form-group">
            <label htmlFor="state" className="form-label">State</label>
            <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="form-input"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="zipCode" className="form-label">Zip / Pin Code</label>
            <input
                type="text"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="form-input"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="country" className="form-label">Country</label>
            <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="form-input"
                required
            />
            </div>
        </div>
         {/* Contact */}
        <div className="form-section">
            <div className="form-group">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="example@domain.com"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="phone" className="form-label">Mobile No.</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+1 (123) 456-7890"
                required
            />
            </div>
        </div>
        <button type="submit" className="submit-button" >
            Submit
        </button>
                    </form>
        </div>
    );
}
