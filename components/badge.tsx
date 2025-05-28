import React, { SVGProps } from "react";

type Props = {
  svg: SVGProps<SVGSVGElement>;
  title: string;
  color: string;
  darkColor: string;
  bgColor: string;
  darkBgColor: string;
};

export function Badge({
  svg,
  title,
  color,
  bgColor,
  darkColor,
  darkBgColor,
}: Props) {
  return (
    <div
      className={`min-w-min ${color} ${darkColor} flex items-center rounded-md px-[0.5rem] h-[1.5rem] ${bgColor} ${darkBgColor} bg-opacity-20 dark:bg-opacity-20 text-opacity-1 dark:text-opacity-1 leading-normal`}
    >
      <div className="mr-1.5">{svg}</div>
      <span className={`md:text-[.9rem] text-[.85rem] font-medium`}>
        {title}
      </span>
    </div>
  );
}
