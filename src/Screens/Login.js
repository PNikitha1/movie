import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css'; // Import your CSS for styling

const Login = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (!formData.password) errors.password = "Password is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Redirect to the dashboard page after successful login
      navigate('/dashboard'); 
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {submitted ? (
        <p className="success-message">Login successful! Redirecting to dashboard...</p>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
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

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
