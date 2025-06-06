import { Header } from "@/components/Header";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Portfolio = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111418] text-white font-['Manrope','Noto_Sans',sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <Header />

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
                    <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Daksh Yadav
                    </p>
                    <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
                      Full Stack Developer
                    </p>
                    <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
                      I'm a software engineer specializing in building
                      exceptional digital experiences. Currently, I'm focused on
                      developing accessible, human-centered products at a tech
                      startup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Projects
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3 group">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-transform group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAacWOYF0kHE3NPhJsCLmB4ndLmQhxpTBVwzsPauKxB85awW7SbnxdIMVNx04iWVBy_-YrcoZeHi6bnIZ3fxVYHnXb1zCUoywD64Y6XoDLl3xSjXEC3ancxXfLgiXuNlcz7nDYIwIkAtUXA08ptrCDKTsUfrIttUvhthA-xPsjsMhneVgBRDdjSY8D_awHFaqbuAEe8_FAuU5H65k1MgKc3b5ga2xVJhnpBIxsq5EseKvIu6FyDydYiGXN60g_rl4ca1meqxIVfuQI")',
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Project Alpha
                  </p>
                  <p className="text-[#9cabba] text-sm font-normal leading-normal">
                    A web application for managing tasks and projects
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3 group">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-transform group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdnr0PTlyTK5kVtrILAP1UclHT0609l2aDX-OTPCu8WNoICHcejzh9qfnZpECoKTFQveNiYjsXW8RcVvkaweElNeFceqyKWgdgskGFgLQR8q2BTPVile9Prz23QA5lw56g0NxO7-Y0Sx3TDksXPqb7vSHRbCDOpC6bqT3bENQOaD7pwlaJpSvTs0CznQdmAYQCpFSUDgRfPpGgDBBSRMVPfyKF8G_fnb3aMZEsKekcpqnwrHIUyry2JdZth-vpV5KTiWrxXLeFaWk")',
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Project Beta
                  </p>
                  <p className="text-[#9cabba] text-sm font-normal leading-normal">
                    An e-commerce platform with a focus on user experience and
                    accessibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3 group">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-transform group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTdt6zQmQFBVgL8bKWhV3iA5c7JRPu7uOjiQCv-ny3QA44oZ-q2rlW55IA2KCIMgiOMG-cq8Gh1zUW98lydrpKtxMjK1mRbZPZsyIKKpRylTbrL89GLD_mZeTmzmhPS3OBEFXinjilvCsnVfAgz8lydFUtrsTFwh_esE0cZM_JnNNMgWTFyknhYAC3CqSVLwksb9FeeJnEmlJpHf-eqp5NVXE6fhuKw9dv_-TMFSDLU5iYv2QoUZKLTiyMSN3ks-ig340K5_elA_Y")',
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Project Gamma
                  </p>
                  <p className="text-[#9cabba] text-sm font-normal leading-normal">
                    A mobile app for tracking fitness goals and progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Experience
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#3b4754] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  Software Engineer at Tech Innovators Inc.
                </p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">
                  2021 - Present
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#3b4754] h-2"></div>
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#3b4754] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  Frontend Developer at Web Solutions Co.
                </p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">
                  2019 - 2021
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#3b4754] h-2"></div>
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-white text-base font-medium leading-normal">
                  Junior Developer at Code Crafters Ltd.
                </p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">
                  2017 - 2019
                </p>
              </div>
            </div>

            {/* Contact */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contact
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <a className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#2b3036] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div className="text-white">
                    <Github />
                  </div>
                </a>
                <a className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#2b3036] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div className="text-white">
                    <Linkedin />
                  </div>
                </a>
                <a className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#2b3036] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div className="text-white">
                    <Twitter />
                  </div>
                </a>
                <a className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#2b3036] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div className="text-white">
                    <Mail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
