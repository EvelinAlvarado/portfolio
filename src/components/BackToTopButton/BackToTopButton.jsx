import { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

export const BackToTopButton = () => {
  // State to manage the visibility of the button
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  useEffect(() => {
    // Select the container element with the class 'scrollToTop'
    const container = document.querySelector(".scrollToTop");

    // Event listener for the scroll event
    container.addEventListener("scroll", () => {
      // Show the button if the scroll position is greater than 100px
      /* if (container.scrollTop > 100) {
        setIsVisibleButton(true);
      } else {
        setIsVisibleButton(false);
      } */
      setIsVisibleButton(container.scrollTop > 100);
    });
  }, []);

  // Function to scroll back to the top of the container
  const scrollUp = () => {
    const container = document.querySelector(".scrollToTop");
    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // Render the button only if it should be visible
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
