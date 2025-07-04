import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function Accordion({ open, setOpen }: Props) {
  return (
    <div
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="group flex items-center select-none"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* LEFT arm  ↙︎  rotate −45° around 100% 50% */}
        <g
          className={`
              transition-transform duration-200 ease-in-out
              [transform-box:fill-box]
              [transform-origin:100%_50%]
              ${open ? "-rotate-45" : ""}
            `}
        >
          <polyline points="6 8, 10 12" />
        </g>

        {/* RIGHT arm ↘︎  rotate +45° around 0% 50% */}
        <g
          className={`
              transition-transform duration-200 ease-in-out
              [transform-box:fill-box]
              [transform-origin:0%_50%]
              ${open ? "rotate-45" : ""}
            `}
        >
          <polyline points="14 8, 10 12" />
        </g>
      </svg>
    </div>
  );
}
