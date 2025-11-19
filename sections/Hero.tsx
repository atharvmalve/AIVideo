import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-fit flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-acid/[0.05] rounded-full blur-[150px]" />
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay z-10" />

      <Container className="relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-medium tracking-wider uppercase text-acid">New Course</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up">
            AI Videos That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">Don’t Look AI.</span>
            <br />
            They Look Human.
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stop generating noise. Start crafting stories that feel real. 
            Master the workflow that bridges the gap between artificial and authentic.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button href="#cta" onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({behavior: 'smooth'}); }}>
              Build Your First Realistic AI UGC →
            </Button>
          </div>
          
          {/* <div className="mt-16 flex items-center space-x-4 text-sm text-neutral-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
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