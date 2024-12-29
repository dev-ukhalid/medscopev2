'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  isScroll?: boolean;
  scrollTo?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

interface DropdownProps {
  items: NavItem['children'];
  isOpen: boolean;
  onClose: () => void;
}

// Custom hook for smooth scrolling
const useScrollTo = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return scrollToElement;
};

const navItems: NavItem[] = [
  { 
    label: 'Products',
    href: '/products',
  },
  { 
    label: 'About', 
    href: '#about',
    isScroll: true,
    scrollTo: 'WhoWeAreAndMission'
  },
  { 
    label: 'Contact', 
    href: '#contact',
    isScroll: true,
    scrollTo: 'Footer'
  }
];

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg py-3 mt-2"
          onMouseLeave={onClose}
        >
          {items?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-50"
            >
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              {item.description && (
                <div className="text-sm text-gray-500">{item.description}</div>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const scrollToElement = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.isScroll && item.scrollTo) {
      e.preventDefault();
      scrollToElement(item.scrollTo);
      setIsMobileMenuOpen(false);
    }
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-gray-900"
            >
              <Image
                src='/medscope.png'
                alt='logo'
                width={120}
                className="object-cover"
                height={120}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <motion.div
                  onHoverStart={() => item.children && setOpenDropdown(item.label)}
                  onHoverEnd={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown className="w-4 h-4 text-gray-700" />
                    )}
                  </a>
                  {item.children && (
                    <Dropdown
                      items={item.children}
                      isOpen={openDropdown === item.label}
                      onClose={() => setOpenDropdown(null)}
                    />
                  )}
                </motion.div>
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium
                       hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-900" />
            ) : (
              <Menu className="text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-2 py-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full text-left px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Lear More
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;