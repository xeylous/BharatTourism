import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Bharat Tourism
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-400">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-blue-400">Login</Link>
                    </li>
                    <li>
                        <Link to="/upcoming-trips" className="hover:text-blue-400">Upcoming Trips</Link>
                    </li>
                    <li>
                        <Link to="/admin-login" className="hover:text-blue-400">Admin Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
