import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "Dec 2024",
        },
        employmentType: "Part-time",
        description: `- Built a booking management website for customs garage.
- Built a real-time dashboard for monitoring server health and website traffic.
- Created an internal tool for a law firm to manage case files and client documents.
- Built a membership management tool for a gym`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "mdntcstms",
    companyName: "Midnight Customs",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "Mar 2025",
          end: "May 2025",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Designed and developed a responsive website for Midnight Customs with dynamic booking forms and automated email confirmations.
- Built an intuitive, mobile-optimized UI/UX ensuring seamless customer interaction and cross-browser compatibility.
- Collaborated remotely with stakeholders to gather requirements and deliver a fully functional, deployed site on time.
- Improved customer engagement and streamlined appointment handling through integrated digital workflows.
- Ensure UI/UX consistency and adherence to standards.
`,
        skills: ["TypeScript", "Next.js", "Tailwind CSS", "Nodemailer"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "e7b2a1d4-5c3f-4a89-bb12-8f1d45c90a1a",
        title: "Coding Club - BITS Pilani",
        employmentPeriod: {
          start: "Aug 2024",
        },
        icon: "education",
        description: `- Active contribution to the college coding club through hackathons, workshops, and collaborative web development projects.
- Participation in peer programming, code reviews, and knowledge-sharing sessions to strengthen problem-solving and technical skills.
- Assisted in organizing tech events and coding competitions, fostering a learning-driven community and gaining exposure to emerging technologies.
`,
        skills: [
          "Typescript",
          "Golang",
          "Next.js",
          "MongoDB",
          "PostgreSQL",
          "Express.js",
        ],
        isExpanded: true,
      },
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Birla Institute of Technology and Sciences - Pilani",
        employmentPeriod: {
          start: "Aug 2024",
          end: "Aug 2027",
        },
        icon: "education",
        description: `- Currently pursuing a Bachelor's degree in Computer Science.
- Language Proficiency: B1 English Level.
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
        skills: [
          "C",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Software Engineering",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "RPS International School - Gurugram",
        employmentPeriod: {
          start: "April 2019",
          end: "April 2023",
        },
        icon: "education",
      },
    ],
    isCurrentEmployer: true,
  },
];
