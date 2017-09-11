import React from 'react';
import Navbar from './Navbar';
import Billboard from './Billboard';
import TileList from './TileList';
import Footer from './Footer';
import './main.css';

const App = () => (
  <div>
    <Navbar />
    <Billboard />
    <TileList />
    <Footer />
  </div>
);

export default App;
