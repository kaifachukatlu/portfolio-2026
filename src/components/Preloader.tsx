import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  showIntro: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ showIntro }) => {
  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-[#020202] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export default Preloader;
