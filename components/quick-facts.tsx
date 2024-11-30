import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type Props = {
  projectInfo: {
    title: string;
    description: string;
    techStack: string;
    features: string[];
    repo: string;
    demo: string;
  };
};

export default function QuickFacts({ projectInfo }: Props) {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleFeatures = () => {
    setShowFeatures(!showFeatures);

    const featuresList = document.querySelector(".quickfacts-list");

    if (featuresList?.classList.contains("open")) {
      featuresList?.classList.remove("open");
    } else {
      featuresList?.classList.add("open");
    }
  };

  return (
    <div className="quickfacts-div w-full max-w-[700px] rounded-[8px] mb-12 font-rubik text-[16px] font-medium text-slate-900 dark:text-gray-50 overflow-hidden dark:bg-slate-700 mx-auto">
      <div className="bg-indigo-200 px-[30px] py-[11px] dark:bg-slate-800">
        <h3 className="text-2xl font-bold font-rubik leading-0 mt-1">
          Quick Facts
        </h3>
      </div>
      <div className="px-[30px] py-[10px]">
        <ul className="quickfacts break-normal mb-0">
          <li>
            <strong>Project title:</strong> {projectInfo.title}
          </li>
          <li>
            <strong>Description:</strong> {projectInfo.description}
          </li>
          <li>
            <strong>Tech stack:</strong> {projectInfo.techStack}
          </li>
          <li onClick={handleFeatures} className="cursor-pointer w-fit">
            <div className="flex items-center">
              <strong className="flex items-center">
                Features{" "}
                {showFeatures ? (
                  <HiChevronUp className="text-2xl" />
                ) : (
                  <HiChevronDown className="text-2xl" />
                )}
              </strong>{" "}
              <span className="text-sm">(click to toggle)</span>
            </div>

            <div className="quickfacts-list flex flex-wrap">
              <ul className="flex flex-wrap flex-col h-[100%] sm:max-h-[350px] inner-ul">
                {projectInfo.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <strong>Github Repo:</strong>{" "}
            <a
              href={projectInfo.repo}
              target="_blank"
              className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
            >
              Link
            </a>
          </li>
          <li>
            <strong>Live demo:</strong>{" "}
            <a
              href={projectInfo.demo}
              target="_blank"
              className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
            >
              Link
            </a>
          </li>
          <li>
            <strong>Tech docs:</strong>{" "}
            <a
              href={projectInfo.demo}
              target="_blank"
              className="text-indigo-600 dark:text-indigo-300 hover:underline inline"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
