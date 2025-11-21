'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { IMAGES, IMAGE_SIZES } from "@/constants/images";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('day'), href: `/${locale}/day` },
    { name: t('night'), href: `/${locale}/night` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="bg-white border-b border-forest/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center space-x-3"
            aria-label="Café Costermans - Return to homepage"
          >
            <Image 
              src={IMAGES.common.logo} 
              alt="Café Costermans" 
              width={120}
              height={40}
              className="h-10 w-auto"
              sizes={IMAGE_SIZES.small}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-forest transition-colors duration-300 font-space-grotesk font-bold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-black hover:text-forest transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-forest/10 py-4">
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-forest transition-colors duration-300 font-space-grotesk font-bold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}