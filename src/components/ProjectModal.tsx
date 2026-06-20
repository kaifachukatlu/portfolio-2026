import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from './Projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Use createPortal to break out of any parent stacking contexts (like the z-10 main wrapper)
  // This ensures the modal is always strictly on top of everything, including the Navbar.
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-[#0a0a0a]/90 border border-white/10 rounded-3xl shadow-2xl z-10 custom-scrollbar"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 border border-white/10 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>

        {/* Hero Image / Banner */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
           {/* Fallback pattern */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_70%)]" />
           <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 z-10 px-8 text-center drop-shadow-2xl">
             {project.title}
           </h2>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-12 space-y-12">
          
          {/* Main Info */}
          <div className="flex flex-col md:flex-row gap-8">
             <div className="md:w-2/3 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Project Overview</h3>
                  <p className="text-indigo-200/80 leading-relaxed text-lg">
                    {project.fullDescription || project.description}
                  </p>
                </div>
             </div>
             
             <div className="md:w-1/3 space-y-6 bg-white/5 border border-white/5 rounded-2xl p-6 h-fit">
                <div>
                  <h4 className="text-sm text-gray-400 uppercase font-bold tracking-wider mb-2">Role</h4>
                  <p className="text-white font-medium">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase font-bold tracking-wider mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-md bg-white/10 border border-white/10 font-medium ${project.textAccent}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== "#" && (
                  <div className="pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-3 text-center bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      View Live / GitHub
                    </a>
                  </div>
                )}
             </div>
          </div>

          {/* Photo Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((imgSrc, idx) => (
                  <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-white/5">
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                         // Show a fallback text inside the parent
                         const parent = (e.target as HTMLImageElement).parentElement;
                         if (parent && !parent.querySelector('.fallback-text')) {
                           const fallback = document.createElement('div');
                           fallback.className = 'fallback-text absolute inset-0 flex items-center justify-center text-sm text-gray-500 font-medium';
                           fallback.innerText = `Image Placeholder (${imgSrc})`;
                           parent.appendChild(fallback);
                         }
                      }}
                    />
                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;
