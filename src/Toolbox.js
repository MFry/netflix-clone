import React from 'react';
import netflixLogo from './Netflix-logo.svg';

const Navbar = props => (
  <div id="Navbar">
    <img src={netflixLogo} id="Logo" alt="Logo" />
    {props}
  </div>
);
