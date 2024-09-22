import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SignUp.css'; // Import your CSS for styling

const SignUp = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (!formData.password) errors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Redirect to the login page after submission
      navigate('/login'); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {submitted ? (
        <p className="success-message">Sign-up successful! Redirecting to login...</p>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
