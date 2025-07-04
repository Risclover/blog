import { useEffect, useState } from "react";

function useHighlighted() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Get all heading elements
    const headings = Array.from(
      document.querySelectorAll("h2, h3")
    ) as HTMLElement[];

    function onScroll() {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let currentActiveId = "";
      let minDistance = Infinity;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const headingTop = rect.top;

        // Adjust this threshold to prioritize headings near the top
        const distance = Math.abs(headingTop);

        if (headingTop <= viewportCenter && distance < minDistance) {
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

  useEffect(() => {
    // Handle updates when a link is clicked
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.replace("#", "");

      if (targetId) {
        setActiveId(targetId);
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return { activeId };
}

export default useHighlighted;
