export function CopyIcon({ className = "", dark = false }) {
  return (
    <span className={`copy-icon ${className}`}>
      <svg
        viewBox="0 0 54 56"
        width="1.6em"
        height="1.6em"
        aria-hidden
        className="overflow-visible"
      >
        {/* back sheet */}
        <rect
          className="sheet sheet--back"
          x="18"
          y="4"
          width="32"
          height="38"
          rx="2"
        />

        {/* front sheet */}
        <rect
          className={`sheet sheet--front ${dark ? "copied" : ""}`}
          x="8"
          y="12"
          width="32"
          height="38"
          rx="2"
        />
      </svg>

      <style jsx>{`
        /* ---------- shared base ---------- */
        .sheet {
          stroke-width: 3;
          transition: fill 0.25s ease-out;
        }

        /* light-mode idle */
        .sheet--back,
        .sheet--front {
          fill: #ffffff;
          stroke: #000000;
        }

        /* light-mode copied */
        .sheet--front.copied {
          fill: #020617; /* front turns black */
        }

        /* dark-mode idle */
        :global(.dark) .sheet--back,
        :global(.dark) .sheet--front {
          stroke: #ffffff;
          fill: #020617; /* deep slate */
        }

        /* dark-mode copied */
        :global(.dark) .sheet--front.copied {
          fill: #ffffff; /* front turns white */
        }

        /* hover bounce (unchanged) */
        .copy-icon:hover .sheet--front {
          animation: bounce 0.5s ease-out forwards;
        }
        .copy-icon:hover .sheet--back {
          animation: bounce 0.5s ease-out forwards 75ms;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(4px);
          }
          70% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </span>
  );
}
