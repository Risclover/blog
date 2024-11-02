import React from "react";
import QuickFacts from "./quick-facts";

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

function projectdetails({ projectInfo }: Props) {
  return (
    <div
      id="about"
      //   ref={headingsRef}
      className="mx-auto max-w-6xl w-full px-6 lg:px-5 py-10 lg:py-20 flex flex-row-reverse justify-between dark:text-gray-50 items-start text-slate-900"
    >
      <div className="max-w-6xl lg:max-w-3xl font-wotfard text-lg w-full lg:pl-6">
        <QuickFacts projectInfo={projectInfo} />
        {/* {children} */}
      </div>
    </div>
  );
}

export default projectdetails;
