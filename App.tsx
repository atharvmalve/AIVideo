import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Why } from './sections/Why';
import { Learn } from './sections/Learn';
import { Who } from './sections/Who';
import { FooterCTA } from './sections/FooterCTA';

function App() {
  return (
    <div className="font-sans bg-black text-white min-h-screen selection:bg-acid selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Learn />
        <Who />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;