import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
}

const ScrollContainer = ({ children, className = '' }: ScrollContainerProps) => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <motion.main
      ref={containerRef}
      className={`
        h-screen w-full
        overflow-y-scroll overflow-x-hidden
        snap-y snap-mandatory
        scroll-smooth
        bg-[#0a0a0a]
        ${className}
      `}
      // This ensures proper scroll container behavior for intersection observer
      style={{ position: 'relative' }}
    >
      {children}
    </motion.main>
  );
};

export default ScrollContainer;
