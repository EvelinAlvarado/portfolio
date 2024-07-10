import { useLanguage } from "../context/index.js";
import { CardProject } from "../components/CardProject/CardProject.jsx";

export const Projects = () => {
  const { translations } = useLanguage();
  return (
    <div className="mx-[10%]">
      <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate">
        {translations.projects.title}
      </h1>

      <div>
        {translations.projects.card.toReversed().map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
