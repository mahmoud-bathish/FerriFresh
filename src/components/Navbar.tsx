'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              FerriFresh
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
} 