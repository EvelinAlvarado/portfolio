import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return !matchDark;
  });

  useEffect(() => {
    isDarkMode
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
