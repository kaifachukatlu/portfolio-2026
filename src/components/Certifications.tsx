import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';


const row1 = [
  "CCNA: Introduction to Networks (Cisco)",
  "Azure IoT – The Complete Guide (Udemy)",
  "Tableau Advanced: Master Tableau in Data Sci. (Udemy)",
  "Building Recommender Systems with ML & AI (Udemy)",
  "Python for Time Series Data Analysis (Udemy)",
  "DBMS – Fundamentals & Advanced (Scaler)"
];

const row2 = [
  "Physics of Renewable Energy Systems (NPTEL - IIT)",
  "Introduction to Industry 4.0 & IIoT (NPTEL - IIT)",
  "Fine-Tuning Large Language Models (WingSpan)",
  "Software Engineering & Agile Development (WingSpan)",
  "Automated Testing & Deployment (WingSpan)"
];

const MarqueeRow: React.FC<{ items: string[], direction: 'left' | 'right', speed?: number }> = ({ items, direction, speed = 30 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="flex gap-6 min-w-full pl-6"
        animate={{
          x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Double the items to create seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex-shrink-0 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all interactive"
          >
            <span className="text-gray-300 font-medium">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="mb-4"
          textClassName="text-3xl md:text-5xl font-bold text-white inline-block"
        >
          Continuous Learning
        </ScrollFloat>
        <p className="text-indigo-200/80 max-w-2xl mx-auto">
          Constantly upgrading skills to stay at the cutting edge of AI, IoT, and software engineering.
        </p>
      </div>

      {/* Marquee Container with native CSS fading edges */}
      <div 
        className="relative w-full overflow-hidden flex flex-col gap-2"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <MarqueeRow items={row1} direction="left" speed={35} />
        <MarqueeRow items={row2} direction="right" speed={40} />
      </div>
    </section>
  );
};

export default Certifications;
