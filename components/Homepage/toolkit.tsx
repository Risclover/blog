// src/components/Toolkit.js

import React from "react";
import ToolkitTool from "../toolkit-tool"; // Ensure the path is correct

type ToolkitSection = {
  category: string;
  technologies: string[];
};

type Props = {};

const Toolkit: React.FC<Props> = () => {
  const toolkit: ToolkitSection[] = [
    {
      category: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "TailwindCSS",
        "SASS",
        "Bootstrap",
        "jQuery",
        "Jest",
        "Mocha",
        "Testing Library",
        "Playwright",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Flask",
        "Express",
        "SQLAlchemy",
        "Sequelize",
        "Node.js",
      ],
    },
  ];

  return (
    <div className="bg-slate-900 text-gray-50 dark:text-gray-50 w-full py-40">
      <div className="lg:max-w-6xl mx-auto px-6 lg:px-12">
        <h2
          data-aos="fade-right"
          className="text-4xl font-bold leading-8 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-8"
        >
          Toolkit
        </h2>
        {toolkit.map((section) => (
          <div key={section.category}>
            <h3
              data-aos="fade-right"
              className="uppercase text-base font-medium tracking-widest text-pink-500 mt-6"
            >
              {section.category}
            </h3>
            <div className="skills-row flex flex-wrap my-4">
              {section.technologies.map((technology) => (
                <ToolkitTool key={technology} technology={technology} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolkit;
