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
        // We use `import.meta.env.BASE_URL` to get the project's base URL.
        // This is useful because the base URL can be different depending on whether you are working locally (development) or have deployed your application (production).
        // Then, we concatenate this base URL with the path to the JSON file that contains the language translations.
        const response = await axios.get(
          `${import.meta.env.BASE_URL}src/languages/${language}.json`
        );
        console.log(import.meta.env.BASE_URL);
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
