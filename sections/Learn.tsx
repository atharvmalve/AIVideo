import React from 'react';
import { Container } from '../components/Container';
import { FeaturePoint } from '../types';

const features: FeaturePoint[] = [
  { text: 'How to script UGC stories that feel human' },
  { text: 'My exact "no-glitch" workflow for stable faces & hands' },
  { text: 'Settings that create hyper-realistic shots' },
  { text: 'How to add imperfections so it stops looking AI' },
  { text: 'The storytelling beats that make viewers feel something' },
  { text: 'Editing tricks to hide the AI and highlight the craft' },
];

export const Learn: React.FC = () => {
  return (
    <section id="learn" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You’ll <br/>
              <span className="text-acid">Master</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              This isn't about prompting. It's about directing. Learn the end-to-end process of creating cinematic, believable AI video.
            </p>
          </div>

          <div>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start group p-4 rounded-xl transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-acid shadow-[0_0_10px_rgba(207,255,0,0.4)] flex-shrink-0 mr-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-lg md:text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};