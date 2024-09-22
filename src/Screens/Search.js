import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate fetching data
    setResults([
        { id: 1, title: 'Inception', poster_path: '/movies/inception.jpg' },
        { id: 2, title: 'Interstellar', poster_path: '/movies/intersteller.jpg' },
        { id: 3, title: 'The Dark Knight', poster_path: '/movies/dark knight.jpg' },
        { id: 4, title: 'Avatar', poster_path: '/movies/avathar.jpg' },
        { id: 5, title: 'Titanic', poster_path: '/movies/titanic.jpg' },
        { id: 6, title: 'The Matrix', poster_path: '/movies/matrix.jpg' }
      // Add more results as needed
    ]);
  };

  return (
    <div className="search-container">
      <h2>Search for Movies</h2>
      <input
        type="text"
        placeholder="Enter movie title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <div className="search-results">
        {results.length > 0 ? (
          results.map((movie) => (
            <div className="movie-grid">
            <div className="movie-card" key={movie.id}>
              <img src={movie.poster_path} alt={movie.title} className="movie-poster" />
              <h3>{movie.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
