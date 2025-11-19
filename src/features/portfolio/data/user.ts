import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Daksh",
  lastName: "Yadav",
  displayName: "Daksh Yadav",
  username: "dakshydv_",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
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
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- I build Web Applications that actually work
- Skilled in **Next.js**, **React**, **TypeScript**, **Golang**, **tRPC**, and modern full-stack technologies, building production-ready solutions for difference domains.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
`,
  avatar: "images/profile.jpeg",
  ogImage:
    // "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1763205174",
    "/images/preview-card-dark.png",
  namePronunciationUrl: "/audio/chanhdai.mp3",
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
