import { useLanguage } from "../context/index.js";
import { CardProject } from "../components/CardProject/CardProject.jsx";
import { BackToTopButton } from "../components/BackToTopButton/BackToTopButton.jsx";

export const Projects = () => {
  const { translations } = useLanguage();

  return (
    <div className="mx-[10%] mb-9 max-h-screen">
      <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate">
        {translations.projects.title}
      </h1>

      <div className="relative top-1 overflow-y-auto max-h-[calc(100vh-13rem)] scrollToTop">
        {translations.projects.card.toReversed().map((project, index) => (
          <CardProject key={project.id} project={project} index={index} />
        ))}
        <BackToTopButton />
      </div>
    </div>
  );
};
