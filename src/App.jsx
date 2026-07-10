import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeReels, setActiveReels] = useState(null); // null, 'visual-contents', 'ai-anchor', 'ai-ads', or 'random-all'

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-brand-purple/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero onExploreShowreel={() => setActiveReels('random-all')} />

      {/* Portfolio Grid */}
      <Portfolio activeReels={activeReels} setActiveReels={setActiveReels} />

      {/* Services Grid */}
      <Services />

      {/* Agency Philosophy & Stats */}
      <About />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Booking & Consultation Forms */}
      <Contact />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
