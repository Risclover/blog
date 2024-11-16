import { useEffect, useState } from "react";

export function useMobileHighlighted(): { activeId: string } {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("h2, h3, h4")
    );

    const offset = 131; // Fixed header and TOC height (72px + 49px)

    function onScroll() {
      let currentActiveId = "";
      let minDistance = Infinity;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (rect.top - offset <= 0 && distance < minDistance) {
          minDistance = distance;
          currentActiveId = heading.id;
        }
      });

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial check
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeId]);

  useEffect(() => {
    // Handle updates when a link is clicked
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.replace("#", "");

      if (targetId) {
        setActiveId(targetId);
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return { activeId };
}
