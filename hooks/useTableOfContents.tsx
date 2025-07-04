import { useEffect, useState } from "react";

type Heading = {
  id: string;
  slug: string;
  title: string;
  level: number;
};

function useTableOfContents() {
  const [fileContent, setFileContent] = useState<Heading[]>([]);

  useEffect(() => {
    // Select all h2 and h3 elements on the page
    const headings = Array.from(document.querySelectorAll("h2, h3, h4"));

    const dynamicContent = headings
      .map((heading, index) => {
        const element = heading as HTMLElement;
        const title = element.innerText;

        if (title === "Quick Facts" || title === "Let's talk!") {
          return null;
        }

        return {
          id: `heading-${index + 1}`,
          slug: element.id || `heading-${index + 1}`,
          title,
          level:
            element.tagName === "H2" ? 2 : element.tagName === "H3" ? 3 : 4,
        };
      })
      .filter((heading): heading is Heading => heading !== null); // Remove null entries

    setFileContent(dynamicContent);
  }, []);

  return fileContent;
}

export default useTableOfContents;
