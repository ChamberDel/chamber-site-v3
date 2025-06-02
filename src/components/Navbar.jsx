// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img
            src="/chamber-logo.png"
            alt="The Chamber Logo"
            style={{ height: "80px" }}
          />
        </Link>
        <div className="space-x-6">
          <Link to="/chamber-products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link to="/build-your-home" className="text-gray-700 hover:text-blue-600">
            Build
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600">
            Gallery
          </Link>
          <Link to="/reserve" className="text-gray-700 hover:text-blue-600">
            Reserve
          </Link>
          <Link to="/shipping" className="text-gray-700 hover:text-blue-600">
            Shipping
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-blue-600">
            FAQ
          </Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;