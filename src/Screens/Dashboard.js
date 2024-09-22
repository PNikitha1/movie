import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaHistory, FaCog } from 'react-icons/fa'; // Import icons
import './Dashboard.css'; // Import your CSS for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <nav className="dashboard-nav">
        <ul>
          <li className="nav-item">
            <Link to="/recommendations" className="nav-link">
              <FaStar className="nav-icon" />
              <span>Recommendations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              <FaHeart className="nav-icon" />
              <span>Favorites / Watchlist</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              <FaHistory className="nav-icon" />
              <span>Viewing History</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <FaCog className="nav-icon" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
