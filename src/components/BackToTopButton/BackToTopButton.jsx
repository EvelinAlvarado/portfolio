import { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

export const BackToTopButton = ({ containerRef }) => {
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.scrollTop > 100) {
        setIsVisibleButton(true);
      } else {
        setIsVisibleButton(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const scrollUp = () => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisibleButton && (
      <button
        onClick={scrollUp}
        className="fixed bottom-10 right-12 z-50 bg-dark dark:bg-beige dark:text-dark p-1 rounded-full shadow-md text-beige text-lg"
      >
        <IoIosArrowDropupCircle />
      </button>
    )
  );
};
