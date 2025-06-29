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
    src: "/project1.jpeg",
    webUrl: "#",
    gitUrl: "",
    skills: ["nextjs", "reactjs", "tailwindcss", "expressjs", "nodemailer", "redis"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis, debitis, aspernatur enim ex doloremque libero sunt",
  },
  {
    title: "Blink Chat",
    timeline: "March 2024 - April 2025",
    src: "/project2.jpeg",
    webUrl: "#",
    gitUrl: "#",
    skills: ["nextjs", "reactjs", "tailwindcss", "websockets"],
    desc: "Lorem s ab sit voluptatem assumenda illo, libero, provident, amet modi neque quas quidem est ut velit!",
  },
  {
    title: "LinkVault",
    timeline: "March 2024 - April 2025",
    src: "/project3.jpeg",
    webUrl: "#",
    skills: ["reactjs", "expressjs", "tailwindcss"],
    desc: "Lorem ipsum dolor sit amet, consectetur adndae.",
  },
  {
    title: "Project Gama",
    timeline: "March 2024 - April 2025",
    src: "/project4.jpeg",
    webUrl: "#",
    skills: ["reactjs", "expressjs", "tailwindcss"],
    desc: "Lorem ipsum dolor sit mpedit, tenetur quos praesentium iure ab dolorem numquam sint eaque exercitationem!",
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