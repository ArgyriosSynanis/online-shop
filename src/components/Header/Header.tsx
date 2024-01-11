import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white fixed z-50 top-0 left-0 w-full transition duration-500">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow">
          <Link to="/">
            <img
              className="sm:w-40 w-28 cursor-pointer"
              src={logo}
              alt="Red Onion Logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-6">
          <button className="poppins">Sign In</button>
          <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
