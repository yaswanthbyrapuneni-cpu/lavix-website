import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { LavixLogo } from './LavixLogo';

interface NavbarProps {
  onOpenBookDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // High performance IntersectionObserver for exact section highlight
    const visibleRatios = new Map<string, number>();
    const sections = ['hero', 'features', 'solutions', 'deployment', 'pricing', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let maxRatio = 0;
        let mostVisible = '';
        visibleRatios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible) {
          setActiveSection(mostVisible);
        }
      },
      {
        rootMargin: '-15% 0px -45% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Deployment', href: '#deployment', id: 'deployment' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'py-3' : 'py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2 ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-[#6E1F1F]/08'
              : 'bg-[#FFF8F0]/85 backdrop-blur-md shadow-soft'
          }`}
        >
          
          {/* Left: LAVIX AI Brand Logo */}
          <a href="#hero" className="flex items-center group shrink-0 py-0.5">
            <LavixLogo size="md" showTagline={true} />
          </a>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFF9F2]/80 backdrop-blur-md px-3 py-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#6E1F1F] bg-[#6E1F1F]/10 font-bold shadow-xs'
                      : 'text-[#4E312A] hover:text-[#6E1F1F] hover:bg-[#FFF4E8]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Book Demo Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBookDemo}
              className="relative group overflow-hidden rounded-full bg-[#6E1F1F] text-white hover:bg-[#8B3E2F] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-[#6E1F1F]/20 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#F2B84A]" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-2 shrink-0">
            <button
              onClick={onOpenBookDemo}
              className="sm:hidden text-xs font-bold px-3.5 py-2 rounded-full bg-[#6E1F1F] text-white flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
            >
              <span>Book Demo</span>
              <Sparkles className="w-3.5 h-3.5 text-[#F2B84A]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#2A1C18] hover:bg-[#FFF4E8] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#6E1F1F]" /> : <Menu className="w-5 h-5 text-[#2A1C18]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#F1E4D3] p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-2xl transition-all ${
                      isActive
                        ? 'bg-[#6E1F1F] text-white shadow-md'
                        : 'text-[#2A1C18] hover:bg-[#FFF9F2] hover:text-[#6E1F1F]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Bottom Action */}
            <div className="pt-3 border-t border-[#F1E4D3]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookDemo();
                }}
                className="w-full py-3.5 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#6E1F1F]/25 active:scale-95 transition-all"
              >
                <span>Book Live Demo</span>
                <ArrowRight className="w-4 h-4 text-[#F2B84A]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
