import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ishaan Goyal",
  initials: "IG",
  url: "https://ishaangoyal.vercel.app/",
  location: "Urbana, IL",
  locationLink: "https://www.google.com/maps/place/Urbana,+IL",
  description:
    "Computer Science student at UIUC and Software Developer with a passion for innovation and problem-solving.",
  summary:
    "I'm a Computer Science student at the University of Illinois Urbana-Champaign (James Scholar Honors Program) with experience in full-stack development. I'm passionate about building innovative solutions and solving complex problems through efficient, well-designed code.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "ShadCN",
    "Framer Motion",
    "Node.js",
    "Express",
    "WebSockets",
    "LangChain",
    "OpenAPI",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "AWS",
    "D3.js",
    "CRDTs",
    "Yjs",
    "Python",
    "C++",
    "Java",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ishaan6@illinois.edu",
    tel: "+1 (217) 202-0293",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GoyalIshaan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ishaan-goyal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/IshaanGoyal05",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Jinship (Disruption Lab)",
      href: "/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/white.png",
      start: "September 2024",
      end: "December 2024",
      description:
        "Led the design and implementation of a feedback system for Jinship, improving data collection efficiency and enhancing user experience. Optimized client-side code, integrating graph-based recommendations and precomputed embeddings, resulting in a 25% improvement in response times. Created visualization tools and tracked user engagement metrics to enhance chatbot success evaluation.",
    },
    {
      company: "Illinois Space Society",
      href: "/",
      badges: [],
      location: "Urbana, Illinois",
      title: "Software Developer",
      logoUrl: "/white.png",
      start: "September 2023",
      end: "December 2023",
      description:
        "Reengineered ISS flight monitoring system, transforming Flask-based codebase into high-performance React application with code splitting and lazy loading, yielding 70% improvement in site performance. Orchestrated UI/UX redesign using Figma and implemented D3.js to create responsive, data-driven visualizations of complex rocket dynamics.",
    },
    {
      company: "NFT Reality",
      href: "/",
      badges: [],
      location: "Jaipur, India",
      title: "Founder",
      logoUrl: "/nftReality.jpeg",
      start: "December 2021",
      end: "February 2023",
      description:
        "Spearheaded development by founding and managing a 10-member international team to build a VR-based NFT marketplace. Executed UI/UX design principles in collaboration with the team, integrating Unity-based VR interactions and 3D designs. Expanded project reach by cultivating a community of 700+ members and onboarding 500+ NFT artists.",
    },
  ],
  education: [
    {
      school: "University of Illinois Urbana-Champaign",
      href: "https://siebelschool.illinois.edu/",
      degree:
        "Bachelor of Science in Computer Science (James Scholar Honors Program)",
      logoUrl: "/uiuc.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Hephaestus",
      href: "/",
      dates: "February 2025",
      active: true,
      description:
        "Architected a custom AI context and shared memory layer, enabling agents to persist knowledge across interactions. Designed and implemented an OpenAPI-standardized tool schema for modular AI-powered tools. Developed a real-time execution streaming system using WebSockets, reducing agent response times by 50%.",
      technologies: [
        "Next.js",
        "TypeScript",
        "LangChain",
        "OpenAPI",
        "WebSockets",
        "ShadCN",
        "AWS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/white.png",
      video: "",
    },
    {
      title: "Docnest",
      href: "http://44.202.59.248/",
      dates: "August 2024",
      active: true,
      description:
        "Deployed real-time text collaboration platform with collaborative editing, document management, and in-document chat. Configured AWS EC2, Ubuntu, SSH, and Nginx reverse proxy. Incorporated Yjs CRDT framework for real-time collaboration with eventual consistency and architected a custom WebSocket layer, optimizing synchronization by 60%.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "WebSocket",
        "PostgreSQL",
        "Prisma ORM",
        "AWS",
        "CRDT",
        "Yjs",
      ],
      links: [
        {
          type: "Website",
          href: "http://44.202.59.248/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan/docnest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/docnest.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackIllinois",
      dates: "February 23-25, 2024",
      location: "Urbana, Illinois",
      description:
        "RoomieMatch is an app designed to help college students find the perfect roommates through a Tinder-like matching system. Features include user profiles, preference matching, and in-app messaging.",
      image: "/hackillinois.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/GoyalIshaan/RoomieMatch/tree/main",
        },
      ],
    },
  ],
} as const;
