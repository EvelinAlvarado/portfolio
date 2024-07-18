import { useLanguage } from "../context/index.js";
import { CardProject } from "../components/CardProject/CardProject.jsx";
import { BackToTopButton } from "../components/BackToTopButton/BackToTopButton.jsx";

export const Projects = () => {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col mx-[10%] overflow-hidden h-full relative">
      <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate sticky top-0 sm:text-[70px] xl:text-[80px]">
        {translations.projects.title}
      </h1>

      <div className="flex-1 overflow-auto mb-4 scrollToTop relative sm:mb-0">
        <div>
          {translations.projects.card.toReversed().map((project, index) => (
            <CardProject key={project.id} project={project} index={index} />
          ))}
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
};
