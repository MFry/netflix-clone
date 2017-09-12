import React from 'react';

// <p className="legend">{title}</p>
const Tile = ({ imgUrl, title, className }) => {
  const cssClasses = className ? `${className} item` : 'item';
  return (
    <div className={cssClasses}>
      <img src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={`Movie ${title} backdrop`} />
    </div>
  );
};
export default Tile;
