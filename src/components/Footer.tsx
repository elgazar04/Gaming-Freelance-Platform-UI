import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#careers' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Cookie Policy', href: '#cookies' },
      ]
    }
  ];

  return (
    <footer className="section-spacing border-t-2 border-[#333] bg-[#0D0D0D]">
      <div className="landing-container">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 card-grid-medium content-spacing-xl">
          {/* Brand Section */}
          <div>
            <button 
              onClick={() => onNavigate?.('landing')}
              className="flex items-center gap-3 content-spacing-md hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-[#00FF9D] text-2xl font-bold">GameBoost</h3>
            </button>
            <p className="text-secondary text-base leading-relaxed">
              The premier platform for gaming freelancers
            </p>
          </div>
          
          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h6 className="heading-spacing-sm font-semibold text-lg text-primary">
                {section.title}
              </h6>
              <div className="flex flex-col list-spacing-md">
                {section.links.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    className="text-secondary hover:text-[#00FF9D] text-base transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="pt-8 sm:pt-12 mt-8 border-t border-[#333] text-center">
          <p className="text-secondary text-base">
            © {currentYear} GameBoost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

