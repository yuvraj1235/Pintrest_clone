import React from "react";
import { Link, Navigate } from "react-router-dom";
import { FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  // Handle logout logic
  const handleLogout = () => {
    // Add your logout logic here (e.g., clear session, redirect to login page, etc.)
    console.log("User logged out");
  };

  return (
    <header className="w-full bg-black text-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <FaPinterest className="text-red-500 text-3xl" />
        <h1 className="text-2xl font-bold" >PinBoard</h1>
      </div>

      {/* Center Section - Search Bar */}
      <div className="flex items-center w-1/3 max-w-lg bg-white rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-6 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <FiSearch className="absolute left-3 text-gray-500 text-xl" />
      </div>

      {/* Right Section - Logout Button */}
      <div className="flex items-center">
        <button 
          onClick={handleLogout} 
          className="flex items-center text-white hover:text-red-500 transition duration-200"
        >
          <IoIosLogOut className="text-2xl" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
