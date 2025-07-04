// BackToTopButton.tsx
export default function BackToTopButton() {
  return (
    <button
      className="mt-6 group inline-flex items-center gap-1 text-sm absolute -bottom-0.5"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to Top
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        className="arrow h-[1rem] w-[1rem]"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M224,120H176v88a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V120H32l96-96Z"
          opacity="0.2"
        />
        <path d="M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v80a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v88H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Z" />
      </svg>
      <style jsx>{`
        /* basketball-style: big hop, medium hop, tiny hop */
        @keyframes arrow-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-6px);
          }
          35% {
            transform: translateY(0);
          }
          55% {
            transform: translateY(-4px);
          }
          70% {
            transform: translateY(0);
          }
          85% {
            transform: translateY(-2px);
          }
        }

        .group:hover .arrow,
        .group:focus-visible .arrow {
          animation: arrow-bounce 0.8s cubic-bezier(0.33, 0.85, 0.45, 1) 1;
        }
      `}</style>
    </button>
  );
}
