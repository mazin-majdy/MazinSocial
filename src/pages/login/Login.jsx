import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mazinsocial</h3>
          <span className="loginDesc">Connect with friends and the world around you on Mazinsocial.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <a href="/"className="loginButton">Log In</a>
            <span className='loginForgot'>Forgot Password?</span>
            <a href='/register' className="loginRegisterButton">Create a New Account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login