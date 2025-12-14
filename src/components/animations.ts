// ─────────────────────────────────────────────────────────────
// animations.ts - Reusable Framer Motion Animation Variants
// ─────────────────────────────────────────────────────────────

import type { Variants } from 'framer-motion';

// ─── Scroll Reveal Animations ────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

// ─── Staggered Container Animations ──────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// ─── Stagger Item Animations ─────────────────────────────────

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    }
  }
};

export const popIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

// ─── Hover Animation Variants ────────────────────────────────

export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: '0 0 0 rgba(0, 255, 157, 0)'
  },
  hover: { 
    scale: 1.03,
    boxShadow: '0 0 30px rgba(0, 255, 157, 0.15)',
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' as const
    }
  }
};

export const glowHover = {
  rest: {
    boxShadow: '0 0 0 rgba(0, 255, 157, 0)',
    borderColor: 'rgba(26, 26, 26, 1)'
  },
  hover: {
    boxShadow: '0 0 25px rgba(0, 255, 157, 0.2)',
    borderColor: 'rgba(0, 255, 157, 0.5)',
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' as const
    }
  }
};

// ─── Cyber-themed Glitch Effect ──────────────────────────────

export const glitchText: Variants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

// ─── Terminal Typing Effect ──────────────────────────────────

export const typewriter: Variants = {
  hidden: { width: 0 },
  visible: { 
    width: '100%',
    transition: { 
      duration: 1.5, 
      ease: 'linear' 
    }
  }
};

// ─── Pulse Animation for Active Elements ────────────────────

export const pulse: Variants = {
  rest: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
