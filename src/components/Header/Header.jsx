import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useLanguage } from "../../context/index.js";

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangesTheme = () => {
    // Start view transition
    document.startViewTransition(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    });
  };
  return (
    <header className="mx-[10%] my-[5%] flex items-center justify-between text-[10px] font-medium">
      <Link to="/" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          width="40"
          viewBox="0 0 2000 1247"
          className="fill-current"
        >
          <g transform="matrix(1,0,0,1,-1.2121212121212466,0.504858299595071)">
            <svg
              viewBox="0 0 396 247"
              data-background-color="#ece7e1"
              preserveAspectRatio="xMidYMid meet"
              height="1247"
              width="2000"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="tight-bounds"
                transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)"
              >
                <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                  <g>
                    <svg></svg>
                  </g>
                  <g>
                    <svg
                      viewBox="0 0 395.52 247.2"
                      height="247.2"
                      width="395.52"
                    >
                      <g transform="matrix(1,0,0,1,75.54432,57.690157164869035)">
                        <svg
                          viewBox="0 0 244.43135999999998 131.81968567026192"
                          height="131.81968567026192"
                          width="244.43135999999998"
                        >
                          <g>
                            <svg
                              viewBox="0 0 244.43135999999998 131.81968567026192"
                              height="131.81968567026192"
                              width="244.43135999999998"
                            >
                              <g>
                                <svg
                                  viewBox="0 0 244.43135999999998 131.81968567026192"
                                  height="131.81968567026192"
                                  width="244.43135999999998"
                                >
                                  <g>
                                    <svg
                                      viewBox="0 0 244.43135999999998 131.81968567026192"
                                      height="131.81968567026192"
                                      width="244.43135999999998"
                                    >
                                      <g id="textblocktransform">
                                        <svg
                                          viewBox="0 0 244.43135999999998 131.81968567026192"
                                          height="131.81968567026192"
                                          width="244.43135999999998"
                                          id="textblock"
                                        >
                                          <g>
                                            <svg
                                              viewBox="0 0 244.43135999999998 131.81968567026192"
                                              height="131.81968567026192"
                                              width="244.43135999999998"
                                            >
                                              <g transform="matrix(1,0,0,1,0,0)">
                                                <svg
                                                  width="244.43135999999998"
                                                  viewBox="2.6 -35 64.9 35"
                                                  height="131.81968567026192"
                                                  data-palette-color="#1a1818"
                                                >
                                                  <path
                                                    d="M33.45-30.65L13.7-30.65 11.55-19.9 29.15-19.9 28.3-15.65 10.7-15.65 8.45-4.35 28.9-4.35 28.05 0 2.6 0 9.6-35 34.3-35 33.45-30.65ZM62.55 0L60.45-8.75 41.75-8.75 36.2 0 30.8 0 53.7-35 58.65-35 67.5 0 62.55 0ZM44.3-12.75L59.45-12.75 55.3-30 44.3-12.75Z"
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,0,0)"
                                                    fill="currentColor"
                                                    className="wordmark-text-0"
                                                    data-fill-palette-color="primary"
                                                    id="text-0"
                                                  ></path>
                                                </svg>
                                              </g>
                                            </svg>
                                          </g>
                                        </svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                      <g>
                        <path
                          d="M0 123.6c0-68.262 55.338-123.6 123.6-123.6 37.053 0 70.298 16.305 92.952 42.13l-8.065 0c-21.411-22.304-51.528-36.187-84.887-36.186-64.98 0-117.656 52.676-117.656 117.656 0 64.98 52.676 117.656 117.656 117.656 33.359 0 63.475-13.883 84.887-36.186h8.065c-22.654 25.826-55.899 42.13-92.952 42.13-68.262 0-123.6-55.338-123.6-123.6z"
                          fill="currentColor"
                          stroke="transparent"
                          data-fill-palette-color="tertiary"
                        ></path>
                      </g>
                    </svg>
                  </g>
                  <defs></defs>
                </svg>
                <rect
                  width="395.52"
                  height="247.2"
                  fill="none"
                  stroke="none"
                  visibility="hidden"
                ></rect>
              </g>
            </svg>
          </g>
        </svg>
      </Link>
      <ul className="flex gap-3">
        {" "}
        {/* Home- when is in other pages different from home */}
        <li className="uppercase tracking-[4px] cursor-pointer hover:line-through">
          <a
            href="https://www.linkedin.com/in/evelinalvarado/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            li
          </a>
        </li>
        <li className="uppercase tracking-[4px] cursor-pointer hover:line-through">
          <a
            href="https://github.com/EvelinAlvarado"
            target="_blank"
            rel="noopener noreferrer"
          >
            gh
          </a>
        </li>
      </ul>
      <div className="w-10 bg-dark dark:bg-beige h-[2px]"></div>
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleLanguage}
          className="uppercase tracking-[4px] cursor-pointer hover:line-through"
        >
          {language === "en" ? "es" : "en"}
        </button>{" "}
        <button className="cursor-pointer" onClick={handleChangesTheme}>
          {theme === "light" ? (
            <IoSunnyOutline size={18} />
          ) : (
            <IoMoonOutline size={18} />
          )}
        </button>
      </div>
    </header>
  );
};
