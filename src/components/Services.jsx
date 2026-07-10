import { Sparkles, Tv, Clapperboard, Rocket, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Cinematic AI Advertisements',
    description: 'High-concept television and digital advertisements. We combine neural rendering pipelines with traditional CGI to build spectacular cinematic worlds and visual effects that would normally cost millions.',
    icon: Clapperboard,
    colorClass: 'group-hover:text-brand-purple',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
    bullets: ['Epic-scale world building', 'Advanced neural CGI integration', 'Hyper-realistic character actors', 'Custom cinematic score'],
  },
  {
    id: 2,
    title: 'Premium Product Commercials',
    description: 'Bespoke, high-end product films with liquid simulations, close-up macro shots, and studio lighting setups. Ideal for luxury goods, tech products, automotive industries, and cosmetics.',
    icon: Tv,
    colorClass: 'group-hover:text-brand-cyan',
    bgGlow: 'rgba(34, 211, 238, 0.15)',
    bullets: ['Photorealistic liquid & physics simulation', 'Ultra-detailed macro cinematography', 'Luxury ambient lighting design', 'Dynamic camera motions'],
  },
  {
    id: 3,
    title: 'Cinematic Brand Storytelling',
    description: 'Immersive brand narratives that build deep emotional connections with your audience. We script, generate, voiceover, and engineer complete narrative campaigns.',
    icon: Sparkles,
    colorClass: 'group-hover:text-brand-blue',
    bgGlow: 'rgba(79, 70, 229, 0.15)',
    bullets: ['Concept & scripting development', 'AI-generated emotive voiceovers', 'Photorealistic cinematic formatting', 'Cohesive brand identity design'],
  },
  {
    id: 4,
    title: 'Social Media Campaigns',
    description: 'Viral, high-velocity video hooks designed for TikTok, Reels, and YouTube Shorts. Keep your audience engaged with cutting-edge visual concepts and rapid-release content loops.',
    icon: Rocket,
    colorClass: 'group-hover:text-brand-success',
    bgGlow: 'rgba(0, 229, 168, 0.15)',
    bullets: ['Viral hook generation systems', 'Vertical content optimization', 'Trendy audio sync workflows', 'Dynamic, engaging typography overlays'],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 bg-[#070707] overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-cyan tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Cinematic AI Solutions Built for Conversion
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base mt-4 font-light">
            We merge standard film production metrics with the speed and visual limitlessness of next-generation artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-6 sm:p-8 glass-card border border-white/5 flex flex-col justify-between overflow-hidden"
                data-hover
              >
                {/* Background Hover Glow Blob */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[40px]"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${service.bgGlow} 0%, transparent 60%)`,
                  }}
                />

                <div>
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-115 group-hover:border-white/20 transition-all duration-500 shadow-md">
                    <Icon className={`w-5 h-5 text-white transition-colors duration-300 ${service.colorClass}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-stone-300 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="border-t border-white/5 pt-6 mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-stone-400 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-success shrink-0" />
                        <span className="font-light">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
