import React from 'react';
import "./register.css"

const Register = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mazinsocial</h3>
          <span className="loginDesc">Connect with friends and the world around you on Mazinsocial.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Confirm password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <a href='/login' className="loginRegisterButton">Log into Account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register