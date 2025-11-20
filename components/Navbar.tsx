import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { NavLink } from '../types';
import { Menu, X } from 'lucide-react';

const links: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Why This Course', href: '#why' },
  { label: 'What You’ll Learn', href: '#learn' },
  { label: 'Who This Is For', href: '#who' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // handle scroll: update scrolled state AND always close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // <-- important: close mobile menu when user scrolls (prevents overlay showing on scroll)
      if (isMobileMenuOpen && scrolled) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = original || '';
    return () => { document.body.style.overflow = original || ''; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 md:h-24 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-semibold tracking-tight text-white group transition-opacity hover:opacity-80"
          >
            atharv
            <span className="text-acid inline-block transition-transform group-hover:-translate-y-1 duration-300">.</span>
          </a>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="md:flex hidden items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 rounded-full border border-white/10 text-xs font-medium text-black bg-[#cfff00] hover:opacity-95 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100  pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* internal close button (redundant but useful) */}
        <button
          className="absolute top-6 right-6 text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col space-y-6 bg-black/90">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-neutral-300 hover:text-acid transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8 border-t border-white/10">
            <a
              href="#cta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-4 rounded-[10px] bg-[#cfff00] text-black font-medium text-lg"
            >
              Build Your First Video
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
