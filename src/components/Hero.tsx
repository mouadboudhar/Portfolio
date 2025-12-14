// ─────────────────────────────────────────────────────────────
// Hero.tsx - Introduction Section with Terminal Aesthetic
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from './animations';

const Hero = () => {
  return (
    <Section id="hero" className="relative !overflow-visible">
      <motion.div 
        className="text-center max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-6 font-mono text-sm text-gray-500"
          variants={fadeInDown}
        >
          <span className="text-[#00ff9d]">guest@portfolio</span>
          <span className="text-gray-600">:</span>
          <span className="text-[#00d4ff]">~</span>
          <span className="text-gray-600">$</span>
          <span className="ml-2">whoami</span>
        </motion.div>
        
        {/* Name */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          variants={fadeInUp}
        >
          <span className="text-white">Mouad </span>
          <span className="bg-gradient-to-r from-[#00ff9d] to-[#00d4ff] bg-clip-text text-transparent">
            Boudhar
          </span>
        </motion.h1>
        
        {/* Title */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-8"
          variants={fadeInUp}
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
          <p className="font-mono text-lg md:text-xl text-gray-400">
            Cybersecurity Pentester & Full Stack Developer
          </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex items-center justify-center gap-4 flex-wrap"
          variants={staggerContainer}
        >
          <motion.a
            href="#cyber-skills"
            className="
              px-6 py-3 rounded-lg
              bg-[#00ff9d]/10 border border-[#00ff9d]/30
              text-[#00ff9d] font-mono text-sm
              transition-all duration-300
            "
            variants={staggerItem}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(0, 255, 157, 0.2)',
              borderColor: 'rgba(0, 255, 157, 1)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="
              px-6 py-3 rounded-lg
              bg-[#111111] border border-[#1a1a1a]
              text-gray-300 font-mono text-sm
              transition-all duration-300
            "
            variants={staggerItem}
            whileHover={{ 
              scale: 1.05, 
              borderColor: 'rgba(156, 163, 175, 0.6)',
              color: '#ffffff'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator - Positioned at bottom of viewport */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-mono text-xs text-gray-500">scroll down</span>
        <motion.div 
          className="flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-[#00ff9d]/50 flex justify-center pt-1">
            <motion.div 
              className="w-1 h-2 rounded-full bg-[#00ff9d]"
              animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
