import React from "react";

type Props = {};

export function SQLAIcon({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1rem"
      height="rem"
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M12,1C7,1,3,2.34,3,4V6c0,1.66,4,3,9,3s9-1.34,9-3V4C21,2.34,17,1,12,1Z" />
        <path d="M12,11C7,11,3,9.66,3,8v5c0,1.66,4,3,9,3s9-1.34,9-3V8C21,9.66,17,11,12,11Z" />
        <path d="M12,18c-5,0-9-1.34-9-3v5c0,1.66,4,3,9,3s9-1.34,9-3V15C21,16.66,17,18,12,18Z" />
      </g>
    </svg>
  );
}
