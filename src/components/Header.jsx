import React from "react";
import { Link } from "react-router-dom"; // Optional if you're using routing

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md py-4">
      <nav className="container mx-auto flex justify-center space-x-8">
        <a href="/" className="text-gray-800 hover:text-blue-600 font-semibold">
          Home
        </a>
        <a href="/about" className="text-gray-800 hover:text-blue-600 font-semibold">
          About
        </a>
        <a href="/contact" className="text-gray-800 hover:text-blue-600 font-semibold">
          Contact
        </a>
      </nav>
    </header>
  );
}