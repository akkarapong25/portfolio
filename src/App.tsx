/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import InfiniteMarquee from './components/ui/InfiniteMarquee';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Templates from './components/sections/Templates';
import CaseStudy from './components/sections/CaseStudy';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import InteractiveDemo from './components/demos/InteractiveDemo';
import BusinessAnalysisDemo from './components/demos/BusinessAnalysisDemo';
import UIDesignDemo from './components/demos/UIDesignDemo';
import AIAutomationDemo from './components/demos/AIAutomationDemo';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InfiniteMarquee />
        <Skills />
        <Projects />
        <Templates />
        <InteractiveDemo />
        <BusinessAnalysisDemo />
        <UIDesignDemo />
        <AIAutomationDemo />
        <CaseStudy />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
