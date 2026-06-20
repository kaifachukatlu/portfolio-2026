import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollFloat from './ScrollFloat';
import TiltedCard from './TiltedCard';

const stats = [
  { label: 'CGPA', value: 7.7, suffix: '', isDecimal: true },
  { label: 'Certifications', value: 17, suffix: '+' },
  { label: 'Patent Filed', value: 1, suffix: '' },
  { label: 'Projects Built', value: 15, suffix: '+' },
];

const Counter: React.FC<{ value: number, isDecimal?: boolean }> = ({ value, isDecimal }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
    </span>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden"
        >
          {/* Vibrant dual spotlights */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,214,214,0.1),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            
            {/* Profile Picture Slot */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start items-center lg:items-start order-2 lg:order-1 mb-8 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-full lg:aspect-square relative z-20"
              >
                <TiltedCard
                  imageSrc="/1000162267.jpg"
                  altText="Kaif Profile"
                  captionText="Achukatulu Kaif"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="mb-6"
                textClassName="text-3xl md:text-5xl font-bold text-white"
              >
                About Me
              </ScrollFloat>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/5 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_#7c3aed]" />
                <span className="text-sm text-gray-300 font-medium">B.Tech CSE at <span className="text-white">Vel Tech R&D</span></span>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-6">
                I am a passionate <span className="text-violet-400 font-semibold">B.Tech CSE</span> student focused on bridging the gap between hardware and software. My expertise lies in <span className="text-violet-400 font-semibold">Artificial Intelligence</span>, <span className="text-cyan-400 font-semibold">Machine Learning</span>, and <span className="text-emerald-400 font-semibold">Internet of Things (IoT)</span>.
              </p>
              
              <p className="text-indigo-200/80 text-lg leading-relaxed">
                Whether it's building a smart medical diagnostic device for rural environments or fine-tuning language models, I thrive on creating technology that makes a tangible impact. My goal is to engineer solutions that are not only innovative but also accessible and efficient.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 order-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-black/20 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 backdrop-blur-md transition-colors interactive"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400 mb-2">
                    <Counter value={stat.value} isDecimal={stat.isDecimal} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/40 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
