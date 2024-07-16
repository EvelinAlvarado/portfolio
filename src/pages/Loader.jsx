import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "../context";

export const Loader = () => {
  const { isDarkMode } = useTheme();

  const lightBackground =
    "radial-gradient(circle closest-side, #ECE7E1 94%, transparent) right/calc(200% - 1em) 100%";
  const darkBackground =
    "radial-gradient(circle closest-side, #1A1818 94%, transparent) right/calc(200% - 1em) 100%";
  const lightTextBackground =
    "radial-gradient(circle closest-side, #1A1818 94%, #ECE7E1)";
  const darkTextBackground =
    "radial-gradient(circle closest-side, #ECE7E1 94%, #1A1818)";

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="text-3xl font-CormorantGaramond font-medium tracking-[1px] animate-l24 inline-flex"
        style={{
          background: isDarkMode ? lightBackground : darkBackground,
        }}
      >
        <div
          className="text-transparent bg-clip-text loader-text"
          style={{
            backgroundImage: isDarkMode
              ? lightTextBackground
              : darkTextBackground,
          }}
        >
          {/* Loading... */}
          <span>&lt;</span>
          <span>Loading...</span>
          <span>/&gt;</span>
        </div>
      </div>
    </div>
  );
};
