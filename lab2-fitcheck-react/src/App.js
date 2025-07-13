import React from 'react';
// Import React for JSX rendering

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import routing components from react-router-dom:
// Router: main wrapper for routing
// Routes: container for all Route elements
// Route: defines individual routes
// Link: creates navigation links

import Home from './Home';       // Import the Home component
import Profile from './Profile'; // Import the Profile component
import './App.css';              // Import CSS styles for the App

function App() {
  return (
    <Router> {/* Wrap the entire app with Router to enable routing */}
      <div className="App">
        <nav>
          {/* Navigation bar with links to different routes */}
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          {/* Define routes and their corresponding components */}
          <Route path="/" element={<Home />} /> {/* Renders Home component at root path */}
          <Route path="/profile" element={<Profile />} /> {/* Renders Profile component at /profile */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export the App component as the default export
