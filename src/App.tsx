import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import Preloader from './components/Preloader';
import TargetCursor from './components/TargetCursor';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import GallerySection from './components/GallerySection';
import Contact from './components/Contact';
import Silk from './components/Silk';

// Lazy load Hero to ensure Three.js / Lanyard is deferred
const Hero = lazy(() => import('./components/Hero'));

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // 1.5s for staggered drawing + 0.7s pause = 2.2s total before move
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      <div className="bg-[#0a0a0f] min-h-screen text-white font-sans selection:bg-violet-500/30 selection:text-white relative overflow-x-hidden">
        {/* ── Global Background ── */}
        <div className="fixed inset-0 z-0">
          {/* Hard dark base */}
          <div className="absolute inset-0 bg-[#0a0a0f]" />

          {/* Silk wave layer — electric violet at low opacity */}
          <div className="absolute inset-0 opacity-20">
            <Silk
              speed={3.5}
              scale={1.3}
              color="#7c3aed"
              noiseIntensity={2.5}
              rotation={20}
            />
          </div>

          {/* Radial accent glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_10%,rgba(124,58,237,0.2),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(6,214,214,0.15),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(224,64,251,0.05),transparent)] pointer-events-none" />
        </div>

        <Preloader showIntro={showIntro} />

        <TargetCursor targetSelector=".interactive, a, button" />
        <Navbar showIntro={showIntro} />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <main className="relative z-10">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-t-2 border-indigo-500 animate-spin" />
          </div>
        }>
          <Hero />
        </Suspense>
        
        <About />
        <Skills />
        <Languages />
        <Projects />
        <Timeline />
        <Certifications />
        <GallerySection />
        <Contact />
      </main>

          <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
            <p>© {new Date().getFullYear()} Achukatulu Kaif. All rights reserved.</p>
            <p className="mt-2 text-xs">Designed & Built with React, Three.js & Tailwind CSS.</p>
          </footer>
        </motion.div>
      </div>
    </LayoutGroup>
  );
}

export default App;
