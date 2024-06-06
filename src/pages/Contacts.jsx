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
        <h1 className="text-[16vw] font-CormorantGaramond font-medium tracking-tight hover:text-[17vw] hover:tracking-wide mb-3">
          {translations.contact.title}
        </h1>
        <div>
          <p className="text-xs w-full leading-6 tracking-[1px]">
            {translations.contact.description}
          </p>

          <button
            onClick={() => setModalIsOpen(true)}
            className="text-base tracking-[1px] font-CormorantGaramond bg-dark text-beige dark:bg-beige dark:text-dark py-2 px-4 rounded-full hover:px-[30px] my-7"
          >
            {translations.contact.button}
          </button>
          <p className="text-xs w-full leading-6 tracking-[1px]">
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
