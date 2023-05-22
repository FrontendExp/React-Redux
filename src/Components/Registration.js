// src/components/Registration.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/action';
import { useNavigate, Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      // Check if all fields are filled
      alert('Please enter all registration details');
      return;
    }

    const userData = { email, name, password };
    dispatch(registerUser(userData));
    navigate('/login'); // Redirect to the login page after successful registration
  };

  return (
    <div className='reg-body'>
      
      <form className='reg-form'  onSubmit={handleRegister}>
      <h1>Hey There!</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='reg-btn' type="submit">Register</button>
        <p >
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
      
    </div>
  );
};

export default Registration;
