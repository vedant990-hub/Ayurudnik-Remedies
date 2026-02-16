import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

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
          <OptimizedImage 
            src="/logo2.png" 
            alt="Ayurudnik Logo" 
            className="h-12 w-12 object-contain"
            priority={true}
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
    <footer className="bg-[#0B0B0B] text-white pb-24 md:pb-0" data-testid="main-footer">
      {/* Premium top border with subtle gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
      
      <div className="py-20 md:py-24 lg:py-28">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12 mb-16 md:mb-20">
            {/* Company Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <OptimizedImage 
                  src="/logo2.png" 
                  alt="Ayurudnik Logo" 
                  className="h-10 w-10 object-contain"
                  priority={false}
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                    Gat No. 604/4,<br />
                    Janori-Jaulake Road, Janori,<br />
                    Tal. Dindori, Dist. Nashik,<br />
                    Maharashtra, India - 422206
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
