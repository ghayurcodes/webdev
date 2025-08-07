import React from 'react';
import './nav.css'; // ✅ Correct way to import CSS in React

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>support</li>
        <li>booksy</li>
      </ul>
    </div>
  );
};

export default Navbar;


