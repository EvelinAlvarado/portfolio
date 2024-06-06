import { useContext } from "react";
import { LanguagesContext } from "./LanguagesContext.jsx";

//Hooks
export const useLanguage = () => useContext(LanguagesContext);
