// ─────────────────────────────────────────────────────────────
// DevProjects.tsx - Software Development Projects Showcase
// Compact Grid Layout
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { staggerContainer, staggerItem, fadeInUp, cardHover } from './animations';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// ─── Project Data ────────────────────────────────────────────

interface DevProject {
  title: string;
  description: string;
  type: 'web' | 'app' | 'api' | 'fullstack';
  tags: string[];
  image?: string;
  liveUrl?: string;
  github?: string;
}

const devProjects: DevProject[] = [
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio with smooth scroll snapping, terminal aesthetic, and Framer Motion animations. Built with React and Tailwind CSS.',
    type: 'web',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
    type: 'fullstack',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with JWT authentication, role-based access control, and real-time notifications.',
    type: 'api',
    tags: ['Django', 'REST', 'PostgreSQL', 'Docker'],
    github: '#',
  },
  {
    title: 'Mobile Expense Tracker',
    description: 'Cross-platform mobile application for tracking personal expenses with charts, categories, and budget alerts.',
    type: 'app',
    tags: ['React Native', 'TypeScript', 'SQLite', 'Charts'],
    github: '#',
  },
];

// ─── Type Badge Component ────────────────────────────────────

const TypeBadge = ({ type }: { type: DevProject['type'] }) => {
  const config = {
    web: { label: 'Web', color: 'bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30' },
    app: { label: 'App', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    api: { label: 'API', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    fullstack: { label: 'Full Stack', color: 'bg-[#00ff9d]/20 text-[#00ff9d] border-[#00ff9d]/30' },
  };

  return (
    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs font-mono rounded-full border ${config[type].color}`}>
      {config[type].label}
    </span>
  );
};

// ─── Project Card Component ──────────────────────────────────

const ProjectCard = ({ project, index }: { project: DevProject; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className="
        relative group
        bg-[#111111] border border-[#1a1a1a]
        rounded-lg overflow-hidden
        cursor-pointer
      "
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Animated Border Glow */}
      <motion.div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        variants={cardHover}
      />

      {/* Compact Header with Icon */}
      <div 
        className={`
          h-12 sm:h-16 w-full
          bg-gradient-to-br 
          ${isEven 
            ? 'from-[#00d4ff]/10 via-[#111111] to-[#00ff9d]/5' 
            : 'from-[#00ff9d]/10 via-[#111111] to-[#00d4ff]/5'
          }
          flex items-center justify-between px-3 sm:px-4
          border-b border-[#1a1a1a]
        `}
      >
        <span className="text-lg sm:text-2xl opacity-50">
          {project.type === 'web' && '🌐'}
          {project.type === 'app' && '📱'}
          {project.type === 'api' && '⚡'}
          {project.type === 'fullstack' && '🚀'}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              className="text-gray-500 hover:text-[#00d4ff] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={16} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              className="text-gray-500 hover:text-[#00d4ff] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-3 sm:p-4">
        {/* Title & Badge */}
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <h3 className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-[#00d4ff] transition-colors truncate mr-2">
            {project.title}
          </h3>
          <TypeBadge type={project.type} />
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] text-gray-400 mb-2 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-1.5 py-0.5 text-[9px] font-mono text-gray-500 bg-[#0a0a0a] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────

const DevProjects = () => {
  return (
    <Section id="dev-projects" variant="dev">
      {/* Section Header */}
      <motion.div 
        className="w-full max-w-5xl mb-4 sm:mb-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2 font-mono text-xs sm:text-sm text-gray-500">
          <span className="text-[#00d4ff]">$</span>
          <span>npm run showcase --projects</span>
        </div>
        
        <h2 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
          Development Projects
          <span className="animate-pulse text-[#00d4ff]">_</span>
        </h2>
      </motion.div>

      {/* Compact Projects Grid */}
      <motion.div 
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {devProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default DevProjects;
