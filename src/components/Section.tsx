import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: 'cyber' | 'dev' | 'default';
}

const Section = ({ children, id, className = '', variant = 'default' }: SectionProps) => {
  // Variant-based accent colors
  const accentColors = {
    cyber: 'from-[#00ff9d]/5 via-transparent to-transparent',
    dev: 'from-[#00d4ff]/5 via-transparent to-transparent',
    default: 'from-transparent to-transparent',
  };

  return (
    <section
      id={id}
      className={`
        h-screen w-full relative
        snap-start snap-always
        flex flex-col items-center justify-center
        px-4 py-6 sm:px-6 sm:py-12 md:px-12 lg:px-24
        overflow-hidden overflow-y-auto
        ${className}
      `}
    >
      {/* Subtle gradient overlay based on variant */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${accentColors[variant]} pointer-events-none`}
      />

      {/* Animated content wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
