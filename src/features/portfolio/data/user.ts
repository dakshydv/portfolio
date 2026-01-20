import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Daksh",
  lastName: "Yadav",
  displayName: "Daksh Yadav",
  username: "dakshydv_",
  gender: "male",
  pronouns: "he/him",
  bio: "Building with code",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Full Stack Engineer",
    "Open Source Contributor",
  ],
  address: "Gurugram, India",
  phoneNumber: "KzkxIDg4MDA1OTExOTU=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "ZGFrc2h5YWRhdi5kZXZAZ21haWwuY29t", // base64 encoded
  website: "https://dakshyadav.com",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Building",
      company: "Sketchly",
      website: "https://www.sketchly.pro",
    },
    {
      title: "Software Developer",
      company: "Craon AI",
      website: "https://www.craon.ai",
    },
  ],
  //   about: `
  // Hello! I am Daksh Yadav — a Full Stack Developer passionate about building high-quality web applications.
  // `,
  about: `
- I build Web Applications that actually work
- Skilled in **Next.js**, **React**, **TypeScript**, **Golang**, **tRPC**, and modern full-stack technologies, building production-ready solutions for difference domains.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
`,
  avatar: "images/profile.jpeg",
  ogImage: "/images/preview-card-dark.png",
  namePronunciationUrl: "", // Removed legacy audio
  timeZone: "Asia/Kolkata",
  keywords: [
    "dakshydv",
    "daksh yadav",
    "daksh yadav",
    "dakshydv_",
    "daksh github",
    "dakshyadav",
    "daksh",
    "yadav",
    "dkshydv",
    "dksh",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
