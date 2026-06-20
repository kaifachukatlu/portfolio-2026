import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import SpotlightCard from './SpotlightCard';

interface Language {
  name: string;
  fluency: string;
  percentage: number;
  phrase: string;
  translation: string;
  accent: string;
  glow: string;
  borderColor: string;
}

const languages: Language[] = [
  {
    name: "Urdu",
    fluency: "Native / Mother Tongue",
    percentage: 100,
    phrase: "سلام (Salaam)",
    translation: "Peace / Greeting of Peace",
    accent: "from-emerald-600 to-teal-400",
    glow: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
    borderColor: "group-hover:border-emerald-500/50"
  },
  {
    name: "Telugu",
    fluency: "Native / Mother Tongue",
    percentage: 100,
    phrase: "నమస్కారం (Namaskāram)",
    translation: "Hello / Respectful Greeting",
    accent: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/10 hover:shadow-orange-500/20",
    borderColor: "group-hover:border-orange-500/50"
  },
  {
    name: "English",
    fluency: "Professional Working Proficiency",
    percentage: 95,
    phrase: "Welcome to my portfolio!",
    translation: "Interactive Showcase of my work",
    accent: "from-blue-600 to-cyan-400",
    glow: "shadow-blue-500/10 hover:shadow-blue-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    name: "Hindi",
    fluency: "Professional / Conversational",
    percentage: 85,
    phrase: "नमस्ते (Namaste)",
    translation: "Hello / Bowing to the divine in you",
    accent: "from-purple-600 to-pink-500",
    glow: "shadow-purple-500/10 hover:shadow-purple-500/20",
    borderColor: "group-hover:border-purple-500/50"
  }
];

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mb-4 flex justify-center w-full"
            textClassName="text-3xl md:text-5xl font-bold text-white text-center inline-block"
          >
            Linguistic Spectrum
          </ScrollFloat>
          <p className="text-indigo-200/80 max-w-2xl mx-auto">
            Communication is key to effective collaboration. Here are the languages I speak and work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <SpotlightCard
                spotlightColor={
                  lang.name === "Urdu" 
                    ? "rgba(16, 185, 129, 0.25)" 
                    : lang.name === "Telugu" 
                    ? "rgba(249, 115, 22, 0.25)" 
                    : lang.name === "English" 
                    ? "rgba(37, 99, 235, 0.25)" 
                    : "rgba(147, 51, 234, 0.25)"
                }
                className={`group relative bg-black/30 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 transition-all duration-300 interactive shadow-xl ${lang.glow} ${lang.borderColor}`}
              >
                {/* Card top gradient line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${lang.accent} opacity-40 group-hover:opacity-100 transition-opacity rounded-t-3xl`} />

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {lang.name}
                    </h3>
                    <span className="text-xs text-indigo-300/60 font-mono tracking-wider uppercase">
                      {lang.fluency}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 text-indigo-400 group-hover:text-white transition-colors">
                    <MessageSquare size={20} />
                  </div>
                </div>

                {/* Dial/Bar Container */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-400">Fluency Level</span>
                    <span className="text-xs font-mono text-indigo-300">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full bg-gradient-to-r ${lang.accent}`}
                    />
                  </div>
                </div>

                {/* Common Phrase Box */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors group-hover:bg-white/10">
                  <div className="text-sm font-bold text-white mb-1 font-sans">
                    "{lang.phrase}"
                  </div>
                  <div className="text-xs text-indigo-200/50">
                    {lang.translation}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
