import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Cpu, Wrench } from 'lucide-react';
import GlareHover from './GlareHover';
import LogoLoopRaw from './LogoLoop';
const LogoLoop = LogoLoopRaw as any;
import ScrollFloat from './ScrollFloat';
import { SiPython, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiTensorflow, SiArduino, SiNextdotjs } from 'react-icons/si';

const techLogos = [
  { node: <SiPython style={{ color: '#a855f7' }} />, title: "Python" },
  { node: <SiReact style={{ color: '#06d6d6' }} />, title: "React" },
  { node: <SiTypescript style={{ color: '#7c3aed' }} />, title: "TypeScript" },
  { node: <SiTailwindcss style={{ color: '#06d6d6' }} />, title: "Tailwind CSS" },
  { node: <SiNodedotjs style={{ color: '#00e5a0' }} />, title: "Node.js" },
  { node: <SiTensorflow style={{ color: '#e040fb' }} />, title: "TensorFlow" },
  { node: <SiArduino style={{ color: '#f59e0b' }} />, title: "Arduino" },
  { node: <SiNextdotjs style={{ color: '#a855f7' }} />, title: "Next.js" },
];

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    color: "group-hover:border-violet-500",
    shadow: "group-hover:shadow-[0_0_40px_rgba(124,58,237,0.35)]",
    iconColor: "text-violet-400",
    dotColor: "bg-violet-500",
    skills: ["Python", "Java", "C", "SQL"]
  },
  {
    title: "AI / ML",
    icon: <BrainCircuit size={24} />,
    color: "group-hover:border-fuchsia-500",
    shadow: "group-hover:shadow-[0_0_40px_rgba(224,64,251,0.35)]",
    iconColor: "text-fuchsia-400",
    dotColor: "bg-fuchsia-500",
    skills: ["Machine Learning", "LLMs", "Recommender Sys.", "Time Series Analysis"]
  },
  {
    title: "IoT / Cloud",
    icon: <Cpu size={24} />,
    color: "group-hover:border-cyan-400",
    shadow: "group-hover:shadow-[0_0_40px_rgba(6,214,214,0.3)]",
    iconColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    skills: ["Arduino", "Raspberry Pi", "Azure IoT & AWS", "Industry 4.0"]
  },
  {
    title: "Tools & DBs",
    icon: <Wrench size={24} />,
    color: "group-hover:border-emerald-400",
    shadow: "group-hover:shadow-[0_0_40px_rgba(0,229,160,0.3)]",
    iconColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    skills: ["GitHub", "SQL & MongoDB", "Node.js & Tableau", "Automated Testing"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            Technical Arsenal
          </ScrollFloat>
          <p className="text-indigo-200/80 max-w-2xl mx-auto mb-10">
            Tools and technologies I use to build intelligent systems and innovative solutions.
          </p>

          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }} className="mt-8 max-w-4xl mx-auto">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-black/20 backdrop-blur-2xl border border-white/5 rounded-3xl transition-all duration-300 interactive hover:-translate-y-2 ${category.color} ${category.shadow}`}
              style={{ perspective: 1000 }}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.15}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="w-full h-full p-8 rounded-3xl"
              >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 ${category.iconColor}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-white/60 group-hover:text-white transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 opacity-80 ${category.dotColor}`} />
                    {skill}
                  </li>
                ))}
              </ul>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
