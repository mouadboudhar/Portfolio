// ─────────────────────────────────────────────────────────────
// Skills.tsx - Data-Driven Skills Section with Terminal Aesthetic
// ─────────────────────────────────────────────────────────────

import Section from './Section';

// ─── Type Definitions ────────────────────────────────────────

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsProps {
  title?: string;
  className?: string;
}

// ─── Skills Data ─────────────────────────────────────────────

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'C/C++' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C#' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Django' },
      { name: '.NET' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'Oracle' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
];

// ─── Skill Card Component ────────────────────────────────────

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div
      className="
        group relative
        bg-[#111111] border border-[#1a1a1a]
        rounded-lg px-4 py-3
        hover:border-[#00ff9d]/50 hover:bg-[#0f1f18]
        transition-all duration-300 ease-out
        cursor-default
      "
    >
      {/* Glow effect on hover */}
      <div
        className="
          absolute inset-0 rounded-lg opacity-0
          group-hover:opacity-100
          bg-gradient-to-r from-[#00ff9d]/5 to-transparent
          transition-opacity duration-300
        "
      />
      
      <span
        className="
          relative z-10
          font-mono text-sm md:text-base
          text-gray-300 group-hover:text-[#00ff9d]
          transition-colors duration-300
        "
      >
        {skill.name}
      </span>
    </div>
  );
};

// ─── Category Component ──────────────────────────────────────

interface CategoryProps {
  category: SkillCategory;
  index: number;
}

const CategorySection = ({ category, index }: CategoryProps) => {
  return (
    <div
      className="
        w-full max-w-md
        animate-fade-in
      "
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#00ff9d] font-mono text-sm">
          [{String(index + 1).padStart(2, '0')}]
        </span>
        <h3
          className="
            font-mono text-lg md:text-xl font-semibold
            text-white tracking-wide
          "
        >
          {category.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a] to-transparent" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

// ─── Main Skills Component ───────────────────────────────────

const Skills = ({ title = 'Skills', className = '' }: SkillsProps) => {
  return (
    <Section id="skills" className={className}>
      {/* Terminal-style Header */}
      <div className="w-full max-w-4xl mb-12">
        <div
          className="
            inline-flex items-center gap-2
            bg-[#111111] border border-[#1a1a1a]
            rounded-t-lg px-4 py-2
          "
        >
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27ca40]" />
          <span className="ml-2 font-mono text-xs text-gray-500">
            skills.tsx
          </span>
        </div>
        
        <div
          className="
            bg-[#0d0d0d] border border-t-0 border-[#1a1a1a]
            rounded-b-lg rounded-tr-lg p-6
          "
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#00ff9d] font-mono">❯</span>
            <h2
              className="
                font-mono text-2xl md:text-3xl lg:text-4xl
                font-bold text-white
                tracking-tight
              "
            >
              {title}
              <span className="animate-pulse text-[#00ff9d]">_</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-gray-500 ml-5">
            // Technologies I work with
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div
        className="
          w-full max-w-4xl
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-10
        "
      >
        {skillCategories.map((category, index) => (
          <CategorySection
            key={category.name}
            category={category}
            index={index}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex items-center gap-2
          font-mono text-xs text-gray-600
        "
      >
        <span className="animate-bounce">↓</span>
        <span>scroll to continue</span>
      </div>
    </Section>
  );
};

export default Skills;
