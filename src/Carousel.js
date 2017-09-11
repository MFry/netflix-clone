import React from 'react';

const Carousel = props => (
  <div className="wrap">
    <ul className="carousel">{props.children}</ul>
  </div>
);
export default Carousel;
