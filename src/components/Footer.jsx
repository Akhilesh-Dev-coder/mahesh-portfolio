import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/5 py-12 px-4 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[600px] h-[200px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Headline */}
          <div className="text-center md:text-left space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-center md:justify-start gap-2.5 font-display font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_12px_rgba(192,26,34,0.3)] flex items-center justify-center shrink-0">
                <img 
                  src="/images/logo.png" 
                  className="w-full h-full object-cover" 
                  alt="Cine Plus Ads Icon" 
                />
              </div>
              <span>CINE PLUS <span className="text-red-500 font-extrabold">ADS</span></span>
            </button>
            <p className="font-sans text-stone-500 text-xs font-light">
              Crafting premium AI video campaigns for next-generation brands.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-400 font-semibold">
            {['portfolio', 'services', 'about', 'testimonials', 'contact'].map((sect) => (
              <button
                key={sect}
                onClick={() => scrollToSection(sect)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {sect}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              title="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              title="Vimeo"
            >
              <ArrowUpRight className="w-4 h-4 text-brand-purple" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright details & Live Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-stone-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} Cine Plus Ads Agency. All Rights Reserved.
          </div>

          {/* Premium Operational Dot */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-success"></span>
            </span>
            <span className="uppercase tracking-widest text-[9px] font-semibold text-stone-400">All Neural Engines Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
