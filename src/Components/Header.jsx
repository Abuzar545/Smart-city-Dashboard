import React from 'react'
import { Link } from "react-router-dom";
function Header  ()  {
    return (
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between shadow-lg">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold">🌆 Smart City Dashboard</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="#" className="hover:text-gray-200 transition font-bold">Home</Link>
          <Link to="/About" className="hover:text-gray-200 transition font-bold">About</Link>
          <Link to="/EventAdding" className="hover:text-gray-200 transition font-bold">Event Adding</Link>
          {/* <a href="#" className="hover:text-gray-200 transition">Settings</a> */}
        </nav>
        
        {/* User Profile Icon */}
        <div className="flex items-center space-x-3">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Search</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  