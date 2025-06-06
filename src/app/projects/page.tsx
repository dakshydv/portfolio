import { Header } from "@/components/Header";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZodvyD4D1M4HUobBfj59GNPmddATiP0FDUyT8NixIaqQo2-nxV9XQAP8IlzR-LHZlMzw22TkYQtKJ8pZp7_84Clqzm-MRXhh-9cBrc1X6LZjtbE_EXmXSvbrIDN1SDCfaiDhvRobi_WEiUQsRYACcHT9LaiwyluCgKJTNG-XORhfsuliFe32iwfrU62Gn_beZXK0okrk9MTjLQvx1dCmmFFUhNS4vGg_BiaRA3UZ3hSVCY-4x9IAdpksWtTlU2nluIXvn9HCSceY",
    },
    {
      title: "Social Media App",
      description:
        "A social media application with user profiles, posts, comments, and real-time updates.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrNwAIOL7fN92q8XGyVNjOltkAWO6ytcJ8vP9qoXgSqjieCqc0PkmnNpEmXXlwBQHn9qauQDndxwz3BYN-IFLha3WWrgt_qEvlo1ULaHpE_zIXOLUZb8PQuB0Zw0JNa188b90dYOFi5dhLGJJ6XNbwf8T6Ih0RtPdO7KCMh4azMfpUTpMXFehbaxCXJxrgZ_h-N26tZr6uepvJdWdXG2yDa8Z6hJotPQCHl-cvQFYRhQzyN4cgII8ucfnrJ7fYYToDAs03eCuZ_g",
    },
    {
      title: "Task Management System",
      description:
        "A task management system with project organization, task assignment, deadlines, and progress tracking.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAM2hni7-7OmoZmb9ownySX60icctIRf8gLvJ0p3rIE4WRTUkHAuq4hbchk1n0YEnekNrdlvtMTBhbgluvajjY_qQfy8TAWZh7AmjBkf2GimPPInqsfZOVGCMkdD8usyADySZbc_WKUjEZqnECz1RSAfPNd_gmwSZiEi2jOAWJOXlDORr38hXTF_MjKW-82eEOBj6MsrMxf4ToTAiAqQmoDPufUrHwah7PbXo_axyU5WT6ynrmLz1y4ddGr0gyUOKzrJ0ybhID_7nE",
    },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Projects
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A selection of projects showcasing my skills and experience in
                  full-stack development.
                </p>
              </div>
            </div>

            {projects.map((project, index) => (
              <div key={index} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-bold leading-tight">
                        {project.title}
                      </p>
                      <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                        {project.description}
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#2b3036] text-white text-sm font-medium leading-normal w-fit">
                      <span className="truncate">View Project</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
