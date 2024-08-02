import { useEffect, useState } from "react";

// Custom hook to detect user scrolling
const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    // Function to handle the scroll event
    const handleScroll = () => {
      // Set isScrolling to true when user scrolls
      setIsScrolling(true);

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to run after 150 milliseconds
      scrollTimeout = setTimeout(() => {
        // Set isScrolling to false when scrolling stops
        setIsScrolling(false);
      }, 150);
    };

    // Add event listener to the window for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener and clear timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return isScrolling;
};

export default useScrolling;
