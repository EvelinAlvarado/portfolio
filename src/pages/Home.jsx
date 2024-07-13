import { Link } from "react-router-dom";
import { useLanguage } from "../context/index.js";

export const Home = () => {
  const { translations } = useLanguage();
  return (
    <section className="flex flex-col justify-center h-full">
      <main className="mx-[10%]">
        <h1 className="text-[14px] tracking-[2px] uppercase font-medium mb-3 titleAnimate">
          {translations.home.title}
        </h1>
        <h2 className="text-xs w-full mb-5 tracking-[1px] leading-6">
          {translations.home.subtitle}
        </h2>
        <p className="text-xs w-full leading-6 tracking-[1px]">
          {translations.home.description}
        </p>
      </main>
      <nav className="mx-[10%] mt-20 mb-8">
        <ul className="leading-none">
          <li>
            <Link
              to="/about"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase  hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3"
            >
              {translations.home.about}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3"
            >
              {translations.home.projects}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out"
            >
              {translations.home.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
