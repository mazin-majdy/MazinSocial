import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css"
const Error = () => {
  return (
    <div className='container'>
      <img src="/assets/error404.jpg" className='error-img'/>
      <p className='text'>
        <Link className='link' to="/">Go to Home </Link>
      </p>
    </div>
  )
}

export default Error