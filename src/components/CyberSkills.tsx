// ─────────────────────────────────────────────────────────────
// CyberSkills.tsx - Cybersecurity & Pentesting Skills Section
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { 
  staggerContainer, 
  staggerItem, 
  fadeInUp,
  glowHover 
} from './animations';

// ─── Cyber Skills Data ───────────────────────────────────────

interface CyberSkill {
  name: string;
  level: 'learning' | 'intermediate' | 'proficient';
}

interface CyberCategory {
  name: string;
  icon: string;
  skills: CyberSkill[];
}

const cyberCategories: CyberCategory[] = [
  {
    name: 'Reconnaissance',
    icon: '🔍',
    skills: [
      { name: 'Nmap', level: 'proficient' },
      { name: 'OSINT', level: 'intermediate' },
      { name: 'Shodan', level: 'intermediate' },
      { name: 'Recon-ng', level: 'learning' },
    ],
  },
  {
    name: 'Web Exploitation',
    icon: '🌐',
    skills: [
      { name: 'Burp Suite', level: 'proficient' },
      { name: 'SQL Injection', level: 'intermediate' },
      { name: 'XSS', level: 'intermediate' },
      { name: 'OWASP Top 10', level: 'proficient' },
    ],
  },
  {
    name: 'Network Security',
    icon: '🔐',
    skills: [
      { name: 'Wireshark', level: 'proficient' },
      { name: 'Metasploit', level: 'intermediate' },
      { name: 'Netcat', level: 'intermediate' },
      { name: 'VPN/Tunneling', level: 'learning' },
    ],
  },
  {
    name: 'Scripting & Automation',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 'proficient' },
      { name: 'Bash', level: 'intermediate' },
      { name: 'PowerShell', level: 'learning' },
      { name: 'Custom Tools', level: 'intermediate' },
    ],
  },
];

// ─── Level Badge Component ───────────────────────────────────

const LevelBadge = ({ level }: { level: CyberSkill['level'] }) => {
  const colors = {
    learning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    proficient: 'bg-[#00ff9d]/20 text-[#00ff9d] border-[#00ff9d]/30',
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-mono rounded border ${colors[level]}`}>
      {level}
    </span>
  );
};

// ─── Skill Card Component ────────────────────────────────────

const SkillCard = ({ skill }: { skill: CyberSkill }) => {
  return (
    <motion.div
      className="
        flex items-center justify-between
        bg-[#111111] border border-[#1a1a1a]
        rounded-lg px-4 py-3
        cursor-default
      "
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        variants={glowHover}
      />
      <span className="font-mono text-sm text-gray-300 relative z-10">
        {skill.name}
      </span>
      <LevelBadge level={skill.level} />
    </motion.div>
  );
};

// ─── Category Section Component ──────────────────────────────

const CategoryCard = ({ category, index }: { category: CyberCategory; index: number }) => {
  return (
    <motion.div
      className="w-full"
      variants={fadeInUp}
      custom={index}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-mono text-lg font-semibold text-white">
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#00ff9d]/30 to-transparent" />
      </div>

      {/* Skills List */}
      <motion.div 
        className="grid gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────

const CyberSkills = () => {
  return (
    <Section id="cyber-skills" variant="cyber">
      {/* Section Header */}
      <motion.div 
        className="w-full max-w-5xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Window */}
        <div className="inline-flex items-center gap-2 bg-[#111111] border border-[#1a1a1a] rounded-t-lg px-4 py-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
          <span className="ml-2 font-mono text-xs text-gray-500">cyber_skills.sh</span>
        </div>
        
        <div className="bg-[#0d0d0d] border border-t-0 border-[#1a1a1a] rounded-b-lg rounded-tr-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#00ff9d] font-mono">❯</span>
            <h2 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Cybersecurity Skills
              <span className="animate-pulse text-[#00ff9d]">_</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-500 ml-5">
            // Junior Pentester & Security Enthusiast
          </p>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {cyberCategories.map((category, index) => (
          <CategoryCard key={category.name} category={category} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default CyberSkills;
