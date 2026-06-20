import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import ProjectModal from './ProjectModal';
import SpotlightCard from './SpotlightCard';

export interface Project {
  title: string;
  badge: string;
  tags: string[];
  description: string;
  fullDescription?: string;
  role?: string;
  images?: string[];
  accent: string;
  bgAccent: string;
  textAccent: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "AI-Enabled Smart Medical Kit",
    badge: "Patent Filed 🏅",
    tags: ["ML", "NLP", "Computer Vision", "Healthcare"],
    description: "AI-powered portable diagnostic device with ML diagnostics, NLP symptom checker, and computer vision medicine identification. Designed for rural environments.",
    fullDescription: "An end-to-end portable AI diagnostic device tailored for rural areas lacking immediate medical infrastructure. It integrates Machine Learning models for preliminary diagnostics, a Natural Language Processing module to act as a symptom checker, and Computer Vision to accurately identify medicines from images. This project aims to bridge the healthcare gap using accessible AI technology.",
    role: "Lead Developer & ML Engineer",
    images: ["/medical-kit-1.png", "/medical-kit-2.png", "/medical-kit-3.png"],
    accent: "group-hover:border-violet-500",
    bgAccent: "group-hover:bg-violet-500/5",
    textAccent: "text-violet-400",
    link: "#" // Add your GitHub or project link here
  },
  {
    title: "IoT-Enabled Automated Irrigation",
    badge: "35% Water Saved 💧",
    tags: ["Arduino", "IoT", "Sensors"],
    description: "Smart agriculture system using Arduino & soil moisture sensors. Automated irrigation via sensor fusion, reducing estimated water usage by ~35%.",
    fullDescription: "A smart agriculture framework built with Arduino and an array of IoT sensors (soil moisture, temperature, humidity). The system employs sensor fusion to intelligently automate irrigation cycles, ensuring crops receive precise watering. This approach not only optimized plant growth but also demonstrated a significant 35% reduction in overall water usage.",
    role: "Hardware & IoT Developer",
    images: ["/irrigation.jpg"],
    accent: "group-hover:border-cyan-500",
    bgAccent: "group-hover:bg-cyan-500/5",
    textAccent: "text-cyan-400",
    link: "#" // Add your GitHub or project link here
  },
  {
    title: "Fingerprint-Based Voting System",
    badge: "NBA Presented 🏆",
    tags: ["Biometrics", "Hardware", "Security"],
    description: "Biometric authentication voting system eliminating impersonation. Selected and presented at NBA (National Board of Accreditation) college evaluation.",
    fullDescription: "A highly secure electronic voting system relying on biometric fingerprint authentication to completely eliminate voter impersonation and fraud. The system was designed with robust hardware integration and secure data logging. Its effectiveness and innovation led to it being selected for presentation during the prestigious National Board of Accreditation (NBA) college evaluation.",
    role: "Security Systems Engineer",
    images: ["/voting-group.jpg", "/voting-1.png", "/voting-2.png", "/voting-3.png", "/voting-4.png"],
    accent: "group-hover:border-emerald-500",
    bgAccent: "group-hover:bg-emerald-500/5",
    textAccent: "text-emerald-400",
    link: "#" // Add your GitHub or project link here
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (

    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mb-4"
            textClassName="text-3xl md:text-5xl font-bold text-white"
          >
            Featured Projects
          </ScrollFloat>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <SpotlightCard
                spotlightColor={
                  project.title.includes("Medical") 
                    ? "rgba(139, 92, 246, 0.25)" 
                    : project.title.includes("Irrigation") 
                    ? "rgba(6, 182, 212, 0.25)" 
                    : "rgba(16, 185, 129, 0.25)"
                }
                className={`group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 interactive ${project.accent} ${project.bgAccent}`}
              >
                {/* Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6 backdrop-blur-md">
                  {project.badge}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                  {project.title}
                </h3>

                <p className="text-indigo-200/80 mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-medium ${project.textAccent}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  className={`inline-flex items-center text-sm font-bold ${project.textAccent} transition-transform group-hover:translate-x-2 cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
