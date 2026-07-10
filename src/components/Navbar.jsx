import { useEffect, useState, useRef } from 'react';
import { Sparkles, Calendar, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRefs = useRef({});

  // Detect scroll to make navbar darker
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section on scroll using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smoothly move active indicator pill
  useEffect(() => {
    const activeEl = navRefs.current[activeSection];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-40 flex flex-col items-center px-4 transition-all duration-300">
      <div
        className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'glass-navbar glass-navbar-scrolled' : 'glass-navbar'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => {
            scrollToSection('hero');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-stone-200 to-stone-400 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(192,26,34,0.3)] flex items-center justify-center shrink-0 group-hover:border-red-500/40 transition-colors duration-300">
            <img 
              src="/images/logo.png" 
              className="w-full h-full object-cover" 
              alt="Cine Plus Ads Icon" 
            />
          </div>
          <span>CINE PLUS <span className="text-red-500 font-extrabold">ADS</span></span>
        </button>

        {/* Center Navigation Links (Pill Style - Desktop) */}
        <nav className="relative hidden md:flex items-center gap-1 bg-white/5 border border-white/5 py-1 px-1.5 rounded-full">
          {/* Active Indicator Sliding Pill */}
          <div
            className="absolute h-[80%] top-[10%] bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 border border-brand-purple/30 rounded-full transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />

          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => (navRefs.current[item.id] = el)}
              onClick={() => scrollToSection(item.id)}
              className={`relative z-10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full transition-colors duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Controls Container */}
        <div className="flex items-center gap-2">
          {/* Call to Action Booking Button */}
          <button
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
            className="glass-button text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 hover:border-brand-cyan/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="hidden sm:inline">Book a Call</span>
          </button>

          {/* Hamburger Icon Toggle on Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="w-full max-w-5xl mt-3 rounded-2xl glass-card border border-white/10 p-5 flex flex-col gap-3 animate-fadeIn md:hidden shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border border-brand-purple/20 text-white shadow-sm'
                  : 'text-stone-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-[10px] font-bold uppercase tracking-widest text-center text-white cursor-pointer shadow-[0_4px_20px_rgba(139,92,246,0.35)]"
          >
            Book Introduction Call
          </button>
        </div>
      )}
    </header>
  );
}
