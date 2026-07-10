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

  // Lock screen scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300">
      {/* Click outside to close backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#070707]/75 backdrop-blur-md z-30 md:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 relative z-40 ${
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
          {!isMobileMenuOpen && (
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
          )}

          {/* Hamburger Icon Toggle on Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer relative z-40"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="w-full max-w-5xl mt-3 rounded-2xl glass-card border border-white/10 p-5 flex flex-col gap-3 md:hidden shadow-2xl relative z-40">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer animate-mobile-nav ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-brand-purple/15 to-brand-cyan/15 border border-brand-purple/20 text-white shadow-sm font-bold'
                  : 'text-stone-400 hover:text-white hover:bg-white/5 border border-transparent font-medium'
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{item.label}</span>
                {activeSection === item.id && <Sparkles className="w-3.5 h-3.5 text-red-500" />}
              </span>
            </button>
          ))}
          
          <button
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
            style={{ animationDelay: `${navItems.length * 50}ms` }}
            className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-[10px] font-bold uppercase tracking-widest text-center text-white cursor-pointer shadow-[0_4px_20px_rgba(139,92,246,0.35)] animate-mobile-nav"
          >
            Book Introduction Call
          </button>

          {/* Divider */}
          <div 
            className="h-px bg-white/10 my-2 animate-mobile-nav"
            style={{ animationDelay: `${(navItems.length + 1) * 50}ms` }}
          />

          {/* Social & Contact info */}
          <div 
            className="flex flex-col gap-4 px-2 py-1 animate-mobile-nav"
            style={{ animationDelay: `${(navItems.length + 2) * 50}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  title="Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  title="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-[9px] text-stone-500 font-light mt-1 border-t border-white/5 pt-2.5">
              <div className="flex justify-between">
                <span>Get in touch:</span>
                <a href="mailto:hello@cineplusads.com" className="text-stone-400 hover:text-white transition-colors">hello@cineplusads.com</a>
              </div>
              <div className="flex justify-between">
                <span>Operational Status:</span>
                <span className="text-emerald-500 font-semibold tracking-wider flex items-center gap-1.5 uppercase text-[8px]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E5A8]"></span>
                  </span>
                  All Engines Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
