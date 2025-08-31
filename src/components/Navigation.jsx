import React from 'react';

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          src="./image/nike.png"
          alt="Nike Logo"
          style={{ height: '50px', width: '50px' }}
        />
      </div>

      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
