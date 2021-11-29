import React from "react";
import "../Navbar/Navbar.scss";

import Logo from "../Navbar/logo.png";

import { Link } from "react-router-dom";

function Navbar() {

  const skills = () => window.location.replace("/#skills")
  const works = () => window.location.replace("/#works")
  const contact = () => window.location.replace("/#contact")


  return (
    <div className='navContainer'>
      <Link to='/'>
        <img src={Logo} alt='Barrale Web Development Logo' className='logo' />
      </Link>

      <div className='pagesLinks'>
        <div onClick={skills}>
          <p className='pagesItem link'>Skills</p>
          </div>
        <div onClick={works} >
          <p className='pagesItem link'>Works</p>
          </div>
        <div onClick={contact} >
          <p className='pagesItem link'>Contact</p>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
