import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ishaan Goyal",
  initials: "DV",
  url: "https://ishaangoyal.vercel.app/",
  location: "Urbana, IL",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Computer Science student and Software Developer with a passion for innovation and entrepreneurship.",
  summary:
    "I'm passionate about computer science, eager to learn, and driven to use technology to solve real-world problems. I'm excited about entrepreneurship and committed to creating impactful, tech-driven solutions.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind",
    "Framer Motion",
    "Typescript",
    "Javascript",
    "Node.js",
    "Express",
    "Ws",
    "Hono",
    "JWT",
    "Zod",
    "Python",
    "Postgres SQL",
    "Prisma",
    "Cloudflare Workers",
    "Docker",
    "C++",
    "Java",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "goyalishaan2005@gmail.com",
    tel: "+1 (217)841-1368",
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
      company: "NFT Reality",
      href: "/",
      badges: [],
      location: "Toronto, ON",
      title: "Founder",
      logoUrl: "/nftReality.jpeg",
      start: "October 2021",
      end: "Jan 2023",
      description:
        "Founded and led a 10-member international team to build a VR-based NFT marketplace and art galleries. Utilized Unity, Blender, and third-party services to create a fully operational platform, onboarding 500+ NFT artisans and managing a 700+ member community.",
    },
  ],
  education: [
    {
      school: "University of Illinois Urbana-Champaign",
      href: "https://siebelschool.illinois.edu/",
      degree: "Bachelor's of Science in Computer Science",
      logoUrl: "/uiuc.png",
      start: "2023",
      end: "present",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Docnest",
      href: "/",
      dates: "August 2024",
      active: true,
      description:
        "DocNest is a real-time text collaboration platform. This project showcases the implementation of a distributed systems, CRDTs, conflict resolution and eventual consistency.",
      technologies: [
        "Vite",
        "React",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "Ws",
        "PostgreSQL",
        "Prisma ORM",
        "Jwt",
        "Yjs",
        "Quill",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan/docnest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/docnest.jpeg",
      video: "",
    },
    {
      title: "QuickMark",
      href: "https://quickmark-one.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "Quickmark is a feature-rich blogging platform. It provides a seamless experience for its users, with a focus on performance, UX, and scalability.",
      technologies: [
        "Vite",
        "React",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "Node.js",
        "Hono",
        "PostgreSQL",
        "Prisma Accelerate",
        "Jwt",
        "Zod",
        "Cloudfare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://quickmark-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan/quickmark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quickmark.jpeg",
      video: "",
    },
    {
      title: "DropShop",
      href: "/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "DropShop is an e-commerce platform which offers a suite of features including product listing, user auth, cart management, order processing, and more.",
      technologies: [
        "Vite",
        "React",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Jwt",
        "Paypal API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan/dropshop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/white.png",
      video: "",
    },
    {
      title: "Worldwise",
      href: "/",
      dates: "June 2024",
      active: true,
      description:
        "WorldWise is a concept application designed to help users visulize their travel history. With the help of an interactive map, intuitive forms, and a amazing UI/UX.",
      technologies: [
        "Vite",
        "Javascript",
        "React Hooks",
        "React Leaflet",
        "json-server",
        "CSS Modules",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GoyalIshaan/WorldWise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/worldwise.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackIllinois",
      dates: "February 23-25, 2024",
      location: "Urbana, Illinois",
      description:
        "RoomieMatch is an app designed to help college students find the perfect roommates through a Tinder-like matching system.",
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
