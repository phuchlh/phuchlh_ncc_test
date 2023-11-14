import React from "react";
import "./App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* Your main content goes here */}
        <h1>Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default App;
