import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import netflixLogo from './Netflix-logo.svg';

const Navbar = props => (
  <header id="Header">
    <img src={netflixLogo} id="Logo" alt="Logo" />
    <Navigation />
    <Search />
  </header>
);
export default Navbar;
