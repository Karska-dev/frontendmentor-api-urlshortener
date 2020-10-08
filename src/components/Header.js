import React from 'react';
import logo from '../images/logo.svg';
import Humburger from './Hamburger';

const Header = () => (
  <nav>
  <img src={logo} alt="Logo"/>
  <Humburger />
  </nav>
)
//Features Pricing Resources Login Sign Up
export default Header;