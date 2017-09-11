import React from 'react';

const Tile = ({ imgUrl, title }) => (
  <div className="item">
    <img src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={`Movie ${title} backdrop`} />
    <p className="legend">{title}</p>
  </div>
);
export default Tile;
