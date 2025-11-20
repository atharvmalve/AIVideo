import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const HeroVideo = '../assets/hero.mp4';

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white">
      {/* Video background wrapper (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Video element */}
        <video
          aria-hidden
          role="presentation"
          src={HeroVideo}
          muted
          loop
          autoPlay
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover min-h-full min-w-full bg-black absolute inset-0 transform scale-[1.03] filter grayscale contrast-90 transition-opacity duration-1000 ease-in-out opacity-42 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradient overlay to blend with the dark theme. Heavier on mobile, softer on desktop. */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out">
          {/* top-to-bottom subtle gradient to blend video into page */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/85 sm:from-black/60 sm:via-black/60 sm:to-black" />

          {/* subtle vignette to keep edges darker */}
          <div className="absolute inset-0 bg-radial-to-t from-black/60 to-transparent opacity-40" />
        </div>
      </div>

      {/* Existing subtle background effects (kept above video) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-acid/[0.05] rounded-full blur-[150px]" />
      </div>

      {/* Noise Overlay (kept above video and subtle) */}
      <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay z-20 opacity-40" />

      {/* Main content */}
      <Container className="relative z-30">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-medium tracking-wider uppercase text-acid">New Course</span>
          </div>

          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            AI Videos That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-[#92b300]">Don’t Look AI.</span>
            <br />
            They Look Human.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed font-light">
            Stop generating noise. Start crafting stories that feel real. Master the workflow that bridges the gap between artificial and authentic.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button
              href="#cta"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Build Your First Realistic AI UGC →
            </Button>
          </div>

          {/* <div className="mt-16 flex items-center space-x-4 text-sm text-neutral-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px]">
                  <img src={`https://picsum.photos/32/32?random=${i}`} alt="User" className="w-full h-full rounded-full opacity-60 grayscale" />
                </div>
              ))}
            </div>
            <span>Joined by 400+ creators this week</span>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

// export default Hero;
