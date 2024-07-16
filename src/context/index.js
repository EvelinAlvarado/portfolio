import { useContext } from "react";
import { LanguagesContext } from "./LanguagesContext.jsx";
import { LoaderContext } from "./LoaderContext.jsx";
import { ThemeContext } from "./ThemeContext.jsx";

//Hooks
export const useLanguage = () => useContext(LanguagesContext);
export const useLoader = () => useContext(LoaderContext);
export const useTheme = () => useContext(ThemeContext);
