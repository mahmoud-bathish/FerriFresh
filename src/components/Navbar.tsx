'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              FerriFresh
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/meat"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/meat') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              Meat
            </Link>
            <Link 
              href="/eggs"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/eggs') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              Eggs
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/contact') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-amber-100/50 mt-4">
            <Link 
              href="/"
              onClick={closeMenu}
              className={`block font-medium transition-colors duration-200 hover:text-amber-600 py-2 ${
                isActive('/') 
                  ? 'text-amber-600 border-l-4 border-amber-600 pl-4' 
                  : 'text-gray-700 pl-4'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/meat"
              onClick={closeMenu}
              className={`block font-medium transition-colors duration-200 hover:text-amber-600 py-2 ${
                isActive('/meat') 
                  ? 'text-amber-600 border-l-4 border-amber-600 pl-4' 
                  : 'text-gray-700 pl-4'
              }`}
            >
              Meat
            </Link>
            <Link 
              href="/eggs"
              onClick={closeMenu}
              className={`block font-medium transition-colors duration-200 hover:text-amber-600 py-2 ${
                isActive('/eggs') 
                  ? 'text-amber-600 border-l-4 border-amber-600 pl-4' 
                  : 'text-gray-700 pl-4'
              }`}
            >
              Eggs
            </Link>
            <Link 
              href="/contact"
              onClick={closeMenu}
              className={`block font-medium transition-colors duration-200 hover:text-amber-600 py-2 ${
                isActive('/contact') 
                  ? 'text-amber-600 border-l-4 border-amber-600 pl-4' 
                  : 'text-gray-700 pl-4'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 