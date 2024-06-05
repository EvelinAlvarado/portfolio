import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { languageList } from "../languages";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(languageList[language]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${language === "en" ? 3000 : 4000}/${language}.json`
        );
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
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
