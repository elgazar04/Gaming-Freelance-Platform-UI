import React, { useState } from 'react';
import { GlowButton } from './GlowButton';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  showAuthButtons?: boolean;
  showNavLinks?: boolean;
}

export function Navbar({ 
  onNavigate, 
  showAuthButtons = true,
  showNavLinks = true 
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#333] shadow-lg">
      <div className="landing-container py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate?.('landing')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center shadow-lg">
              <span className="text-xl sm:text-2xl">⚡</span>
            </div>
            <h3 className="text-[#00FF9D] text-xl sm:text-2xl font-bold">GameBoost</h3>
          </button>
          
          {/* Desktop Navigation Links */}
          {showNavLinks && (
            <div className="hidden md:flex items-center button-spacing-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-[#B0B0B0] hover:text-[#00FF9D] transition-colors font-medium text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          
          {/* Desktop Auth Buttons */}
          {showAuthButtons && (
            <div className="hidden md:flex items-center button-spacing-md">
              <button 
                onClick={() => onNavigate?.('login')}
                className="btn btn-ghost btn-md"
              >
                Login
              </button>
              <GlowButton 
                onClick={() => onNavigate?.('register')}
                variant="primary"
                size="md"
              >
                Get Started
              </GlowButton>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#B0B0B0] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#333]">
            {/* Mobile Nav Links */}
            {showNavLinks && (
              <div className="flex flex-col list-spacing-md content-spacing-lg">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    className="text-[#B0B0B0] hover:text-[#00FF9D] transition-colors font-medium text-base py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile Auth Buttons */}
            {showAuthButtons && (
              <div className="flex flex-col list-spacing-sm pt-4 border-t border-[#333] mt-4">
                <button 
                  onClick={() => {
                    onNavigate?.('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn btn-ghost btn-md btn-block"
                >
                  Login
                </button>
                <GlowButton 
                  onClick={() => {
                    onNavigate?.('register');
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  size="md"
                  fullWidth
                >
                  Get Started
                </GlowButton>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

