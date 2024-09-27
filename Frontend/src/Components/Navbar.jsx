import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiSettings, FiCreditCard, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useState } from "react";

export function Navbar({ handlesearch, setsearch }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center h-16 w-full border-b-2 border-gray-200 px-4 bg-gradient-to-r from-white to-gray-100 shadow-lg transition-all duration-300 ease-in-out">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600 animate-pulse sm:text-2xl">Zomato</h1>
  
        {/* Search Bar */}
        <div className="relative flex items-center w-full sm:w-auto mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setsearch(e.target.value)}
            className="border-2 border-gray-300 rounded-full p-2 pl-10 w-full sm:w-80 focus:outline-none focus:border-blue-500 transition-all"
          />
          <FaSearch onClick={handlesearch} className="absolute left-3 text-gray-500 text-xl cursor-pointer hover:text-blue-600 transition-all" />
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex space-x-4 items-center mt-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end">
          <button onClick={() => navigate("/signup")} className="text-gray-600 hover:text-blue-600 transition-all sm:text-sm">
            Sign Up
          </button>
          <button onClick={() => navigate("/login")} className="text-gray-600 hover:text-blue-600 transition-all sm:text-sm">
            Login
          </button>
          <button onClick={() => navigate("/dashboard")} className="text-gray-600 hover:text-blue-600 transition-all sm:text-sm">
            Dashboard
          </button>
  
          {/* User Image with Dropdown */}
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx1itTXTXLB8p4ALTTL8mUPa9TFN_m9h5VQ&usqp=CAU"
              alt="User Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500 hover:shadow-lg transition-all"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                <button onClick={() => navigate("/settings")} className="flex items-center px-4 py-2 hover:bg-gray-100 w-full">
                  <FiSettings className="mr-2" /> Settings
                </button>
                <button onClick={() => navigate("/orders")} className="flex items-center px-4 py-2 hover:bg-gray-100 w-full">
                  <FiShoppingCart className="mr-2" /> Orders
                </button>
                <button onClick={() => navigate("/payments")} className="flex items-center px-4 py-2 hover:bg-gray-100 w-full">
                  <FiCreditCard className="mr-2" /> Payments
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <FiLogOut className="mr-2" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
  
}
