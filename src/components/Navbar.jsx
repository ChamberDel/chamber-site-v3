import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-bold">Chamber</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          <a href="#home" className="block hover:text-gray-600">Home</a>
          <a href="#about" className="block hover:text-gray-600">About</a>
          <a href="#services" className="block hover:text-gray-600">Services</a>
          <a href="#contact" className="block hover:text-gray-600">Contact</a>
        </div>
      )}
    </header>
  );
}
