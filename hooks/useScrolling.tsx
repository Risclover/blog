import { useEffect, useState } from "react";

const useScrolling = (): boolean => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    let scrollTimeout: number | undefined;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return isScrolling;
};

export default useScrolling;
