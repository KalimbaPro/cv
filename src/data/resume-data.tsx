/* eslint-disable react/no-unescaped-entities */
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Matthieu Roques",
  initials: "MR",
  location: "Paris, France, CEST",
  locationLink: "https://www.google.com/maps/place/Paris",
  about:
    "Versatile Developer with a strong interest in building solutions across web, mobile, and systems programming.",
  summary: (
    <>
      Passionate about technology and creativity, I studied coding for five years at EPITECH Paris,
      where I built a strong foundation in software and web development.
      I'm quick to learn new technologies and enjoy tackling challenges across coding or video editing.
      Outside of tech, I love traveling and used to play piano.
      Currently based in France and looking for opportunity in East Asia.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/219374170?v=4",
  personalWebsiteUrl: "https://wizardwipeout.itch.io/wizardwipeout",
  contact: {
    email: "matthieu.roques@epitech.eu",
    tel: "+33652002794",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/KalimbaPro",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthieu-roques-129b94206/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Epitech Paris",
      degree: "Master's degree, Information Technology",
      start: "2020",
      end: "2025",
    },
    {
      school: "Keimyung University",
      degree: "Specialization in video game development",
      start: "2024",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Japhy.fr",
      link: "https://japhy.fr",
      badges: [
        "On Site",
        "Golang",
        "Vue,js",
        "TypeScript",
        "Node.js",
        "Growthbook",
        "Figma"
      ],
      title: "Internship - Full Stack Developer",
      logo: ConsultlyLogo,
      start: "2025",
      end: "Present",
      description: (
        <>
          Worked on internal tools and customer-facing features in a startup
          environment using Vue.js and Go.
          <ul className="list-inside list-disc">
            <li>
              Built and maintained features across the stack
              using Vue.js (frontend) and Go (backend)
            </li>
            <li>
              Collaborated with designers using Figma to deliver
              high-quality user interfaces
            </li>
            <li>
              Implemented backend testing and integrated
              A/B testing with GrowthBook for data-driven development
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Allianz Technology",
      link: "https://tech.allianz.com/en.html",
      badges: [
        "On Site",
        "Java",
        "z/OS",
        "Mainframe",
        "Eclipse",
      ],
      title: "Intership - Software Developer",
      logo: ParabolLogo,
      start: "2024",
      end: "2025",
      description: (
        <>
          Contributed to the upgrade and enhancement of an
          Eclipse plugin used by 100+ developers.
          <ul className="list-inside list-disc">
            <li>
              Migrated codebase from Java 8 to Java 11, ensuring
              long-term compatibility and stability
            </li>
            <li>
              Redesigned user preferences system to persist
              function parameters across sessions
            </li>
            <li>
              Improved UX by creating new Eclipse views
              and enhancing interface ergonomics
            </li>
            <li>
              Delivered business-requested features and maintained
              integration with mainframe systems via Endevor
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "SynApp",
      link: "https://www.synapp.eu/",
      badges: ["On Site", "Flutter", "Android", "iOS", "NestJS", "Angular"],
      title: "Intership - Mobile Frontend Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description: (
        <>
          Contributed to the development of a secure
          messaging platform for healthcare professionals.
          <ul className="list-inside list-disc">
            <li>
              Built the mobile app using Flutter,
              ensuring compliance with French HDS (Health Data Hosting) standards
            </li>
            <li>
              Initiated the web version using NestJS (backend)
              and Angular (frontend) for cross-platform availability
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Web@cademy",
      link: "https://www.webacademie.org/",
      badges: ["On Site", "PHP", "Education", "Mentoring"],
      title: "Technical Instructor",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description: (
        <>
          Supported first-year programming students`
          during an intensive 3-week bootcamp.
          <ul className="list-inside list-disc">
            <li>
              Provided technical guidance and troubleshooting in PHP
            </li>
            <li>Helped students understand core development
              concepts and debugging techniques
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nextino",
      link: "https://ia-loirevalley.fr/entreprises/nexino/",
      badges: ["On Site", "C", "UNIX", "GDB", "Valgrind", "Strace"],
      title: "Internship - Software Engineer",
      logo: NSNLogo,
      start: "2020",
      end: "2020",
      description: (
        <>
          Gained hands-on experience with UNIX debugging
          tools (gdb, valgrind, strace) to analyze and fix low-level code.
          <ul className="list-inside list-disc">
            <li>
              Structured modular C code to improve readability and maintainability
            </li>
            <li>Optimized file traversal algorithm, reducing
              execution time and resource usage
            </li>
            <li>
              Improved memory management, cutting memory
              footprint by a factor of 10
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Golang (Go)",
    "Java",
    "C",
    "PHP",
    "Python",
    "Vue.js",
    "Angular",
    "Flutter",
    "NestJS",
    "Unix/Linux",
    "Growthbook",
    "Git",
    "Teamwork",
    "Problem Solving",
    "Communication",
    "Agile Methodologies",
  ],
  projects: [
    {
      title: "Wizard Wipeout",
      techStack: ["Unreal Engine 5", "P4V", "Blueprint"],
      description:
        "A fast-paced Battle Arena game developed with Unreal Engine 5 by a team of 10.The game features magical combat in dynamic arenas, blending strategy and skill for competitive multiplayer gameplay.",
      logo: MonitoLogo,
      link: {
        label: "WizardWipeout.dev",
        href: "https://wizardwipeout.itch.io/wizardwipeout",
      },
    },
  ],
} as const;
