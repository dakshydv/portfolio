export const ProjectTags = ({ skill }: { skill: string }) => {
  return (
    <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 px-1 py-0 text-[10px]">
        {skill}
    </div>
  );
};
