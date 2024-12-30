'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isScroll?: boolean;
  scrollTo?: string;
}

const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '#about', isScroll: true, scrollTo: 'WhoWeAreAndMission' },
  { label: 'Contact', href: '#contact', isScroll: true, scrollTo: 'Footer' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isScroll && item.scrollTo) {
      e.preventDefault();
      scrollToElement(item.scrollTo);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 relative">
        <div className="flex items-center justify-between h-full w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-sky-500 hover:text-sky-600"
          >
            <Search className="w-6 h-6" />
          </motion.button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <motion.img
              src="/medscope.png"
              alt="MedScope"
              width={150}
              height={50}
              className="object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="relative text-gray-700 hover:text-sky-500 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-500 text-white px-8 py-2.5 rounded-full font-medium
                         hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Home
              </motion.button>
            </Link>
          </div>

          <motion.div
            className="md:hidden bg-sky-500 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 inset-x-0 bg-white shadow-xl border-t border-gray-100 mx-0"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-sky-500 py-2 transition-colors"
                    onClick={(e) => handleNavClick(e, item)}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <Link href="/" className="block pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-sky-500 text-white py-3 rounded-full font-medium
                             hover:bg-sky-600 transition-colors duration-300 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;