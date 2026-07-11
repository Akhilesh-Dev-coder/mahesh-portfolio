import { useEffect, useRef } from 'react';
import { Play, Calendar } from 'lucide-react';

export default function Hero({ onExploreShowreel }) {
  const canvasRef = useRef(null);

  // Particle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.growing = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce/Wrap boundaries
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Breathe effect (opacity pulsing)
        if (this.growing) {
          this.alpha += this.fadeSpeed;
          if (this.alpha >= 0.7) this.growing = false;
        } else {
          this.alpha -= this.fadeSpeed;
          if (this.alpha <= 0.1) this.growing = true;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${this.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#22D3EE';
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#070707] flex flex-col items-center justify-center pt-24 px-4 overflow-hidden"
    >
      {/* Drifting Particle Canvas */}
      <canvas ref={canvasRef} className="particles-canvas absolute inset-0 z-0" />

      {/* Floating Glass Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[5%] sm:left-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-purple/10 rounded-full blur-[100px] sm:blur-[130px] animate-float-slow animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] sm:right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] sm:blur-[140px] animate-float-medium animate-pulse-slow" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center mt-8 sm:mt-12">
        {/* Massive Luxury Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
          AI Videos That Sell,{' '}
          <span className="text-gradient-purple font-display">Inspire</span> &{' '}
          <span className="text-gradient-cyan font-display">Go Viral</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-xl text-stone-300 max-w-2xl leading-relaxed mb-10 font-light">
          We create cinematic AI advertisements, premium product commercials, brand stories, and hyper-targeted social media campaigns that captivate audiences and drive hyper-growth.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 z-20">
          <button
            onClick={onExploreShowreel}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-sm font-semibold uppercase tracking-wider text-white shadow-[0_4px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_40px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
            data-hover
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Explore Showreel</span>
          </button>
          <a
            href="https://wa.me/917907593132?text=Hi%20Mahesh%2C%20I%27d%20like%20to%20book%20a%20consultation%20for%20my%20AI%20video%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass-button text-sm font-semibold uppercase tracking-wider text-white border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
            data-hover
          >
            <Calendar className="w-4 h-4 text-brand-cyan" />
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Premium Showreel Interactive Preview Card */}
        <div 
          onClick={onExploreShowreel}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden glass-card p-2 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group"
          data-hover
        >
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
          
          {/* Outer glow borders */}
          <div className="absolute inset-0 border border-brand-purple/10 rounded-2xl pointer-events-none group-hover:border-brand-purple/30 transition-colors" />

          {/* Interactive Play Button Ring */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/50 transition-all duration-500 shadow-2xl">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5" />
            </div>
          </div>

          {/* Backdrop Image */}
          <img
            src="/hero-bg.png"
            alt="Cine Plus Ads Cinematic AI Showreel Preview"
            className="w-full aspect-[16/9] object-cover rounded-xl filter brightness-[0.75] group-hover:scale-[1.01] transition-transform duration-700"
          />

          {/* Bottom Card Meta Details */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left z-20 pointer-events-none">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-cyan font-semibold">2026 Showreel</p>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white mt-1">Crafting the Future of Cinema</h3>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded bg-black/40 text-[10px] uppercase tracking-wider text-white border border-white/5 backdrop-blur-md">
              02:14 Min
            </span>
          </div>
        </div>
      </div>


      {/* Scroll Down Indicator */}
      <div 
        onClick={() => {
          const el = document.getElementById('portfolio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-stone-500 hover:text-white transition-colors duration-300 z-10 hidden md:flex"
      >
        <span className="text-[9px] uppercase tracking-widest font-semibold">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-stone-600 flex justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-brand-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
}
