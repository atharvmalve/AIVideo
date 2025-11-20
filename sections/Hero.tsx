import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
const HeroWebp = '../assets/hero.webp'; // <- import the file

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black text-white">
      {/* Background (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* animated webp as image fallback */}
        <img
          src={HeroWebp}           // <- use the imported variable
          alt=""
          aria-hidden
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover min-w-full min-h-full transform scale-[1.03] filter grayscale contrast-90 transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-50' : 'opacity-0'}`}
          style={{ willChange: 'opacity, transform' }}
        />

        {/* gradient overlay to blend with dark theme (heavier on mobile) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-offblack sm:from-black/40 sm:via-transparent sm:to-black" />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6), rgba(0,0,0,0) 40%)',
              opacity: 0.4,
            }}
          />
        </div>
      </div>

      {/* Decorative glows above background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-acid/[0.05] rounded-full blur-[150px]" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay z-20 opacity-40" />

      {/* Content (z-30) */}
      <Container className="relative z-30">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-medium tracking-wider uppercase text-acid">New Course</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
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
        </div>
      </Container>
    </section>
  );
};
