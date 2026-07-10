import { Cpu, Zap, DollarSign, Clock, Check } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'CTR Increase',
    value: '4.5x',
    description: 'Higher engagement rates compared to traditional video ad templates.',
    icon: Zap,
    color: 'text-brand-purple',
  },
  {
    id: 2,
    label: 'Production Speed',
    value: '10x',
    description: 'From script approval to final render in days instead of months.',
    icon: Clock,
    color: 'text-brand-cyan',
  },
  {
    id: 3,
    label: 'Cost Reduction',
    value: '80%',
    description: 'Massive savings by bypassing sets, logistics, and huge film crews.',
    icon: DollarSign,
    color: 'text-brand-success',
  },
  {
    id: 4,
    label: 'Rendering Pipelines',
    value: '12K+',
    description: 'Cinematic commercial frames synthesized and optimized per project.',
    icon: Cpu,
    color: 'text-brand-blue',
  },
];

const techStack = [
  { name: 'Sora AI', description: 'Hyper-realistic video generation' },
  { name: 'Midjourney v6', description: 'High-concept photorealistic styling' },
  { name: 'Runway Gen-3', description: 'Temporal motion control & synthesis' },
  { name: 'Stable Diffusion', description: 'Custom product model training' },
  { name: 'DaVinci Resolve', description: 'Hollywood studio color grading' },
  { name: 'ElevenLabs', description: 'Next-gen voice & audio synthesis' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 bg-[#0F1117] border-y border-white/5 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: Philosophy Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-purple tracking-widest uppercase">
              <Cpu className="w-3 h-3" />
              <span>Agency Manifesto</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Human Direction. <br />
              <span className="text-gradient-purple font-display">Neural Synthesis.</span>
            </h2>
            
            <p className="font-sans text-stone-300 text-sm leading-relaxed font-light">
              At Cine Plus Ads, we believe AI is not a replacement for creative direction—it is the ultimate amplifier of human imagination. We combine award-winning storytelling instincts with cutting-edge diffusion pipelines.
            </p>
            
            <p className="font-sans text-stone-400 text-sm leading-relaxed font-light">
              By bypassing physical constraints, weather, expensive equipment, and traditional logistics, we focus 100% of our energy on concept craft, visual perfection, and strategic positioning.
            </p>

            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-stone-300 text-xs">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/15 flex items-center justify-center shrink-0 border border-brand-cyan/30">
                  <Check className="w-3 h-3 text-brand-cyan" />
                </div>
                <span>Premium CGI-grade detail control</span>
              </li>
              <li className="flex items-center gap-3 text-stone-300 text-xs">
                <div className="w-5 h-5 rounded-full bg-brand-purple/15 flex items-center justify-center shrink-0 border border-brand-purple/30">
                  <Check className="w-3 h-3 text-brand-purple" />
                </div>
                <span>Proprietary AI model pre-training</span>
              </li>
              <li className="flex items-center gap-3 text-stone-300 text-xs">
                <div className="w-5 h-5 rounded-full bg-brand-success/15 flex items-center justify-center shrink-0 border border-brand-success/30">
                  <Check className="w-3 h-3 text-brand-success" />
                </div>
                <span>4K master exports with HDR standard color</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between group"
                  data-hover
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                      {stat.label}
                    </span>
                    <Icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="font-sans text-stone-400 text-xs leading-relaxed font-light">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Panel */}
        <div className="mt-20 p-8 rounded-2xl glass-card border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-cyan/5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xs">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Our Production Stack
              </h3>
              <p className="font-sans text-stone-400 text-xs leading-relaxed font-light">
                We orchestrate the absolute industry standards of generative cinema and sound engineering.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow max-w-3xl">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 rounded-xl bg-white/3 border border-white/5 hover:border-brand-purple/20 transition-all duration-300"
                  data-hover
                >
                  <h4 className="font-display text-xs font-bold text-white group-hover:text-brand-cyan">
                    {tech.name}
                  </h4>
                  <p className="font-sans text-stone-500 text-[10px] mt-0.5 font-light">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
