import { Link } from "react-router-dom";
import { useLanguage } from "../context/index.js";
import { GoDownload } from "react-icons/go";

export const About = () => {
  const { translations } = useLanguage();
  return (
    <div className="mx-[10%]">
      <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate sticky top-0 bg-beige dark:bg-dark">
        {translations.about.title}
      </h1>
      <div className="relative top-1 overflow-auto max-h-[calc(100vh-13rem)]">
        <h2 className="text-3xl font-CormorantGaramond font-medium tracking-tight mb-5">
          {translations.about.subtitle}
        </h2>
        <p className="text-xs leading-6 tracking-[1px] mb-5">
          <span className="font-semibold">{translations.about.span_1}</span>
          {translations.about.description_1}
          <span className="font-semibold">{translations.about.span_2}</span>
          {translations.about.description_2}
        </p>
        <p className="text-xs leading-6 tracking-[1px] mb-5">
          {translations.about.description_3}
          <span className="">
            <strong>{translations.about.span_3}</strong>
          </span>
          {translations.about.description_4}
        </p>
        <p className="text-xs leading-6 tracking-[1px] mb-5">
          {translations.about.description_5}
          <span className="">
            <strong>{translations.about.span_4}</strong>
          </span>
          {translations.about.description_7}
          <a
            href="https://app.aluracursos.com/program/certificate/eca21fb8-09d1-4834-b128-80e5399c0638"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:none hover:line-through"
          >
            <strong>{translations.about.link_1}</strong>
          </a>
          {translations.about.description_8}
          <a
            href="https://app.aluracursos.com/degree/certificate/f45bb092-1e8f-4163-b1d0-eb3d0c6bc3b9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:none hover:line-through"
          >
            <strong>{translations.about.link_2}</strong>
          </a>
          {translations.about.description_9}
        </p>
        <p className="text-xs leading-6 tracking-[1px] mb-7">
          {translations.about.description_10}
        </p>
        <Link to="/contact">
          <button className="text-base tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] transition-all duration-300 shadow-md mb-12">
            Contact me
          </button>
        </Link>
        <h2 className="text-2xl uppercase font-CormorantGaramond font-medium tracking-[4px] mb-5">
          Skills
        </h2>
        <p className="text-xs leading-6 tracking-[1px]">
          HTML / CSS / JavaScript / React / Styled-components / Tailwind CSS /
          React Router DOM / Git / Github / Visual Studio Code
        </p>

        <button className="text-base tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] transition-all duration-300 my-7 shadow-md inline-flex items-center">
          My CV <GoDownload className="ml-1" />
        </button>
      </div>
    </div>
  );
};
