// ─────────────────────────────────────────────────────────────
// App.tsx - Main Portfolio Application
// Architecture: Two-Zone Split (Cybersecurity → Development)
// ─────────────────────────────────────────────────────────────

import ScrollContainer from './components/ScrollContainer';
import Hero from './components/Hero';
import CyberSkills from './components/CyberSkills';
import CyberProjects from './components/CyberProjects';
import DevSkills from './components/DevSkills';
import DevProjects from './components/DevProjects';
import Contact from './components/Contact';

function App() {
  return (
    <ScrollContainer>
      {/* ═══════════════════════════════════════════════════════════
          INTRODUCTION
          ═══════════════════════════════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════════
          PHASE 1: CYBERSECURITY / PENTESTING ZONE
          Priority focus on security skills and projects
          ═══════════════════════════════════════════════════════════ */}
      <CyberSkills />
      <CyberProjects />

      {/* ═══════════════════════════════════════════════════════════
          PHASE 2: SOFTWARE DEVELOPMENT ZONE
          Full-stack development skills and projects
          ═══════════════════════════════════════════════════════════ */}
      <DevSkills />
      <DevProjects />

      {/* ═══════════════════════════════════════════════════════════
          CONTACT & SOCIAL
          Connect and collaborate
          ═══════════════════════════════════════════════════════════ */}
      <Contact />
    </ScrollContainer>
  );
}

export default App;
