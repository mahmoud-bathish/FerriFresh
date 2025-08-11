'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation('common');
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
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-6" >
          <div className="flex items-center text-sm justify-between" dir={i18n.language === 'ar' ? 'ltr' : 'rtl'}>
            {/* Phone Number */}
            <div className="flex items-center gap-4" style={{ direction: 'ltr' }}>
              <a 
                href="https://wa.me/96170407916"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm hover:opacity-80 transition-opacity duration-200"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="hidden xs:inline">+961 70 407 916</span>
                <span className="xs:hidden">+961 70 407 916</span>
              </a>
            </div>
            
            {/* Developer Credit */}
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
  
                <span className="hidden xs:inline">{t('footer.developer')}</span>
                <span className="xs:hidden">{t('footer.developer')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span className="py-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              {t('home.brand')}
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
              {t('nav.home')}
            </Link>
            <Link 
              href="/meat"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/meat') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.meat')}
            </Link>
            <Link 
              href="/eggs"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/eggs') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.eggs')}
            </Link>
            <Link 
              href="/contact"
              className={`font-medium transition-colors duration-200 hover:text-amber-600 ${
                isActive('/contact') 
                  ? 'text-amber-600 border-b-2 border-amber-600 pb-1' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
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
              {t('nav.home')}
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
              {t('nav.meat')}
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
              {t('nav.eggs')}
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
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 