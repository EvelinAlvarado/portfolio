import { useState } from "react";
import { useLanguage } from "../context/index.js";
import { EmailModal } from "../components/EmailModal/EmailModal.jsx";

export const Contacts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { translations } = useLanguage();
  return (
    <>
      {modalIsOpen ? <EmailModal setModalIsOpen={setModalIsOpen} /> : <></>}
      <div className="mx-[10%]">
        <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight mb-3 titleAnimate 2xl:text-[250px]">
          {translations.contact.title}
        </h1>
        <div className="relative top-1 overflow-auto max-h-[calc(100vh-13rem)]">
          <p className="text-[12px] w-full leading-6 tracking-[1px] sm:text-[13px]">
            {translations.contact.description}
          </p>

          <button
            onClick={() => setModalIsOpen(true)}
            className="text-[16px] tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] transition-all duration-300 my-7 shadow-md sm:text-[18px]"
          >
            {translations.contact.button}
          </button>
          <p className="text-[12px] w-full leading-6 tracking-[1px] sm:text-[13px]">
            {translations.contact.text}
            <a
              className="underline hover:none hover:line-through"
              href="https://www.linkedin.com/in/evelinalvarado/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              className="underline hover:none hover:line-through"
              href="https://github.com/EvelinAlvarado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
