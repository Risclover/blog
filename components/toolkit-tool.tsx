import React from "react";

type Props = {
  technology: string;
};

const ToolkitTool = ({ technology }: Props) => {
  return (
    <div
      data-aos="flip-right"
      className="mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-slate-700 text-gray-50 dark:bg-slate-700 dark:text-white hover:bg-slate-600 dark:hover:bg-slate-600 w-fit px-3 py-1.5"
    >
      {technology}
    </div>
  );
};

export default ToolkitTool;
