import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSettings, FiCreditCard, FiShoppingCart, FiLogOut } from "react-icons/fi";

export function Navbar({ handlesearch, setsearch }) {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/login"); 
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex justify-between h-20 w-full items-center bg-gradient-to-r from-red-500 to-orange-400 shadow-lg px-4 sm:px-8 relative">
            {/* Brand logo */}
            <h1
                className="text-4xl text-white font-bold tracking-widest cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => navigate("/")}
            >
                Zomato
            </h1>

            {/* Search bar */}
            <div className="relative hidden md:block">
                <input
                    className="w-96 h-12 px-5 rounded-full bg-white border-0 shadow-md focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500 outline-none transition-transform transform hover:scale-105"
                    type="text"
                    placeholder="Search for restaurants by locations..."
                    onChange={(e) => setsearch(e.target.value)}
                />
                <FaSearch 
                    className="absolute top-4 right-5 text-gray-500 cursor-pointer transition-transform transform hover:scale-110"
                    onClick={handlesearch} 
                />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <FaBars 
                    className="text-3xl text-white cursor-pointer" 
                    onClick={toggleMobileMenu} 
                />
            </div>

            {/* Action buttons and dropdown */}
            <div className={`flex items-center space-x-8 ${isMobileMenuOpen ? 'absolute bg-gradient-to-r from-red-500 to-orange-400 w-full top-20 left-0 flex-col p-4 rounded-lg md:hidden' : 'hidden md:flex'}`}>
                <button
                    onClick={() => navigate("/signup")}
                    className="px-6 py-2 rounded-full bg-white text-orange-600 font-semibold shadow-lg hover:bg-orange-600 hover:text-white transition duration-300 transform hover:scale-105"
                >
                    Sign Up
                </button>
                <button
                    onClick={() => navigate("/login")}
                    className="px-6 py-2 rounded-full bg-white text-orange-600 font-semibold shadow-lg hover:bg-orange-600 hover:text-white transition duration-300 transform hover:scale-105"
                >
                    Login
                </button>

                {/* User profile icon */}
                <div className="relative">
                    <FaUserCircle
                        className="text-4xl text-white cursor-pointer transition-transform transform hover:scale-110"
                        onClick={toggleDropdown}
                    />
                    {/* Dropdown menu */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10">
                            <button
                                onClick={() => navigate("/settings")}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                            >
                                <FiSettings className="mr-2" /> Settings
                            </button>
                            <button
                                onClick={() => navigate("/orders")}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                            >
                                <FiShoppingCart className="mr-2" /> Orders
                            </button>
                            <button
                                onClick={() => navigate("/payments")}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                            >
                                <FiCreditCard className="mr-2" /> Payments
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                            >
                                <FiLogOut className="mr-2" /> Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Close Mobile Menu Icon */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-red-500 to-orange-400 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white font-semibold text-lg">Menu</h2>
                        <FaTimes className="text-2xl text-white cursor-pointer" onClick={toggleMobileMenu} />
                    </div>
                    <button onClick={() => navigate("/signup")} className="block text-white text-left px-4 py-2">Sign Up</button>
                    <button onClick={() => navigate("/login")} className="block text-white text-left px-4 py-2">Login</button>
                    <button onClick={() => navigate("/orders")} className="block text-white text-left px-4 py-2">Orders</button>
                    <button onClick={handleLogout} className="block text-white text-left px-4 py-2">Logout</button>
                </div>
            )}
        </div>
    );
}
