import React from 'react';
import { Link } from 'react-router-dom';

const Genres = () => {
  return (
    <div className="genres-container">
      <h2>Browse by Genre</h2>
      <ul className="genres-list">
        <li><Link to="/genres/action" className="genre-link">Action</Link></li>
        <li><Link to="/genres/comedy" className="genre-link">Comedy</Link></li>
        <li><Link to="/genres/drama" className="genre-link">Drama</Link></li>
        <li><Link to="/genres/horror" className="genre-link">Horror</Link></li>
        <li><Link to="/genres/romance" className="genre-link">Romance</Link></li>
        {/* Add more genres as needed */}
      </ul>
    </div>
  );
};

export default Genres;
