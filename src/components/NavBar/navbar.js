import React from 'react';
import './navbar.css';
import R_logo from '../../assets/R_logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={R_logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link></Link>
      </div>
      <button className="">
        <img src="" alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
