// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/action';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      await dispatch(loginUser(email, password));
      navigate('/home');
    } else {
      setError('User not registered.');
    }
  };


  return (
    <div className='body'>
    <div className='login'>
      
      <h1>Welcome back!</h1>
      <form className='login-form' onSubmit={handleLogin}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='d-flex' 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br><button className='submit-btn ' type="submit">Login</button>
      </form>
      <p style={{marginTop:'2em'}}>
        Don't have an account?{' '}
        <Link to="http://localhost:3000">Register</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;