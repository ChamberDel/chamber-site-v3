import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img 
            src="/chamber-logo.png" 
            alt="Chamber Logo" 
            className="h-[110px] w-auto my-auto"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/reserve" className="hover:text-gray-600">Reserve</Link>
          <Link to="/shipping" className="hover:text-gray-600">Shipping</Link>
          <Link to="/faq" className="hover:text-gray-600">FAQ</Link>
          <Link to="/testimonials" className="hover:text-gray-600">Testimonials</Link>
          <Link to="/support" className="hover:text-gray-600">Support</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-600">Home</Link>
          <Link to="/reserve" className="block hover:text-gray-600">Reserve</Link>
          <Link to="/shipping" className="block hover:text-gray-600">Shipping</Link>
          <Link to="/faq" className="block hover:text-gray-600">FAQ</Link>
          <Link to="/testimonials" className="block hover:text-gray-600">Testimonials</Link>
          <Link to="/support" className="block hover:text-gray-600">Support</Link>
        </div>
      )}
    </header>
  );
}