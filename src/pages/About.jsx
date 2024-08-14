import { Link } from "react-router-dom";
import { useLanguage } from "../context/index.js";
import { GoDownload } from "react-icons/go";

export const About = () => {
  const { translations } = useLanguage();
  return (
    <div className="flex flex-col mx-[10%] overflow-hidden h-full lg:grid lg:grid-cols-3 lg:gap-12 lg:flex-row">
      <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate sticky top-0 bg-beige dark:bg-dark lg:text-[8vw] 2xl:text-[150px]">
        {translations.about.title}
      </h1>
      <div className="flex-1 overflow-auto mb-4 sm:mb-0 lg:col-span-2 lg:overflow-auto">
        {/* max-h-[calc(100vh-13rem)] */}
        <h2 className="text-[30px] font-CormorantGaramond font-medium tracking-tight mb-5 sm:text-[32px]">
          {translations.about.subtitle}
        </h2>
        <p className="text-[12px] leading-6 tracking-[1px] mb-5 sm:text-[13px]">
          <span className="font-semibold">{translations.about.span_1}</span>
          {translations.about.description_1}
          <span className="font-semibold">{translations.about.span_2}</span>
          {translations.about.description_2}
        </p>
        <p className="text-[12px] leading-6 tracking-[1px] mb-5 sm:text-[13px]">
          {translations.about.description_3}
          <span className="">
            <strong>{translations.about.span_3}</strong>
          </span>
          {translations.about.description_4}
        </p>
        <p className="text-[12px] leading-6 tracking-[1px] mb-5 sm:text-[13px]">
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
        <p className="text-[12px] leading-6 tracking-[1px] mb-7 sm:text-[13px]">
          {translations.about.description_10}
        </p>
        <Link to="/contact">
          <button className="text-[16px] tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] transition-all duration-300 shadow-md mb-12 sm:text-[18px]">
            Contact me
          </button>
        </Link>
        <h2 className="text-[24px] uppercase font-CormorantGaramond font-medium tracking-[4px] mb-5 sm:text-[26px]">
          Skills
        </h2>
        <p className="text-[12px] leading-6 tracking-[1px] sm:text-[13px]">
          HTML / CSS / JavaScript / React JS / Tailwind CSS / Styled-components
          / Material UI / React Router DOM / Git / Github / Visual Studio Code /
          Responsive Web Design / RESTful APIs / Trello / Agile-Scrum
          Methodologies
        </p>
        <Link to="/resume-evelin-alvarado.pdf" target="_blank">
          <button className="text-[16px] tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] transition-all duration-300 my-7 shadow-md inline-flex items-center sm:text-[18px]">
            My CV <GoDownload className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};
