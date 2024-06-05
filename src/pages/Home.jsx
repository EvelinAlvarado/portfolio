import { useLanguage } from "../context/index.js";

export const Home = () => {
  const { translations } = useLanguage();
  return (
    <section className="my-auto">
      <main className="mx-[10%]">
        <h1 className="text-[14px] tracking-[2px] uppercase font-medium mb-0">
          {translations.home.title}
        </h1>
        <h2 className="text-xs w-full mb-5 tracking-[1px] leading-6">
          {translations.home.subtitle}
        </h2>
        <p className="text-xs w-full leading-6 tracking-[1px]">
          {translations.home.description}
        </p>
      </main>
      <nav className="mx-[10%] mt-14">
        <ul className="leading-none">
          <li className="text-[15vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:text-[17vw] hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3">
            {translations.home.about}
          </li>
          <li className="text-[15vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:text-[17vw] hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3">
            {translations.home.projects}
          </li>
          <li className="text-[15vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:text-[17vw] hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out">
            {translations.home.contact}
          </li>
        </ul>
      </nav>
    </section>
  );
};
