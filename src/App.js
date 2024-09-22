import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home'; // Your Home component
import SignUp from './Screens/Signup'; // Your SignUp component
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Recommendations from './Screens/Recommendations';
import Favorites from './Screens/Favorites';
import ViewingHistory from './Screens/ViewingHistory';
import Settings from './Screens/Settings';
 import Search from './Screens/Search'; // Your Search component
import Trending from './Screens/Trending';
import Genres from './Screens/Genres';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<ViewingHistory />} /> 
          <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} /> 
        <Route path="/trending" element={<Trending />} /> 
        <Route path="/genres" element={<Genres />} /> 
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
