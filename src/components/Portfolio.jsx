import { useState, useRef, useEffect } from 'react';
import { Play, Sparkles, X, Clapperboard, Tv, Users, Heart, Volume2, VolumeX, ArrowUp, ArrowDown, ExternalLink, Film } from 'lucide-react';

const categories = [
  {
    id: 'visual-contents',
    title: 'Visual Contents',
    count: 5,
    description: 'Abstract visualizers, CGI dynamic simulations, and conceptual generative art.',
    icon: Clapperboard,
    image: '/brand-story.png',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 'ai-anchor',
    title: 'AI Anchor',
    count: 4,
    description: 'Virtual presentability, avatar talking hosts, and newsroom reporters.',
    icon: Users,
    image: '/social-campaign.png',
    bgGlow: 'rgba(34, 211, 238, 0.15)',
  },
  {
    id: 'ai-ads',
    title: 'AI Ads',
    count: 2,
    description: 'Premium product commercials, liquid simulations, and brand campaigns.',
    icon: Tv,
    image: '/product-commercial.png',
    bgGlow: 'rgba(0, 229, 168, 0.15)',
  },
];

const portfolioItems = [
  // Visual Contents (5 videos)
  {
    id: 1,
    title: 'Global Academy Distance Learning Class Ad',
    category: 'visual-contents',
    client: 'Back Bench Global Academy',
    duration: '0:20',
    tools: ['Midjourney v6', 'Runway Gen-3', 'Stable Diffusion'],
    description: 'A strategic online education advertisement showcasing modern distance learning features and virtual classrooms.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1000770648.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1000770648.mp4',
  },
  {
    id: 2,
    title: 'Eza Smart Home Automation & Security',
    category: 'visual-contents',
    client: 'Eza Automations',
    duration: '0:15',
    tools: ['Sora AI', 'Luma Dream Machine'],
    description: 'An immersive visualization of automated home security systems, detailing dynamic sensors and locks.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001350350.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001350350.mp4',
  },
  {
    id: 3,
    title: 'Camino Footwear Brand Launch Spot',
    category: 'visual-contents',
    client: 'Camino Footwear',
    duration: '0:18',
    tools: ['Kaiber AI', 'Premiere Pro'],
    description: 'CGI product ad highlighting premium footwear soles, dynamic fabrics, and advanced athletic shoe ergonomics.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001749065.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001749065.mp4',
  },
  {
    id: 4,
    title: 'Bright Event Managers Marriage Campaign',
    category: 'visual-contents',
    client: 'Bright Event Manager',
    duration: '0:22',
    tools: ['Leonardo AI', 'Runway Gen-2'],
    description: 'A beautiful visual display of marriage celebrations, luxury event setup, floral decors, and party coordination.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001820447.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001820447.mp4',
  },
  {
    id: 5,
    title: 'MetSand Construction Sand Manufacturing',
    category: 'visual-contents',
    client: 'MetSand',
    duration: '0:14',
    tools: ['Houdini CGI', 'Stable Video Diffusion'],
    description: 'CGI dynamic presentation showing the grading, processing, and solid application of high-quality industrial sand.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001924752.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Visual%20content/1001924752.mp4',
  },

  // AI Anchor (4 videos)
  {
    id: 6,
    title: 'La Casa Bridal Studio Fashion Showcase',
    category: 'ai-anchor',
    client: 'La Casa Bridal Studio',
    duration: '0:45',
    tools: ['HeyGen Studio', 'GPT-4 Voice', 'ElevenLabs'],
    description: 'A metahuman style host presenting luxury wedding gowns, studio decor, and bridal beauty services.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001854218.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001854218.mp4',
  },
  {
    id: 7,
    title: 'Raffle Smart Kitchen Appliances Brief',
    category: 'ai-anchor',
    client: 'Raffle Home Appliances',
    duration: '0:30',
    tools: ['Synthesia v3', 'D-ID Studio'],
    description: 'AI news presenter outlining the energy ratings and convenience factors of Raffle smart refrigerators and stoves.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001867599.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001867599.mp4',
  },
  {
    id: 8,
    title: 'Semicron Solar Power Infrastructure Launch',
    category: 'ai-anchor',
    client: 'Semicron Solar Energy',
    duration: '0:40',
    tools: ['SadTalker', 'ElevenLabs Pro'],
    description: 'An AI anchor delivering technical specifications of Semicron solar panel grids and residential battery storage.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001879360.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001879360.mp4',
  },
  {
    id: 9,
    title: 'Make My Yathra Global Tour Packages',
    category: 'ai-anchor',
    client: 'Make My Yathra Tours',
    duration: '0:15',
    tools: ['Luma Genie', 'HeyGen Avatar', 'Midjourney v6'],
    description: 'Interactive avatar holiday guide summarizing adventure itineraries and tour booking discounts.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001883094.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Anchor/1001883094.mp4',
  },

  // AI Ads (2 videos)
  {
    id: 10,
    title: 'Natour Farmers Organic Agriculture Spot',
    category: 'ai-ads',
    client: 'Natour Farmers Producer',
    duration: '0:45',
    tools: ['Midjourney v6', 'Runway Gen-3', 'Sora AI', 'Suno Audio'],
    description: 'A cinematic brand film detailing local farmer communities, fresh organic harvest, and direct supply lines.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Ads/1001877568.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Ads/1001877568.mp4',
  },
  {
    id: 11,
    title: 'VNM Jewel Boutique Diamond Signature',
    category: 'ai-ads',
    client: 'VNM Jewel Boutique',
    duration: '2:15',
    tools: ['Sora AI', 'Leonardo AI', 'ElevenLabs Voice', 'DaVinci Resolve'],
    description: 'Luxury creative ad showcasing gold designs, luxury necklaces, ring glints, and boutique craftsmanship.',
    image: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Ads/1001889643.jpg',
    videoUrl: 'https://res.cloudinary.com/dqwh5ytw/video/upload/f_auto,q_auto,w_720,h_1280,c_fill/portfo-videoContent/Ai-Ads/1001889643.mp4',
  },
];

export default function Portfolio({ activeReels, setActiveReels }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [shuffledAllItems, setShuffledAllItems] = useState([]);

  const scrollContainerRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    if (activeReels === 'random-all') {
      const shuffled = [...portfolioItems].sort(() => Math.random() - 0.5);
      setShuffledAllItems(shuffled);
    } else {
      setShuffledAllItems([]);
    }
  }, [activeReels]);

  const isRandomAll = activeReels === 'random-all';
  const filteredItems = isRandomAll
    ? shuffledAllItems
    : activeReels
    ? portfolioItems.filter((item) => item.category === activeReels)
    : [];

  const activeVideo = filteredItems[activeVideoIndex] || null;

  // IntersectionObserver for auto-play / auto-pause on scroll
  useEffect(() => {
    if (!activeReels || filteredItems.length === 0) return;

    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.6, // Fire when 60% of the video is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const index = Number(video.dataset.index);

        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setActiveVideoIndex(index);
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Give Vite/React a moment to render elements in the DOM before observing
    const timer = setTimeout(() => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) observer.observe(video);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeReels, filteredItems.length]);

  const handleCloseReels = () => {
    // Pause all playing videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.pause();
    });
    setActiveReels(null);
    setActiveVideoIndex(0);
  };

  const toggleMuteAll = () => {
    setIsMuted(!isMuted);
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  };



  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  const jumpToVideo = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement && scrollContainerRef.current) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    handleCloseReels();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-4 bg-[#0F1117] border-y border-white/5 overflow-hidden"
    >
      {/* Background soft glow blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-purple tracking-widest uppercase mb-4">
            <Film className="w-3 h-3" />
            <span>Featured AI Productions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Select a Creative Category
          </h2>
          <p className="font-sans text-stone-400 text-sm mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Click a showcase category below to open our immersive portrait vertical video deck. Scroll, listen to, and examine Hollywood-standard AI synthesis.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveReels(cat.id)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 cursor-pointer p-1 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 shadow-xl"
                data-hover
              >
                {/* Backdrop Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[40px] z-0"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cat.bgGlow} 0%, transparent 60%)`,
                  }}
                />

                {/* Card Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 z-10" />
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-black/60 text-[10px] uppercase tracking-wider text-brand-cyan border border-white/5 font-semibold backdrop-blur-md">
                    {cat.count} Videos
                  </div>
                </div>

                {/* Card Detail Content */}
                <div className="p-6 relative z-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-all">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-stone-400 text-xs font-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold text-white uppercase tracking-wider group-hover:text-brand-purple transition-colors">
                    <span>Enter Showcase Feed</span>
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Immersive Vertical-Snapping TikTok/Reels Modal */}
      {activeReels && (
        <div className="fixed inset-0 z-50 bg-[#070707] flex items-center justify-center p-0 md:p-4 animate-fadeIn">
          {/* Main Overlay Split Dashboard */}
          <div className="relative w-full h-full max-w-5xl md:h-[90vh] rounded-none md:rounded-3xl overflow-hidden border-none md:border md:border-white/10 bg-[#070707] shadow-2xl flex flex-col md:flex-row">
            
            {/* LEFT: Smartphone Reels snap-y feed container */}
            <div className="relative flex-grow h-[100dvh] md:h-full flex items-center justify-center bg-black">
              
              {/* Close button for mobile floating */}
              <button
                onClick={handleCloseReels}
                className="absolute top-4 left-4 z-40 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 cursor-pointer"
                title="Close Feed"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Vertical Snapping Scroll Feed */}
              <div
                ref={scrollContainerRef}
                className="w-full max-w-[420px] h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="w-full h-full snap-start relative flex items-center justify-center bg-stone-950"
                  >
                    {/* Background Blur Reflective Backdrop for desktop styling */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 pointer-events-none scale-110"
                      style={{ backgroundImage: `url(${item.image || '/images/logo.png'})` }}
                    />

                    {/* Video Player */}
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      data-index={idx}
                      src={item.videoUrl}
                      loop
                      playsInline
                      muted={isMuted}
                      className="w-full h-full object-cover relative z-10"
                    />

                    {/* Mobile Floating HUD details (rendered inside video viewport) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />

                    {/* Bottom HUD Left: Info details */}
                    <div className="absolute bottom-6 left-6 right-16 z-30 text-left pointer-events-none text-white">
                      <span className="text-[9px] uppercase tracking-widest text-brand-cyan font-bold block mb-1">
                        {item.client}
                      </span>
                      <h4 className="font-display text-base font-bold mb-3 pr-2">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {item.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white/10 text-[8px] text-white/80 border border-white/5 backdrop-blur-md"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Floating Actions (Mobile Reels style) */}
                    <div className="absolute bottom-6 right-4 z-30 flex flex-col items-center gap-5">

                      {/* Mute button */}
                      <button
                        onClick={toggleMuteAll}
                        className="w-11 h-11 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-5 h-5 text-stone-300" /> : <Volume2 className="w-5 h-5 text-brand-cyan" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Scroll Assistant Handles on the sides of the bezel */}
              <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-30">
                <button
                  onClick={scrollPrev}
                  disabled={activeVideoIndex === 0}
                  className="w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-brand-purple/20 hover:border-brand-purple disabled:opacity-40 disabled:hover:bg-black/70 disabled:hover:border-white/10 transition-all cursor-pointer"
                  title="Previous Video"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={activeVideoIndex === filteredItems.length - 1}
                  className="w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-brand-purple/20 hover:border-brand-purple disabled:opacity-40 disabled:hover:bg-black/70 disabled:hover:border-white/10 transition-all cursor-pointer"
                  title="Next Video"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT: Desktop HUD Metadata Panel (hidden on mobile) */}
            <div className="hidden md:flex flex-col justify-between w-[350px] h-full p-8 bg-stone-950 border-l border-white/10 relative z-20 text-left">
              <div>
                {/* Header title */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-purple font-bold block">
                      Production Feed
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-1">
                      {isRandomAll ? 'Randomized Showreel' : activeReels === 'visual-contents' ? 'Visual Contents' : activeReels === 'ai-anchor' ? 'AI Anchors' : 'AI Ads'}
                    </h3>
                  </div>
                  <button
                    onClick={handleCloseReels}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 cursor-pointer"
                    title="Close Panel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Active Video Info Details */}
                {activeVideo && (
                  <div className="mt-8 space-y-6 animate-fadeIn">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">
                        Active Client
                      </span>
                      <p className="text-sm font-semibold text-white mt-1">
                        {activeVideo.client}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">
                        Project Name
                      </span>
                      <h4 className="font-display text-lg font-bold text-brand-cyan mt-1 leading-snug">
                        {activeVideo.title}
                      </h4>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">
                        Overview Description
                      </span>
                      <p className="font-sans text-stone-400 text-xs font-light mt-1.5 leading-relaxed">
                        {activeVideo.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">
                        Interactive Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {activeVideo.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] text-white/80 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Playlist Jump Tracks index */}
                <div className="mt-10">
                  <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-3">
                    Playlist Tracks
                  </span>
                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                    {filteredItems.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => jumpToVideo(idx)}
                        className={`w-full text-left py-1.5 px-3 rounded-lg text-[10px] font-semibold uppercase tracking-wider flex items-center justify-between border transition-all cursor-pointer ${
                          activeVideoIndex === idx
                            ? 'bg-brand-purple/20 border-brand-purple/30 text-white'
                            : 'bg-white/2 border-transparent text-stone-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate max-w-[180px]">{item.title}</span>
                        <span className="font-mono text-[9px] text-brand-cyan">{item.duration}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call Booking Quick CTA */}
              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-[10px] font-bold uppercase tracking-widest text-center text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-lg"
                >
                  <span>Build custom reel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
