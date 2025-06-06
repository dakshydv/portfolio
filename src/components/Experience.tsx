import { BriefcaseBusiness } from "lucide-react";

interface ExperienceProps {
    isDarkTheme: boolean
}

export function Experience({isDarkTheme}: ExperienceProps) {
    return <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className={isDarkTheme ? 'text-white' : 'text-black'}>
                  <BriefcaseBusiness />
                </div>
                <div className={`w-[1.5px] ${isDarkTheme ? 'bg-[#3b4754]' : 'bg-gray-300'} h-2 grow`}></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className={`${isDarkTheme ? 'text-white' : 'text-black'} text-base font-medium leading-normal`}>
                  Full Stack Developer at Midnight Customs
                </p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">
                  2024 - 2025
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className={`w-[1.5px] ${isDarkTheme ? 'bg-[#3b4754]' : 'bg-gray-300'} h-2 `}></div>
                <div className={isDarkTheme ? 'text-white' : 'text-black'}>
                  <BriefcaseBusiness />
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className={`${isDarkTheme ? 'text-white' : 'text-black'} text-base font-medium leading-normal`}>
                  Freelance Full Stack Developer
                </p>
                <p className="text-[#9cabba] text-base font-normal leading-normal">
                  Dec 2024 - Present
                </p>
              </div>
            </div>
}