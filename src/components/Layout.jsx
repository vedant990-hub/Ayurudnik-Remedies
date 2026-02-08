import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Linkedin, MessageCircle, Mail } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { 
      name: 'PRODUCTS', 
      dropdown: [
        { name: 'Cosmetics', path: '/products/cosmetics' },
        { name: 'Soft Chews', path: '/products/soft-chews' },
        { name: 'Tablets', path: '/products/tablets' },
        { name: 'Liquids', path: '/products/liquids' },
        { name: 'Powders', path: '/products/powders' },
      ]
    },
    { 
      name: 'ANIMALS', 
      dropdown: [
        { name: 'Dogs & Cats', path: '/animals/dogs-cats' },
        { name: 'Horses', path: '/animals/horses' },
        { name: 'Cattle', path: '/animals/cattle' },
        { name: 'Pigs', path: '/animals/pigs' },
        { name: 'Poultry', path: '/animals/poultry' },
      ]
    },
    {
      name: 'PRIVATE LABEL',
      dropdown: [
        { name: 'Custom Made Solutions', path: '/private-label/custom-solutions' },
        { name: 'Ready-for-Market Solutions', path: '/private-label/ready-market' },
        { name: 'Minimum Order Quantities', path: '/private-label/minimum-order-quantities' },
      ]
    },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200"
      data-testid="main-header"
    >
      <nav className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3"
          data-testid="logo-link"
        >
          <img 
            src="/logo2.png" 
            alt="Ayurudnik Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="font-['Playfair_Display'] text-2xl font-bold text-[#0B0B0B] tracking-tight">
            AYURUDNIK
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div key={index} className="relative group">
                  <button
                    className="text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 flex items-center gap-2 text-zinc-600 hover:text-[#0B0B0B]"
                    data-testid={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    <ChevronDown size={14} strokeWidth={2} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white border border-zinc-300 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                    {item.dropdown.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.path}
                        className="block px-5 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-zinc-700 hover:bg-zinc-900 hover:text-white transition-colors duration-200 border-b border-zinc-100 last:border-b-0"
                        data-testid={`nav-${item.name.toLowerCase()}-${subitem.name.toLowerCase()}`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.name.toLowerCase()}`}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#0B0B0B] border-b-2 border-[#0B0B0B] pb-1'
                    : 'text-zinc-600 hover:text-[#0B0B0B]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="hamburger-button"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#0B0B0B] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0B0B0B] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0B0B0B] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-zinc-200 bg-white"
          data-testid="mobile-menu"
        >
          <div className="max-w-screen-2xl mx-auto px-6 py-4 flex flex-col gap-0">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div key={index}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-200 py-4 text-zinc-700 hover:text-[#0B0B0B] flex items-center justify-between border-b border-zinc-100 hover:bg-zinc-50"
                      data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="bg-zinc-50 border-b border-zinc-100">
                        {item.dropdown.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            to={subitem.path}
                            onClick={handleNavClick}
                            className="block text-sm font-medium uppercase tracking-[0.1em] text-zinc-600 hover:text-[#0B0B0B] py-3.5 pl-8 pr-4 border-b border-zinc-100 last:border-b-0 hover:bg-zinc-100 transition-colors duration-200"
                            data-testid={`mobile-nav-${item.name.toLowerCase()}-${subitem.name.toLowerCase()}`}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                  className={`text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-200 py-3 border-b border-zinc-100 ${
                    location.pathname === item.path
                      ? 'text-[#0B0B0B] pl-2'
                      : 'text-zinc-500 hover:text-[#0B0B0B]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white" data-testid="main-footer">
      {/* Premium top border with subtle gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
      
      <div className="py-20 md:py-24 lg:py-28">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12 mb-16 md:mb-20">
            {/* Company Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src="/logo2.png" 
                  alt="Ayurudnik Logo" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="font-['Playfair_Display'] text-3xl font-bold">
                  AYURUDNIK
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Contract manufacturing and private label solutions for animal supplements and cosmetics.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-5" data-testid="footer-social-icons">
                <a 
                  href="https://www.linkedin.com/in/ayurudnik-remedies-36355a235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all duration-300"
                >
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
                <a 
                  href="https://wa.me/919834519843" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all duration-300"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.5 22l6.01-1.6c1.25.67 2.67 1.06 4.19 1.06 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.36-3.88-.99l-.28-.15-2.89.77.82-2.65-.17-.27C4.46 15.13 4 13.64 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M16.6 13.89c-.23-.12-1.37-.68-1.58-.75-.21-.07-.36-.12-.52.12-.16.24-.63.75-.77.9-.14.15-.29.17-.52.05-.23-.12-1-1.08-1.83-2.05-.67-.75-1.13-1.68-1.26-1.91-.13-.23-.02-.35.1-.47.1-.1.23-.26.34-.39.12-.13.16-.22.24-.36.09-.14.04-.27-.02-.38-.06-.11-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.16 1.7 2.6 4.12 3.64.58.24 1.03.38 1.38.49.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.47-.29z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:dpawar@ayurudnik.com"
                  aria-label="Send us an email"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all duration-300"
                >
                  <Mail size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Quick Links
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About', path: '/about' },
                  { label: 'Products', path: '/products/cosmetics' },
                  { label: 'Private Label', path: '/private-label/custom-solutions' },
                  { label: 'Contact', path: '/contact' }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Products
              </h4>
              <div className="space-y-4">
                {[
                  { name: 'Cosmetics', path: '/products/cosmetics' },
                  { name: 'Soft Chews', path: '/products/soft-chews' },
                  { name: 'Tablets', path: '/products/tablets' },
                  { name: 'Liquids', path: '/products/liquids' },
                  { name: 'Powders', path: '/products/powders' }
                ].map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block text-sm text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    data-testid={`footer-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Animals */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Animals
              </h4>
              <div className="space-y-4">
                {[
                  { name: 'Dogs & Cats', path: '/animals/dogs-cats' },
                  { name: 'Horses', path: '/animals/horses' },
                  { name: 'Cattle', path: '/animals/cattle' },
                  { name: 'Pigs', path: '/animals/pigs' },
                  { name: 'Poultry', path: '/animals/poultry' }
                ].map((animal) => (
                  <Link
                    key={animal.name}
                    to={animal.path}
                    className="block text-sm text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                    data-testid={`footer-animal-${animal.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {animal.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                Contact
              </h4>
              <div className="space-y-6 text-sm text-zinc-400">
                <div>
                  <p className="font-medium text-white mb-3">Email</p>
                  <a href="mailto:dpawar@ayurudnik.com" className="block hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">
                    dpawar@ayurudnik.com
                  </a>
                  <a href="mailto:maher@ayurudnik.com" className="block hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">
                    maher@ayurudnik.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white mb-3">Phone</p>
                  <a href="tel:+919834519843" className="block hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">
                    +91 9834519843
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white mb-3">Address</p>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    F.NO: 02, 1st Floor,<br />
                    Mauli A Building,<br />
                    Nr Thakare Hospital,<br />
                    Saraswati Nagar, 10th Mail,<br />
                    Ozar Mig, NASHIK - 422206<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>
          
          {/* Copyright / Credit line - reduced hierarchy */}
          <div className="text-center">
            <p className="text-xs text-zinc-600">© 2026 Ayurudnik Remedies. All rights reserved. | Website designed by Vedant Pawar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
