import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Landing</h3>
      <Link to="/signup">Sign Up</Link>
      <br></br>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Landing;
