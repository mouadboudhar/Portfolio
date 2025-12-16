// ─────────────────────────────────────────────────────────────
// DevSkills.tsx - Software Development Skills Section
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { 
  staggerContainer, 
  fadeInUp,
  popIn 
} from './animations';

// ─── Dev Skills Data ─────────────────────────────────────────

interface DevSkill {
  name: string;
  icon?: string;
}

interface DevCategory {
  name: string;
  icon: string;
  color: string;
  skills: DevSkill[];
}

const devCategories: DevCategory[] = [
  {
    name: 'Languages',
    icon: '💻',
    color: '#00d4ff',
    skills: [
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C/C++' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'SQL' },
    ],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: '#00ff9d',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML/CSS' },
      { name: 'Vite' },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: '#ff9d00',
    skills: [
      { name: 'Node.js' },
      { name: 'Django' },
      { name: '.NET' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Express' },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    color: '#d400ff',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Oracle' },
      { name: 'Redis' },
      { name: 'SQLite' },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: '🛠️',
    color: '#ff5f56',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'CI/CD' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
];

// ─── Skill Chip Component ────────────────────────────────────

const SkillChip = ({ skill, color }: { skill: DevSkill; color: string }) => {
  return (
    <motion.div
      className="
        relative group
        bg-[#111111] border border-[#1a1a1a]
        rounded-lg px-2.5 sm:px-4 py-1.5 sm:py-2
        cursor-default overflow-hidden
      "
      variants={popIn}
      whileHover={{ 
        scale: 1.05,
        borderColor: color,
        transition: { duration: 0.2 }
      }}
    >
      {/* Glow on hover */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` 
        }}
      />
      
      <span 
        className="relative z-10 font-mono text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors"
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

// ─── Category Card Component ─────────────────────────────────

const CategoryCard = ({ category, index }: { category: DevCategory; index: number }) => {
  return (
    <motion.div
      className="w-full"
      variants={fadeInUp}
      custom={index}
    >
      {/* Category Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className="text-lg sm:text-2xl">{category.icon}</span>
        <h3 className="font-mono text-sm sm:text-lg font-semibold text-white">
          {category.name}
        </h3>
        <div 
          className="flex-1 h-px"
          style={{ 
            background: `linear-gradient(to right, ${category.color}50, transparent)` 
          }}
        />
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="flex flex-wrap gap-1.5 sm:gap-2 max-sm:gap-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} color={category.color} />
        ))}
      </motion.div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────

const DevSkills = () => {
  return (
    <Section id="dev-skills" variant="dev">
      {/* Section Header */}
      <motion.div 
        className="w-full max-w-5xl mb-6 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Window */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#111111] border border-[#1a1a1a] rounded-t-lg px-3 sm:px-4 py-1.5 sm:py-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27ca40]" />
          <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs text-gray-500">dev_skills.json</span>
        </div>
        
        <div className="bg-[#0d0d0d] border border-t-0 border-[#1a1a1a] rounded-b-lg rounded-tr-lg p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <span className="text-[#00d4ff] font-mono">{'{'}</span>
            <h2 className="font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Development Skills
              <span className="animate-pulse text-[#00d4ff]">_</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-500 ml-3 sm:ml-5">
            "description": "Full Stack Developer Toolkit"
          </p>
        </div>
      </motion.div>

      {/* Skills Categories */}
      <motion.div 
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {devCategories.map((category, index) => (
          <CategoryCard key={category.name} category={category} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default DevSkills;
