import { useEffect, useState } from "react";

export const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchDark.matches);
    const handler = (e) => setIsDarkMode(e.matches);
    matchDark.addEventListener("change", handler);
    return () => matchDark.removeEventListener("change", handler);
  }, []);

  const lightBackground =
    "radial-gradient(circle closest-side, #1A1818 94%, transparent) right/calc(200% - 1em) 100%";
  const darkBackground =
    "radial-gradient(circle closest-side, #ECE7E1 94%, transparent) right/calc(200% - 1em) 100%";
  const lightTextBackground =
    "radial-gradient(circle closest-side, #ECE7E1 94%, #1A1818)";
  const darkTextBackground =
    "radial-gradient(circle closest-side, #1A1818 94%, #ECE7E1)";

  return (
    <div
      className="font-bold font-mono text-[30px] animate-l24 w-screen h-screen flex items-center justify-center"
      style={{
        background: isDarkMode ? darkBackground : lightBackground,
      }}
    >
      <div
        className="leading-[1em] text-transparent bg-clip-text loader-text"
        style={{
          backgroundImage: isDarkMode
            ? darkTextBackground
            : lightTextBackground,
        }}
      >
        Loading...
      </div>
    </div>
  );
};
