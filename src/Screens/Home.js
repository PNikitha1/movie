import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom CSS for styling

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // Simulating fetching popular/featured movies from an API
  useEffect(() => {
    async function getFeaturedMovies() {
      // Replace this with actual API call in your backend
      const movies = [
        { id: 1, title: 'Inception', poster_path: '/movies/inception.jpg' },
        { id: 2, title: 'Interstellar', poster_path: '/movies/intersteller.jpg' },
        { id: 3, title: 'The Dark Knight', poster_path: '/movies/dark knight.jpg' },
        { id: 4, title: 'Avatar', poster_path: '/movies/avathar.jpg' },
        { id: 5, title: 'Titanic', poster_path: '/movies/titanic.jpg' },
        { id: 6, title: 'The Matrix', poster_path: '/movies/matrix.jpg' }
      ];
      setFeaturedMovies(movies);
    }

    getFeaturedMovies();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Movies You'll Love</h1>
          <p>Personalized movie recommendations just for you. Sign up to explore!</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {featuredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-content">
          <div className="how-item">
            <h3>1. Sign Up</h3>
            <p>Create your account and set up your preferences.</p>
          </div>
          <div className="how-item">
            <h3>2. Get Recommendations</h3>
            <p>We'll suggest movies based on your preferences and watch history.</p>
          </div>
          <div className="how-item">
            <h3>3. Enjoy Your Movies</h3>
            <p>Watch the best movies and discover new favorites!</p>
          </div>
        </div>
      </section>

      {/* Links to other sections */}
      <section className="links-section">
        <h2>Explore More</h2>
        <div className="links">
          <Link to="/search" className="link">Search for Movies</Link>
          <Link to="/genres" className="link">Browse by Genre</Link>
          <Link to="/trending" className="link">See Trending Movies</Link>
        </div>
      </section>
    </div>
  );
};

 export default Home;

// import React, { useEffect, useState } from 'react';
// import './Home.css';

// const Home = () => {
//   const [featuredMovies, setFeaturedMovies] = useState([]);

//   useEffect(() => {
//     const movies = [
//       { id: 1, title: 'Inception', poster_path: '/movies/inception.jpg' },
//       { id: 2, title: 'Interstellar', poster_path: '/movies/interstellar.jpg' },
//       { id: 3, title: 'The Dark Knight', poster_path: '/movies/dark_knight.jpg' },
//       { id: 4, title: 'Avatar', poster_path: '/movies/avatar.jpg' },
//       { id: 5, title: 'Titanic', poster_path: '/movies/titanic.jpg' },
//       { id: 6, title: 'The Matrix', poster_path: '/movies/matrix.jpg' }
//     ];
//     setFeaturedMovies(movies);
//   }, []);

//   return (
//     <div className="home-container">
//       <section className="featured-movies">
//         <h2>Featured Movies</h2>
//         <div className="movie-grid">
//           {featuredMovies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={movie.poster_path}
//                 alt={movie.title}
//                 className="movie-poster"
//               />
//               <h3>{movie.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
