"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-ocean-600">
            Mizu Diving
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-ocean-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-ocean-600 transition-colors"
            >
              Services
            </Link>
            {/* <Link
              href="#gallery"
              className="text-gray-700 hover:text-ocean-600 transition-colors"
            >
              Gallery
            </Link> */}
            {/* <Link
              href="#contact"
              className="bg-ocean-600 text-white px-4 py-2 rounded-lg hover:bg-ocean-700 transition-colors"
            >
              Contact
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="#about"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-ocean-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-ocean-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-ocean-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="block bg-ocean-600 text-white px-4 py-2 rounded-lg hover:bg-ocean-700 transition-colors text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

