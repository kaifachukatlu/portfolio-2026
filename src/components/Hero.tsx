import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import kaifCard from '../assets/lanyard/image.png';
import StarBorder from './StarBorder';

const Lanyard = lazy(() => import('./Lanyard/Lanyard')) as React.LazyExoticComponent<React.FC<any>>;

const titles = ["AI Engineer", "IoT Builder", "Patent Holder"];

const TypewriterText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      } else {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (text === titles[index]) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        timer = setTimeout(() => {
          setText(titles[index].slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
      {text}<span className="animate-pulse text-fuchsia-300">|</span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center relative z-40 pointer-events-auto mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="relative z-10 pointer-events-none">
              <p className="text-violet-400 font-mono mb-4 tracking-widest uppercase text-sm drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]">
                Welcome to my portfolio
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
                Hi, I'm <br />
                <span className="text-gradient">Achukatulu Kaif</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold text-indigo-100 mb-8 h-10">
                <TypewriterText />
              </h2>

              <p className="text-indigo-200/80 max-w-lg mb-10 text-lg leading-relaxed">
                B.Tech CSE student specializing in AI, Machine Learning, and IoT.
                Passionate about building intelligent systems and smart hardware.
              </p>
            </div>

            <div className="relative z-30 flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="projects"
                smooth={true}
                className="interactive cursor-pointer inline-block"
              >
                <StarBorder
                  as="span"
                  className="hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all"
                  color="#7c3aed"
                  speed="3s"
                >
                  View My Work
                </StarBorder>
              </Link>

              <a
                href="/Kaif_Resume.pdf"
                download="Kaif_Resume.pdf"
                className="interactive inline-block"
              >
                <StarBorder
                  as="span"
                  className="hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(224,64,251,0.6)] transition-all"
                  color="#e040fb"
                  speed="4s"
                >
                  Download Resume
                </StarBorder>
              </a>
            </div>

            <div className="relative z-30 flex items-center gap-6">
              <a href="https://github.com/kaifachukatlu" target="_blank" rel="noopener noreferrer" className="interactive text-indigo-300/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/achukatulu-kaif-33146b35b" target="_blank" rel="noopener noreferrer" className="interactive text-indigo-300/60 hover:text-[#0a66c2] transition-colors p-2 hover:bg-white/5 rounded-full">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:kaifachukatlu@gmail.com" className="interactive text-indigo-300/60 hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                <FiMail size={24} />
              </a>
              <a href="tel:9441205786" className="interactive text-indigo-300/60 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 rounded-full" title="Call 9441205786">
                <FiPhone size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lanyard positioned to cover full screen width to prevent clipping on the left */}
      <div className="hidden md:block absolute top-0 right-0 w-full h-full pointer-events-none z-20">
        <Suspense fallback={null}>
          <div className="pointer-events-auto w-full h-full">
            <Lanyard
              position={[0, 0, 13]}
              gravity={[0, -40, 0]}
              frontImage={kaifCard}
              imageFit="cover"
            />
          </div>
        </Suspense>
      </div>

    </section>
  );
};

export default Hero;
