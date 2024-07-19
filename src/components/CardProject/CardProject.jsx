import { GoArrowRight } from "react-icons/go";

export const CardProject = ({ project, index }) => {
  const cardIsEven = index % 2 === 0;
  // console.log(`Card´s index is ${index} it´s ${cardIsEven}`);
  return (
    /* [sm:last-child]:border-none" */
    <div
      className={`${
        cardIsEven ? "bg-beigeCard text-dark" : "bg-darkCard text-beige"
      } rounded-2xl p-4 mb-8 w-full lg:grid lg:grid-cols-3 lg:gap-4 sm:last:mb-0`}
    >
      <div className={`w-full ${cardIsEven && "lg:order-last"}`}>
        <img
          className="rounded-t-xl w-full h-auto object-cover lg:rounded-xl"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="lg:col-span-2">
        <div>
          <h2 className="text-[30px] font-CormorantGaramond font-medium tracking-tight mb-5 mt-5 sm:text-[32px] lg:mt-0">
            {project.title}
          </h2>
          <h3 className="text-[18px] font-CormorantGaramond font-medium tracking-tight mb-5">
            {`Tech: ${project.tech}`}
          </h3>
          <p className="text-[12px] leading-6 tracking-[1px] mb-5 lg:text-[10px] xl:text-[12px]">
            {project.description}
          </p>
        </div>
        <div className="flex justify-around">
          <p className="flex items-center text-[16px] tracking-[1px] font-CormorantGaramond underline hover:none hover:line-through ">
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
          <p className="flex items-center text-[16px] tracking-[1px] font-CormorantGaramond underline hover:none hover:line-through">
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
    </div>
  );
};
