import { useEffect, useState } from "react";

function useHighlighted() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Get all heading elements
    const headings = Array.from(
      document.querySelectorAll("h2, h3, h4")
    ) as HTMLElement[];

    function onScroll() {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let currentActiveId = "";
      let minDistance = Infinity;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const headingCenter = rect.top + rect.height / 2;
        const distance = viewportCenter - headingCenter;

        if (distance >= 0 && distance < minDistance) {
          minDistance = distance;
          currentActiveId = heading.id;
        }
      });

      if (currentActiveId) {
        setActiveId(currentActiveId);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial check
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { activeId };
}

export default useHighlighted;
