import React from 'react';
import { Container } from '../components/Container';

export const Why: React.FC = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-offblack relative">
      <Container>
        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-16" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
             <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">The Why</h2>
             <p className="text-acid font-medium">Why I built this.</p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              <h3 className="text-3xl md:text-5xl font-medium leading-tight text-white">
                Because I was tired of <span className="text-neutral-500">lifeless AI ads.</span>
              </h3>
              <h3 className="text-3xl md:text-5xl font-medium leading-tight text-white">
                Because creativity deserves <span className="text-neutral-500">more than presets.</span>
              </h3>
              <h3 className="text-3xl md:text-5xl font-medium leading-tight text-white">
                Because AI isn’t the vision — <span className="text-acid">you are.</span>
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};