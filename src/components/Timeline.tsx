import React from 'react';
import { motion } from 'framer-motion';
import Stack from './Stack';

const timelineData = [
  {
    title: "Narayana EM High School",
    role: "SSC",
    date: "2021",
    description: "Achieved a perfect score in Secondary School Certificate (SSC) examinations. CGPA 10.0 / 10.0 — 600/600.",
    accent: "text-emerald-400",
    tags: ["100% Score", "Perfect GPA", "Foundation"]
  },
  {
    title: "Narayana Junior College",
    role: "Intermediate – MPC",
    date: "2021–2023",
    description: "Completed higher secondary education focusing on Mathematics, Physics, and Chemistry. Secured Grade A with an impressive score of 851/1000.",
    accent: "text-violet-400",
    tags: ["Mathematics", "Physics", "Chemistry"]
  },
  {
    title: "Vel Tech R&D",
    role: "B.Tech Computer Science",
    date: "2023–2027",
    description: "Currently pursuing B.Tech with a strong focus on Artificial Intelligence and Machine Learning. Maintained a consistent academic record with a CGPA of 7.7 while leading multiple tech symposiums.",
    accent: "text-cyan-400",
    tags: ["Artificial Intelligence", "Data Structures", "Algorithms", "C++"]
  },
  {
    title: "RedandBlue Applied Innovations",
    role: "AI / ML / IoT Intern",
    date: "Jun–Jul 2025",
    description: "Built and tested supervised & unsupervised ML models for real-world predictive analytics. Developed robust IoT prototypes using Arduino & Raspberry Pi integrated with cloud dashboards.",
    accent: "text-indigo-400",
    tags: ["Machine Learning", "IoT", "Arduino", "Raspberry Pi", "Python"]
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 pointer-events-none mb-12 w-full">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 inline-block drop-shadow-lg"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-indigo-200/60 mt-4 text-lg"
          >
            Click or drag the cards to cycle through my journey
          </motion.p>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto h-[450px] px-4">
        <Stack
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          autoplay={false}
          cards={timelineData.map((item) => (
            <div className="w-full h-full p-8 md:p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-indigo-900/20 via-[#0a0a0f]/95 to-[#050508]/95 backdrop-blur-3xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
              
              {/* Animated Inner Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/20 blur-[60px] pointer-events-none rounded-full" />
              
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none" />

              <div className="relative z-10">
                <div className={`text-xs md:text-sm font-black mb-4 tracking-[0.2em] uppercase ${item.accent} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] flex items-center gap-3`}>
                  <div className={`w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_10px_currentColor]`} />
                  {item.date}
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 leading-tight tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
                
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 font-extrabold mb-4 text-xl md:text-2xl drop-shadow-sm">
                  {item.role}
                </div>
                
                <p className="text-gray-300/90 text-base md:text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-8 flex flex-wrap gap-2 md:gap-3 relative z-10">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 rounded-xl text-xs md:text-sm font-bold text-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default Timeline;
