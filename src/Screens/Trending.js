import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching trending movies
    setTrendingMovies([
        { id: 1, title: 'Inception', poster_path: '/movies/inception.jpg' },
        { id: 2, title: 'Interstellar', poster_path: '/movies/intersteller.jpg' },
        { id: 3, title: 'The Dark Knight', poster_path: '/movies/dark knight.jpg' },
        { id: 4, title: 'Avatar', poster_path: '/movies/avathar.jpg' },
        { id: 5, title: 'Titanic', poster_path: '/movies/titanic.jpg' },
        { id: 6, title: 'The Matrix', poster_path: '/movies/matrix.jpg' }
      // Add more trending movies as needed
    ]);
  }, []);

  return (
    <div className="trending-container">
      <h2>Trending Movies</h2>
      <div className="movie-grid">
        {trendingMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
