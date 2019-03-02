import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  return(
    <div className="navbar">
      <div className="brand-name">Contact Manager</div>
      <div className="nav-actions">
        <div><FontAwesomeIcon icon="home"/>Home</div>
        <div><FontAwesomeIcon icon="plus"/>Add</div>
        <div><FontAwesomeIcon icon="question"/>About</div>
      </div>
    </div>
  )
};

export default Navbar;