import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  /* const location = useLocation(); */

  useEffect(() => {
    console.log("is loading");
    setLoading(true);

    const handleLoad = () => {
      setLoading(false);
    };

    const timeOut = setTimeout(handleLoad, 2500);
    return () => clearTimeout(timeOut);
  }, []);
  /* location.pathname */ // Extract specific properties
  return (
    <LoaderContext.Provider value={{ loading }}>
      {children}
    </LoaderContext.Provider>
  );
};
