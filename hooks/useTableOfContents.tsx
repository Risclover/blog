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
    const headings = Array.from(document.querySelectorAll("h2, h3"));

    // Map the headings to the format needed for fileContent, filtering out "Quick Facts" or any unwanted titles
    const dynamicContent = headings
      .map((heading, index) => {
        const element = heading as HTMLElement;
        const title = element.innerText;

        // Exclude headings with "Quick Facts" title or any other title you want to filter out
        if (title === "Quick Facts") {
          return null;
        }

        return {
          id: `heading-${index + 1}`,
          slug: element.id || `heading-${index + 1}`,
          title,
          level: element.tagName === "H2" ? 2 : 3,
        };
      })
      .filter((heading): heading is Heading => heading !== null); // Remove null entries

    // Update state with the dynamically generated fileContent
    setFileContent(dynamicContent);
  }, []);

  return fileContent;
}

export default useTableOfContents;
