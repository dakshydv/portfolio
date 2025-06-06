interface ProjectsProps {
    header: string,
    desc: string,
    image: string,
    isDarkTheme: boolean
}

export function Project({header, desc, image, isDarkTheme}: ProjectsProps) {
  return (
    <div className="flex flex-col gap-3 pb-3 group">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg transition-transform group-hover:scale-105"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      />
      <div>
        <p className={`${isDarkTheme ? 'text-white': 'text-black'} text-base font-medium leading-normal`}>
          {header}
        </p>
        <p className="text-[#9cabba] text-sm font-normal leading-normal">
            {desc}
        </p>
      </div>
    </div>
  );
}
