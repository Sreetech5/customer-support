export default App;

// File: src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600 animate-pulse">HelpDesk</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition duration-300">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition duration-300">Register</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition duration-300">Dashboard</Link>
      </div>
    </nav>
  );
};
