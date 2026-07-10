import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Cine Plus Ads generated our entire launch campaign in under 48 hours. The visual scale and fluid simulations were spectacular. They saved us over $250k in CGI rendering and physical set-building logistics.",
    author: "Marcus Thorne",
    role: "VP of Brand Development",
    company: "Aura Luxury Group",
    logoText: "AURA",
    rating: 5,
  },
  {
    id: 2,
    quote: "The click-through rate on our social fashion campaigns skyrocketed by 300% within a week of launching their AI vertical commercials. The aesthetic is incredibly premium, matching high-fashion benchmarks.",
    author: "Elena Rostov",
    role: "Global Marketing Director",
    company: "Noveau Syndicate",
    logoText: "NVEAU",
    rating: 5,
  },
  {
    id: 3,
    quote: "We were highly skeptical of generative AI's capacity for coherent storytelling. Cine Plus Ads proved us wrong. The narrative flow, custom synthesized voice acting, and cinematic pacing are true Hollywood-level craft.",
    author: "Sean Kelly",
    role: "Director of Interactive Storytelling",
    company: "Starlight Corp",
    logoText: "STRLT",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 px-4 bg-[#070707] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Quote Icon Indicator */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
            <Quote className="w-6 h-6 text-brand-cyan fill-brand-cyan/10" />
          </div>
        </div>

        {/* Testimonials Slider Card */}
        <div 
          className="glass-card-no-hover rounded-2xl p-8 sm:p-12 border border-white/5 text-center min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          data-hover
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Active Review Quote */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-brand-success fill-brand-success" />
              ))}
            </div>

            <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed italic mb-8">
              "{testimonials[activeIndex].quote}"
            </p>
          </div>

          {/* Author Details & Logos */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-display text-base font-bold text-white">
                {testimonials[activeIndex].author}
              </h4>
              <p className="font-sans text-xs text-stone-400 font-light mt-0.5">
                {testimonials[activeIndex].role} &mdash; <span className="text-brand-cyan">{testimonials[activeIndex].company}</span>
              </p>
            </div>

            {/* Client Mock Logo Display */}
            <div className="flex items-center gap-2">
              <span className="font-display text-xs font-semibold tracking-widest text-stone-500 border border-stone-800 px-3 py-1.5 rounded bg-white/2">
                {testimonials[activeIndex].logoText}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer"
            data-hover
            title="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Bullet Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-brand-cyan' : 'bg-stone-700'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer"
            data-hover
            title="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
