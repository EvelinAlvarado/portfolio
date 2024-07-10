import { GoArrowRight } from "react-icons/go";

export const CardProject = ({ project }) => {
  return (
    <div className="bg-beigeCard rounded-2xl p-4 mb-8 w-full">
      <div className="w-full">
        <img
          className="rounded-t-xl w-full h-auto object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div>
        <h2 className="text-3xl font-CormorantGaramond font-medium tracking-tight mb-5 mt-5">
          {project.title}
        </h2>
        <h3 className="text-lg font-CormorantGaramond font-medium tracking-tight mb-5">
          {`Tech: ${project.tech}`}
        </h3>
        <p className="text-xs leading-6 tracking-[1px] mb-5">
          {project.description}
        </p>
      </div>
      <div className="flex justify-around">
        <p className="flex items-center text-base tracking-[1px] font-CormorantGaramond underline hover:none hover:line-through">
          <a
            href={project.github}
            className="mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <GoArrowRight />
        </p>
        <p className="flex items-center text-base tracking-[1px] font-CormorantGaramond underline hover:none hover:line-through">
          <a
            href={project.live_project}
            className="mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live project
          </a>
          <GoArrowRight />
        </p>
      </div>
    </div>
  );
};
