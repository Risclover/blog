import Link from "next/link";
import { useRef } from "react";

type Props = {
  url: string;
  text: string;
};

export function ExternalLinkWiggle({ url, text }: Props) {
  const arrowRef = useRef<SVGPathElement>(null);

  /** Trigger pop–wiggle animation, let it finish even if hover ends early */
  const handleEnter = () => {
    const el = arrowRef.current;
    if (!el) return;

    // Remove any previous instance so re-hover restarts cleanly
    el.classList.remove("animate-arrow-grow-wiggle");

    // Force reflow (trick to let the same class re-apply)
    void el.getBoundingClientRect();

    // Add the animation class
    el.classList.add("animate-arrow-grow-wiggle");

    // Cleanup on animation end so next hover works
    const clean = () => {
      el.classList.remove("animate-arrow-grow-wiggle");
      el.removeEventListener("animationend", clean);
    };
    el.addEventListener("animationend", clean);
  };

  return (
    <Link
      href={url}
      className="group inline-block text-inherit blog-external-link"
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={handleEnter}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.25rem"
        height="1.25rem"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="overflow-visible" /* ensure the pop-out isn’t clipped */
      >
        {/* ─ Box (static) ─ */}
        <path
          className="fill-current"
          d="M3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374
             3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0
             002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226
             5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878
             c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37
             .148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985
             h4.878a1 1 0 000-2H3.009z"
        />

        {/* ─ Arrow (grows & drifts on hover) ─ */}
        <path
          className="
            fill-current
            [transform-box:fill-box] origin-center
            transition-transform duration-200
            group-hover:[transform:translate(2px,-2px)_scale(1.15)]
          "
          d="M17.885 1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0
             101.414 1.414L17 4.299V8a1 1 0 102 0V2a1 1 0 00-1-1z"
        />
      </svg>
    </Link>
  );
}
