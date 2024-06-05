import { useContext } from "react";
import { LanguagesContext } from "./LanguagesContext.jsx";

export const useLanguage = () => useContext(LanguagesContext);
