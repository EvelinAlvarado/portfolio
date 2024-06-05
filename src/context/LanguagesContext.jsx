import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { languageList } from "../languages/index.js";

export const LanguagesContext = createContext();

export const LanguagesProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(languageList[language]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(`src/languages/${language}.json`);
        console.log(response.data);
        setTranslations(response.data);
      } catch (error) {
        console.error("Error fetching language data: ", error);
      }
    };
    fetchTranslations();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const data = {
    language,
    translations,
    toggleLanguage,
  };
  return (
    <LanguagesContext.Provider value={data}>
      {children}
    </LanguagesContext.Provider>
  );
};
