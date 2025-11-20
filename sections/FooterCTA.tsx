import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const FooterCTA: React.FC = () => {
  return (
    <section id="cta" className="pt-24 pb-8 md:pt-32 md:pb-12 bg-black relative border-t border-white/10">
       {/* Top accent line */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-acid shadow-[0_0_20px_rgba(207,255,0,0.6)]" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to create <br/>
            <span className="text-neutral-500">the impossible?</span>
          </h2>
          
          <p className="text-xl text-neutral-400 mb-12 font-light">
            Join the next generation of digital storytellers.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <Button variant="primary" className="w-full md:w-auto min-w-[280px]">
              Start Creating Realistic AI UGC →
            </Button>
            
            <div className="flex flex-col items-center space-y-1">
              <span className="text-neutral-500 text-sm font-medium">
                Intro Price <span className="text-white">₹199</span> <span className="line-through opacity-50 decoration-white/50">₹499</span>
              </span>
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Limited time offer</span>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-col justify-between items-center text-neutral-600 text-sm ">
             <p>&copy; {new Date().getFullYear()} Atharv. All rights reserved.</p>
             {/* <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="" className="hover:text-white transition-colors">Twitter</a>
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
               <a href="#" className="hover:text-white transition-colors">Email</a>
             </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};