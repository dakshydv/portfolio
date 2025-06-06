import { Header } from '@/components/Header';
import React from 'react';

const PortfolioExperience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present"
    },
    {
      title: "Software Engineer Intern",
      company: "Innovatech Solutions",
      period: "Summer 2020"
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2019 - 2021"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Django", 
    "SQL", "HTML", "CSS", "Git", "REST APIs"
  ];

  const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
    </svg>
  );

  const DiamondIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <g clipPath="url(#clip0_6_330)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_330">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111418] text-white" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        <Header />

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-4xl flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-tight text-4xl font-bold leading-tight min-w-72">Experience</p>
            </div>

            {/* Experience Timeline */}
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              {experiences.map((exp, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div className="text-white">
                      <BriefcaseIcon />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 bg-slate-600 h-2 grow"></div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <p className="text-white text-base font-medium leading-normal">{exp.title}</p>
                    <p className="text-slate-400 text-base font-normal leading-normal">{exp.company} | {exp.period}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Skills Section */}
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Skills</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-700 pl-4 pr-4 hover:bg-slate-600 transition-colors">
                  <p className="text-white text-sm font-medium leading-normal">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioExperience;