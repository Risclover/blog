interface Heading {
  id?: string; // not strictly necessary, but let's keep it for reference
  slug: string;
  title: string;
  level: number;
  children?: Heading[]; // only relevant for level-3 headings that have level-4 children
}

// This function organizes the headings so that each level-3 heading has an array of level-4 children.
export function buildHierarchy(headings: Heading[]): Heading[] {
  const result: Heading[] = [];
  let lastLevel3Heading: Heading | null = null;

  for (const heading of headings) {
    // We only care about headings 2 through 4 for the table of contents.
    if (heading.level === 2) {
      // top-level in the ToC
      result.push({ ...heading, children: [] });
      lastLevel3Heading = null;
    } else if (heading.level === 3) {
      // This belongs as a sub-item under the last level-2 heading
      // So we find the last item in `result` and push it into its `children`.
      const lastLevel2 = result[result.length - 1];
      if (lastLevel2) {
        lastLevel2.children?.push({ ...heading, children: [] });
        lastLevel3Heading =
          lastLevel2.children?.[lastLevel2.children?.length - 1] || null;
      }
    } else if (heading.level === 4) {
      // Belongs under the last level-3 heading
      if (lastLevel3Heading) {
        lastLevel3Heading.children?.push({ ...heading });
      }
    }
  }
  return result;
}
                                                                                                                                                                                                                                                                        