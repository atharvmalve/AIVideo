import React from 'react';
import { Container } from '../components/Container';

const audiences = [
  "Students.",
  "Creators.",
  "Freelancers.",
  "Founders.",
  "Marketing Agencies.",
  "Filmmakers.",
  "Anyone who wants AI that feels human."
];

export const Who: React.FC = () => {
  return (
    <section id="who" className="py-24 md:py-32 bg-offblack">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Who This Is For
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((tag, index) => (
              <div 
                key={index}
                className="
                  group relative overflow-hidden
                  px-6 py-3 
                  rounded-[12px] 
                  border border-[#2A2A2A] 
                  bg-black 
                  cursor-default
                  transition-all duration-300
                  hover:border-acid hover:scale-[1.02]
                "
              >
                <span className="relative z-10 text-lg md:text-xl text-neutral-300 group-hover:text-acid font-medium transition-colors duration-300">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};