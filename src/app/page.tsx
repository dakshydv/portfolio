"use client";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Project } from "@/components/Projects";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";

const Portfolio = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const projects = [
    {
      header: "Project Alpha",
      desc: "A web application for managing tasks and projects efficiently.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAacWOYF0kHE3NPhJsCLmB4ndLmQhxpTBVwzsPauKxB85awW7SbnxdIMVNx04iWVBy_-YrcoZeHi6bnIZ3fxVYHnXb1zCUoywD64Y6XoDLl3xSjXEC3ancxXfLgiXuNlcz7nDYIwIkAtUXA08ptrCDKTsUfrIttUvhthA-xPsjsMhneVgBRDdjSY8D_awHFaqbuAEe8_FAuU5H65k1MgKc3b5ga2xVJhnpBIxsq5EseKvIu6FyDydYiGXN60g_rl4ca1meqxIVfuQI",
    },
    {
      header: "Project Beta",
      desc: "An e-commerce platform with a focus on user experience and accessibility.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnr0PTlyTK5kVtrILAP1UclHT0609l2aDX-OTPCu8WNoICHcejzh9qfnZpECoKTFQveNiYjsXW8RcVvkaweElNeFceqyKWgdgskGFgLQR8q2BTPVile9Prz23QA5lw56g0NxO7-Y0Sx3TDksXPqb7vSHRbCDOpC6bqT3bENQOaD7pwlaJpSvTs0CznQdmAYQCpFSUDgRfPpGgDBBSRMVPfyKF8G_fnb3aMZEsKekcpqnwrHIUyry2JdZth-vpV5KTiWrxXLeFaWk",
    },
    {
      header: "Project Gamma",
      desc: "A mobile app for tracking fitness goals and progress.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTdt6zQmQFBVgL8bKWhV3iA5c7JRPu7uOjiQCv-ny3QA44oZ-q2rlW55IA2KCIMgiOMG-cq8Gh1zUW98lydrpKtxMjK1mRbZPZsyIKKpRylTbrL89GLD_mZeTmzmhPS3OBEFXinjilvCsnVfAgz8lydFUtrsTFwh_esE0cZM_JnNNMgWTFyknhYAC3CqSVLwksb9FeeJnEmlJpHf-eqp5NVXE6fhuKw9dv_-TMFSDLU5iYv2QoUZKLTiyMSN3ks-ig340K5_elA_Y",
    },
  ];

  const skills = [
    "Typescript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TailwindCss",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "REST APIs",
  ];

  return (
    <div
      className={`relative flex min-h-screen flex-col ${
        isDarkTheme ? "bg-[#111418] text-white " : "bg-white text-black"
      } font-['Manrope','Noto_Sans',sans-serif]`}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header
          isDarkTheme={isDarkTheme}
          toggleTheme={() => setIsDarkTheme(!isDarkTheme)}
        />

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center  bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage: 'url("/profile.jpeg")',
                    }}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <p className=" text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Daksh Yadav
                    </p>
                    <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
                      Full Stack Developer
                    </p>
                    <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
                      I&#39;m a software engineer specializing in building
                      exceptional digital experiences. Currently, I&#39;m
                      focused on developing accessible, human-centered products
                      at a tech startup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <h2
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}
            >
              Featured Projects
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  isDarkTheme={isDarkTheme}
                  header={project.header}
                  desc={project.desc}
                  image={project.image}
                />
              ))}
            </div>

            {/* Experience */}
            <h2 className={`${isDarkTheme ? 'text-white' : 'text-black'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Experience
            </h2>
            <Experience isDarkTheme={isDarkTheme} />

            {/* Skills */}
            <h2
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5`}
            >
              Skills
            </h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl  pl-4 pr-4 ${
                    isDarkTheme
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-slate-100 hover:bg-slate-200"
                  } transition-colors`}
                >
                  <p
                    className={`${
                      isDarkTheme ? "text-white" : "text-black"
                    } text-sm font-medium leading-normal`}
                  >
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <h2
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}
            >
              Contact
            </h2>
            <p
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } text-base font-normal leading-normal pb-3 pt-1 px-4`}
            >
              I&#39;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="flex p-4 gap-4">
              <a href="?">
                <Github color={isDarkTheme ? "white" : "black"} />
              </a>
              <a href="?">
                <Linkedin color={isDarkTheme ? "white" : "black"} />
              </a>
              <a href="?">
                <Twitter color={isDarkTheme ? "white" : "black"} />
              </a>
              <a href="?">
                <Mail color={isDarkTheme ? "white" : "black"} />
              </a>
            </div>
            {/* form */}
            <div className="flex flex-col items-center">
              <div className="flex max-w-[480px] md:min-w-[400px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border ${
                      isDarkTheme
                        ? "text-white border-[#3f4750] bg-[#1d2125] placeholder:text-[#a1abb5] focus:border-[#3f4750]"
                        : "text-[#111827] border-[#d1d5db] bg-[#f9fafb] focus:border-[#3b82f6] placeholder:text-[#6b7280]"
                    }  h-14  p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] md:min-w-[400px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border ${
                      isDarkTheme
                        ? "text-white border-[#3f4750] bg-[#1d2125] placeholder:text-[#a1abb5] focus:border-[#3f4750]"
                        : "text-[#111827] border-[#d1d5db] bg-[#f9fafb] focus:border-[#3b82f6] placeholder:text-[#6b7280]"
                    }  h-14  p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] md:min-w-[400px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="subject"
                    placeholder="Subject"
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border ${
                      isDarkTheme
                        ? "text-white border-[#3f4750] bg-[#1d2125] placeholder:text-[#a1abb5] focus:border-[#3f4750]"
                        : "text-[#111827] border-[#d1d5db] bg-[#f9fafb] focus:border-[#3b82f6] placeholder:text-[#6b7280]"
                    }  h-14  p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] md:min-w-[400px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border ${
                      isDarkTheme
                        ? "text-white border-[#3f4750] bg-[#1d2125] placeholder:text-[#a1abb5] focus:border-[#3f4750]"
                        : "text-[#111827] border-[#d1d5db] bg-[#f9fafb] focus:border-[#3b82f6] placeholder:text-[#6b7280]"
                    }  min-h-36 p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>

              <div className="flex px-4 py-3 justify-start">
                <button
                  type="button"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d2e2f3] text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
