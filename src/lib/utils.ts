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
  desc: string
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const projects: ProjectTypes[] = [
  {
    title: "UpStack",
    timeline: "March 2024 - April 2025",
    src: "/upstack.png",
    gitUrl: "https://github.com/dakshydv/UpStack.git",
    skills: ["nextjs", "reactjs", "tailwindcss", "expressjs", "nodemailer", "redis"],
    desc: "Stop guessing if your APIs are down. Upstack quietly watches your endpoints and alerts you before users notice failures. Get cron-like monitoring without the cron headaches.",
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
    title: "Blink Chat",
    timeline: "Dec 2024 - Jan 2025",
    src: "/blinkchat.png",
    gitUrl: "https://github.com/dakshydv/BlinkChat.git",
    skills: ["reactjs", "expressjs", "tailwindcss","postgreSQL", "websockets", "jsonwebtoken"],
    desc: "A lightweight chat app where messages appear instantly. No lag, no refreshes – just smooth conversations that stay synced across devices.",
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

export const Experiences:ExperienceTypes[]  = [
  {
    company: "Midnight Customs",
    timeline: "April 2024 - May 2025",
    role: "Full Stack Developer",
    desc: "Designed and developed a responsive customs garage website with dynamic booking forms and integrated email services (SMTP/API) for automated appointment confirmations. Built an intuitive UI/UX for seamless customer interaction while ensuring cross-browser compatibility and mobile optimization. Collaborated with stakeholders to deliver a fully functional site, improving engagement and operational efficiency."
  },
  {
    company: "Freelancer",
    timeline: "December 2024 - Present",
    role: "Full Stack Developer",
    desc: "Designed and developed custom websites for clients, including a fully functional customs garage site with booking forms, automated email services, and responsive UI/UX. Collaborated directly with clients to gather requirements, implement solutions, and ensure timely project delivery. Specialized in front-end development, performance optimization, and seamless third-party integrations to enhance user experience and business efficiency."
  },
  {
    company: "Coding Club, BITS Pilani",
    timeline: "August 2024 - Present",
    role: "Member",
    desc: "Actively contributed to the college coding club by participating in hackathons, workshops, and collaborative projects to enhance technical skills in web development and problem-solving. Engaged in peer programming, code reviews, and knowledge-sharing sessions to foster a learning-driven community. Assisted in organizing tech events and coding competitions, gaining exposure to emerging technologies and teamwork in software development."
  }
]