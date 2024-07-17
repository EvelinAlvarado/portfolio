import { Link } from "react-router-dom";
import { useLanguage } from "../context/index.js";

export const Home = () => {
  const { translations } = useLanguage();
  return (
    <section className="flex flex-col justify-center h-full xl:flex-row lg:grid lg:grid-cols-3 lg:gap-12 lg:ml-12 lg:items-end overflow-hidden">
      <main className="px-[10%] lg:px-0 lg:flex lg:flex-col lg:text-end lg:mb-6">
        <h1 className="text-[14px] tracking-[2px] uppercase font-medium mb-3 titleAnimate sm:text-[15px]">
          {translations.home.title}
        </h1>
        <h2 className="text-[12px] w-full mb-5 tracking-[1px] leading-6 sm:text-[13px]">
          {translations.home.subtitle}
        </h2>
        <p className="text-[12px] w-full leading-6 tracking-[1px] sm:text-[13px]">
          {translations.home.description}
        </p>
      </main>
      <nav className="mx-[10%] mt-20 mb-8 md:mb-0 lg:mx-0 lg:col-span-2 lg:mt-0 lg:flex lg:flex-col ">
        <ul className="leading-none lg:leading-[1.2] 2xl:leading-none">
          <li>
            <Link
              to="/about"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase  hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3 md:text-[10vw] lg:text-[12vw] 2xl:text-[190px]"
            >
              {translations.home.about}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out mb-3 md:text-[10vw] lg:text-[12vw] 2xl:text-[190px]"
            >
              {translations.home.projects}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[14vw] font-CormorantGaramond italic font-medium tracking-tight uppercase hover:tracking-wide hover:ml-4 cursor-pointer transition-all duration-300 ease-in-out md:text-[10vw] lg:text-[12vw] 2xl:text-[190px]"
            >
              {translations.home.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
