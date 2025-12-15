// ─────────────────────────────────────────────────────────────
// Contact.tsx - Contact Section with Social Media Links
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion';
import Section from './Section';
import { staggerContainer, fadeInUp, popIn } from './animations';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi';
import { SiBluesky } from 'react-icons/si';

// ─── Social Links Data ───────────────────────────────────────

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  username: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <FiGithub size={24} />,
    url: 'https://github.com/mouadboudhar',
    color: '#ffffff',
    username: '@mouadboudhar',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin size={24} />,
    url: 'https://linkedin.com/in/mouadboudhar',
    color: '#0077b5',
    username: '/in/mouadboudhar',
  },
  {
    name: 'Twitter',
    icon: <FiTwitter size={24} />,
    url: 'https://twitter.com/unholydkplayer',
    color: '#1da1f2',
    username: '@unholydkplayer',
  },
  {
    name: 'Bluesky',
    icon: <SiBluesky size={24} />,
    url: 'https://bsky.app/profile/mouadboudhar.bsky.social',
    color: '#0085ff',
    username: '@mouadboudhar',
  },
];

// ─── Social Card Component ───────────────────────────────────

const SocialCard = ({ social }: { social: SocialLink }) => {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative group
        flex flex-col items-center justify-center
        bg-[#111111] border border-[#1a1a1a]
        rounded-xl p-4 sm:p-6
        cursor-pointer overflow-hidden
        transition-colors duration-300
      "
      variants={popIn}
      whileHover={{ 
        scale: 1.05,
        borderColor: social.color,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow Effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{ 
          background: `radial-gradient(circle at center, ${social.color}15 0%, transparent 70%)`,
          boxShadow: `0 0 30px ${social.color}20`
        }}
      />
      
      {/* Icon */}
      <motion.div 
        className="relative z-10 text-gray-400 group-hover:text-white transition-colors mb-2 sm:mb-3"
        style={{ color: 'inherit' }}
        whileHover={{ color: social.color }}
      >
        <span className="group-hover:drop-shadow-lg [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6" style={{ color: 'inherit' }}>
          {social.icon}
        </span>
      </motion.div>

      {/* Name */}
      <span className="relative z-10 font-mono text-xs sm:text-sm font-semibold text-white mb-0.5 sm:mb-1">
        {social.name}
      </span>

      {/* Username */}
      <span className="relative z-10 font-mono text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-400 transition-colors truncate max-w-full">
        {social.username}
      </span>
    </motion.a>
  );
};

// ─── Main Component ──────────────────────────────────────────

const Contact = () => {
  return (
    <Section id="contact" className="relative">
      <motion.div 
        className="text-center max-w-3xl px-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Terminal Command */}
        <motion.div 
          className="inline-flex items-center gap-2 mb-4 sm:mb-6 font-mono text-xs sm:text-sm text-gray-500"
          variants={fadeInUp}
        >
          <span className="text-[#00ff9d]">❯</span>
          <span>./contact.sh --connect</span>
        </motion.div>
        
        {/* Title */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white"
          variants={fadeInUp}
        >
          Get In Touch
          <span className="text-[#00ff9d] animate-pulse">_</span>
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="font-mono text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto"
          variants={fadeInUp}
        >
          // Ready to collaborate on your next project? <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>// Whether it's security testing or building applications, let's talk.
        </motion.p>

        {/* Email Button */}
        <motion.a
          href="mailto:mouadboudhar4@gmail.com"
          className="
            inline-flex items-center gap-2 sm:gap-3
            px-5 sm:px-8 py-3 sm:py-4 rounded-lg mb-8 sm:mb-12
            bg-[#00ff9d] text-[#0a0a0a]
            font-mono font-semibold text-sm sm:text-base
            transition-all duration-300
          "
          variants={fadeInUp}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(0, 255, 157, 0.3)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          <FiMail size={20} />
          <span>Send Message</span>
          <FiSend size={16} />
        </motion.a>

        {/* Social Links Grid */}
        <motion.div 
          className="w-full"
          variants={fadeInUp}
        >
          <p className="font-mono text-[10px] sm:text-xs text-gray-600 mb-4 sm:mb-6">
            // Or find me on social media
          </p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {socialLinks.map((social) => (
              <SocialCard key={social.name} social={social} />
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#1a1a1a]"
          variants={fadeInUp}
        >
          <p className="font-mono text-[10px] sm:text-xs text-gray-600">
            <span className="text-[#00ff9d]">©</span> {new Date().getFullYear()} Mouad Boudhar. 
            <span className="mx-1 sm:mx-2">|</span>
            Built with <span className="text-[#00d4ff]">React</span> + <span className="text-[#00ff9d]">Tailwind</span>
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-gray-700 mt-1 sm:mt-2">
            {'// Designed & developed with <3'}
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;
