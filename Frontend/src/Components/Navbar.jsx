import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";


export function Navbar( {handlesearch  , setsearch} ) { 
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex justify-between items-center h-16 w-full border-b-2 border-gray-200 px-4 bg-white shadow-sm">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-black-600">Zomato</h1>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setsearch(e.target.value)} 
            className="border-2 border-gray-300 rounded-md p-2 pl-10 w-80 focus:outline-none focus:border-blue-500 transition-all"
          />
          <FaSearch onClick={handlesearch} className="absolute left-3 text-gray-500 text-xl" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="text-gray-600 hover:text-blue-600 transition-all"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="text-gray-600 hover:text-blue-600 transition-all"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-600 hover:text-blue-600 transition-all"
          >
            Dashboard
          </button>

          {/* Display Username */}

        </div>
      </div>
    </>
  );
}

const isAuth = () => {
  return localStorage.getItem("token") ? true : false;
};

export const getusername = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const user = jwt_decode(token);  // Use 'jwt_decode' instead of 'decode'
      return user.username;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  return null;
};
