export interface ProjectTypes {
  title: string;
  timeline: string;
  skills: string[];
  src: string;
  webUrl?: string;
  gitUrl?: string;
  desc: string;
}

export interface ExperienceTypes {
  company: string;
  timeline: string;
  role: string;
  desc: string[];
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const projects: ProjectTypes[] = [
  {
    title: "Sketchly",
    timeline: "July 2025 - Present",
    src: "/infinidraw.png",
    gitUrl: "https://github.com/dakshydv/sketchly-nextjs.git",
    webUrl: "https://sketchly.pro",
    skills: [
      "nextjs",
      "reactjs",
      "tailwindcss",
      "websockets",
      "postgreSQL"
    ],
    desc: "A minimalist, collaborative whiteboard tool built with React and TypeScript, featuring real-time drawing, shapes, and text. Supports exporting sketches and offline functionality. Designed for simplicity and ease of use, inspired by Excalidraw.",
  },
  {
    title: "UpStack",
    timeline: "March 2024 - April 2025",
    src: "/upstack2.png",
    gitUrl: "https://github.com/dakshydv/UpStack.git",
    webUrl: "https://up-stack.vercel.app/",
    skills: [
      "nextjs",
      "reactjs",
      "tailwindcss",
      "expressjs",
      "nodemailer",
      "redis streams",
    ],
    desc: "Stop guessing if your APIs are down. Upstack quietly watches your endpoints and alerts you before users notice failures. Get cron-like monitoring without the cron headaches.",
  },
  {
    title: "Midnight Customs (Freelance)",
    timeline: "March 2024 - May 2024",
    src: "/midnightcustoms.png",
    webUrl: "https://www.mdntcstms.com",
    gitUrl: "https://github.com/dakshydv/midnight-customs",
    skills: ["nextjs", "reactjs", "tailwindcss", "nodemailer"],
    desc: "A sleek, responsive website for a premium customs garage, showcasing their unique vehicle builds and services. Built with modern design and seamless user experience to highlight their craftsmanship.",
  },
  {
    title: "Blink Chat",
    timeline: "Dec 2024 - Jan 2025",
    src: "/blinkchat.png",
    gitUrl: "https://github.com/dakshydv/BlinkChat.git",
    skills: [
      "reactjs",
      "expressjs",
      "tailwindcss",
      "postgreSQL",
      "websockets",
      "jsonwebtoken",
    ],
    desc: "A lightweight chat app where messages appear instantly. No lag, no refreshes – just smooth conversations that stay synced across devices.",
  },
  {
    title: "YT Downloader",
    timeline: "Jan 2024 - Feb 2025",
    src: "/ytdownloader.png",
    gitUrl: "https://github.com/dakshydv/yt-downloader.git",
    skills: ["nextjs", "reactjs", "tailwindcss"],
    desc: "A simple web app that lets you download YouTube videos instantly and for free.",
  },
  {
    title: "Link Vault",
    timeline: "Nov 2024 - Dec 2024",
    src: "/linkvault.png",
    gitUrl: "https://github.com/dakshydv/LinkVault.git",
    skills: ["reactjs", "expressjs", "tailwindcss"],
    desc: "A full-stack web app for saving and categorizing important links, videos, and documents",
  },
];

export const Experiences: ExperienceTypes[] = [
  {
    company: "Freelancer",
    timeline: "December 2024 - Present",
    role: "Full Stack Developer",
    desc: ["Designed, developed, and deployed responsive full stack web applications using React, Node.js, Express, and MongoDB.", "Built and optimized RESTful APIs, integrated third-party services, and implemented secure authentication systems.", "Collaborated with clients to gather requirements and deliver scalable, high-performance solutions on time.", "Deployed and maintained applications on cloud platforms with CI/CD pipelines for seamless updates."],
  },
  {
    company: "Midnight Customs, Bolton, Canada (Remote)",
    timeline: "March 2025 - May 2025",
    role: "Full Stack Developer",
    desc: ["Designed and developed a responsive website for Midnight Customs with dynamic booking forms and automated email confirmations.", "Built an intuitive, mobile-optimized UI/UX ensuring seamless customer interaction and cross-browser compatibility.", "Collaborated remotely with stakeholders to gather requirements and deliver a fully functional, deployed site on time.", "Improved customer engagement and streamlined appointment handling through integrated digital workflows."],
  },
  {
    company: "Coding Club, BITS Pilani",
    timeline: "August 2024 - Present",
    role: "Member",
    desc: ["Actively contributed to the college coding club through hackathons, workshops, and collaborative web development projects.", "Participated in peer programming, code reviews, and knowledge-sharing sessions to strengthen problem-solving and technical skills.", "Assisted in organizing tech events and coding competitions, fostering a learning-driven community and gaining exposure to emerging technologies."],
  },
];
