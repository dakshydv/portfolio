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