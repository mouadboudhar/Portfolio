// ─────────────────────────────────────────────────────────────
// CyberProjects.tsx - Cybersecurity Projects Showcase
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { staggerContainer, staggerItem, fadeInUp, cardHover } from './animations';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';

// ─── Project Data ────────────────────────────────────────────

interface CyberProject {
  title: string;
  description: string;
  type: 'ctf' | 'report' | 'tool' | 'writeup';
  tags: string[];
  link?: string;
  github?: string;
}

const cyberProjects: CyberProject[] = [
  {
    title: 'HackTheBox Writeups',
    description: 'Collection of detailed writeups for various HTB machines, documenting enumeration, exploitation, and privilege escalation techniques.',
    type: 'writeup',
    tags: ['HTB', 'Linux', 'Windows', 'PrivEsc'],
    github: '#',
  },
  {
    title: 'Network Scanner Tool',
    description: 'Custom Python tool for automated network reconnaissance, port scanning, and service enumeration with clean reporting.',
    type: 'tool',
    tags: ['Python', 'Nmap', 'Automation'],
    github: '#',
  },
  {
    title: 'Web App Pentest Report',
    description: 'Professional penetration testing report template following OWASP methodology with findings and remediation steps.',
    type: 'report',
    tags: ['OWASP', 'Report', 'Methodology'],
    link: '#',
  },
  {
    title: 'CTF Challenge Solutions',
    description: 'Scripts and solutions from various CTF competitions including web exploitation, crypto, and reverse engineering challenges.',
    type: 'ctf',
    tags: ['CTF', 'Web', 'Crypto', 'RE'],
    github: '#',
  },
];

// ─── Type Badge Component ────────────────────────────────────

const TypeBadge = ({ type }: { type: CyberProject['type'] }) => {
  const config = {
    ctf: { label: 'CTF', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    report: { label: 'Report', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    tool: { label: 'Tool', color: 'bg-[#00ff9d]/20 text-[#00ff9d] border-[#00ff9d]/30' },
    writeup: { label: 'Writeup', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  };

  return (
    <span className={`px-3 py-1 text-xs font-mono rounded-full border ${config[type].color}`}>
      {config[type].label}
    </span>
  );
};

// ─── Project Card Component ──────────────────────────────────

const ProjectCard = ({ project }: { project: CyberProject }) => {
  return (
    <motion.div
      className="
        relative group
        bg-[#111111] border border-[#1a1a1a]
        rounded-xl p-6
        cursor-pointer overflow-hidden
      "
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Glow Effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={cardHover}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <TypeBadge type={project.type} />
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                className="text-gray-500 hover:text-[#00ff9d] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={18} />
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                className="text-gray-500 hover:text-[#00ff9d] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {project.type === 'report' ? <FiFileText size={18} /> : <FiExternalLink size={18} />}
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-mono text-lg font-semibold text-white mb-2 group-hover:text-[#00ff9d] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-sm text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs font-mono text-gray-500 bg-[#0a0a0a] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#00ff9d]/10 to-transparent" />
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────

const CyberProjects = () => {
  return (
    <Section id="cyber-projects" variant="cyber">
      {/* Section Header */}
      <motion.div 
        className="w-full max-w-5xl mb-12 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 mb-4 font-mono text-sm text-gray-500">
          <span className="text-[#00ff9d]">❯</span>
          <span>ls ./security-projects/</span>
        </div>
        
        <h2 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Security Projects
          <span className="animate-pulse text-[#00ff9d]">_</span>
        </h2>
        
        <p className="font-mono text-sm text-gray-500 max-w-2xl mx-auto">
          // Reports, CTF writeups, and custom security tools
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {cyberProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default CyberProjects;
