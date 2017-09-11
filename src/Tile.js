import React from 'react';

// <p className="legend">{title}</p>
const Tile = ({ imgUrl, title }) => (
  <div className="item">
    <img src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={`Movie ${title} backdrop`} />
  </div>
);
export default Tile;
