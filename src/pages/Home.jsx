import { useLanguage } from "../context/index.js";

export const Home = () => {
  const { translations } = useLanguage();
  return (
    <section>
      <main className="mx-[10%]">
        <h1 className="text-[14px] tracking-[2px] uppercase font-medium mb-[14px]">
          {translations.home.title}
        </h1>
        <h2 className="text-xs w-full mb-[14px] tracking-[1px]">
          {translations.home.subtitle}
        </h2>
        <p className="text-xs w-full leading-4 tracking-[1px]">
          {translations.home.description}
        </p>
      </main>
      <nav className="mx-[10%]">
        <ul>
          <li>{translations.home.about}</li>
          <li>{translations.home.projects}</li>
          <li>{translations.home.contact}</li>
        </ul>
      </nav>
    </section>
  );
};
