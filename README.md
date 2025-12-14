#  Portfolio | Cybersecurity & Full Stack Developer

A modern, responsive portfolio website with a terminal-inspired aesthetic, smooth scroll snapping, and dynamic animations. Built to showcase skills and projects across both **Cybersecurity/Pentesting** and **Full Stack Development**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

##  Features

- **Two-Zone Architecture**: Separate sections highlighting Cybersecurity and Development expertise
- **Terminal Aesthetic**: Hacker-inspired design with command prompts and monospace fonts
- **Scroll Snapping**: Smooth full-page vertical scrolling between sections
- **Framer Motion Animations**: Fade-ins, staggered lists, and hover effects
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode with accent colors

##  Sections

1. **Hero** - Introduction with terminal-style greeting
2. **Cyber Skills** - Reconnaissance, Web Exploitation, Network Security, Scripting
3. **Cyber Projects** - CTF writeups, security tools, pentest reports
4. **Dev Skills** - Languages, Frontend, Backend, Databases, DevOps
5. **Dev Projects** - Web apps, APIs, mobile applications
6. **Contact** - Email and social media links (GitHub, LinkedIn, Twitter, Bluesky)

##  Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

##  Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Build Tool** | Vite 7 |
| **Icons** | React Icons |
| **Analytics** | Vercel Speed Insights |

##  Project Structure

```
src/
 components/
    Hero.tsx           # Introduction section
    CyberSkills.tsx    # Cybersecurity skills
    CyberProjects.tsx  # Security projects showcase
    DevSkills.tsx      # Development skills
    DevProjects.tsx    # Dev projects showcase
    Contact.tsx        # Contact & social links
    Section.tsx        # Reusable section wrapper
    ScrollContainer.tsx # Scroll snap container
    animations.ts      # Framer Motion variants
 App.tsx                # Main app component
 main.tsx               # Entry point
 index.css              # Global styles
```

##  Customization

To personalize the portfolio:

1. **Update personal info** in `Hero.tsx` (name, title)
2. **Modify skills** in `CyberSkills.tsx` and `DevSkills.tsx`
3. **Add your projects** in `CyberProjects.tsx` and `DevProjects.tsx`
4. **Update social links** in `Contact.tsx`
5. **Change accent colors** by editing the Tailwind classes (`#00ff9d` for cyber, `#00d4ff` for dev)

##  License

MIT License - Feel free to use this template for your own portfolio!

---

<p align="center">
  <sub>Built with  using React + Tailwind + Framer Motion</sub>
</p>
