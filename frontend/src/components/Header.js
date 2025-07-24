import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
        </a>
        <nav className="space-x-6 text-gray-800 font-medium text-lg">
          <a href="#home" className="hover:text-blue-600 transition duration-300">Home</a>
          <a href="#about" className="hover:text-blue-600 transition duration-300">About Us</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}