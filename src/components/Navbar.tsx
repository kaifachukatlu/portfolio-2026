import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import PillNavRaw from './PillNav';
const PillNav = PillNavRaw as any;

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Languages', to: 'languages' },
  { name: 'Projects', to: 'projects' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'Gallery', to: 'gallery' },
];

interface NavbarProps {
  showIntro?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showIntro = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = navItems.map(item => item.to);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none">
            <motion.div
              layoutId="kaif-logo"
              className="drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center"
            >
              <svg width="400" height="300" viewBox="0 0 300 250" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                {/* K stem */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  d="M 80 80 L 70 140" 
                />
                {/* The rest of the continuous signature */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
                  d="M 120 90 
                     C 80 90 65 110 75 110 
                     C 100 110 110 140 120 140 
                     Q 140 140 150 110 
                     C 125 110 125 140 150 140 
                     C 160 140 160 110 150 110 
                     L 150 140 
                     Q 160 140 170 110 
                     L 170 140 
                     Q 180 140 195 60 
                     C 180 50 170 70 175 140 
                     L 175 180 
                     C 175 210 150 190 165 160 
                     Q 175 140 220 140"
                />
                {/* i dot */}
                <motion.path 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.0 }}
                  d="M 170 90 L 170.1 90" 
                  strokeWidth="8"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav 
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-2xl border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="interactive hover:scale-105 transition-transform flex items-center h-10">
            {!showIntro && (
              <motion.div 
                layoutId="kaif-logo"
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
              >
                Kaif
              </motion.div>
            )}
          </a>

        <PillNav
          items={[
            { label: 'Home', href: 'hero' },
            { label: 'About', href: 'about' },
            { label: 'Skills', href: 'skills' },
            { label: 'Languages', href: 'languages' },
            { label: 'Projects', href: 'projects' },
            { label: 'Timeline', href: 'timeline' },
            { label: 'Gallery', href: 'gallery' },
          ]}
          activeHref={activeSection}
          ease="power2.easeOut"
          baseColor="rgba(255,255,255,0.05)"
          pillColor="rgba(99,102,241,0.2)" // Indigo tint for active
          hoveredPillTextColor="#ffffff"
          pillTextColor="#9ca3af" // gray-400
          className="interactive"
        />

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all interactive backdrop-blur-sm border border-white/10 cursor-pointer"
        >
          Let's Connect
        </Link>
      </div>
      
      </nav>
    </>
  );
};

export default Navbar;
