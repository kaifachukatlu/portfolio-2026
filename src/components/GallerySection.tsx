import React from 'react';
import { motion } from 'framer-motion';
import DomeGallery from './DomeGallery';

// Combine all 30 renamed gallery images from the public directory
const galleryImages = Array.from({ length: 30 }, (_, i) => `/gallery-${i + 1}.jpg`);

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative py-24 bg-transparent min-h-screen flex flex-col justify-center">
      
      {/* Background Glows for Depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-xl">
            Life & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experiences</span>
          </h2>
          <p className="text-indigo-200/70 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md">
            A visual journey through my internships, college projects, hardware builds, and professional milestones.
            Drag horizontally to spin the gallery.
          </p>
        </motion.div>
      </div>

      {/* The 3D CSS Dome Gallery */}
      <div 
        className="w-full h-[85vh] relative z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        <DomeGallery
          images={galleryImages}
          fit={0.7}
          fitBasis="width"
          minRadius={650}
          maxVerticalRotationDeg={0}
          segments={30}
          dragDampening={2.5}
          grayscale={false}
        />
      </div>


    </section>
  );
};

export default GallerySection;
