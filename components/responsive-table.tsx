import { useEdgeMask } from "hooks/useEdgeMask";
import React, { useEffect, useRef, PropsWithChildren } from "react";

/**
 * Hook that lets users click-and-drag (mouse) or flick (touch) to scroll a
 * container horizontally.  Returns a ref to attach to the scrollable element.
 */
function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      // Left mouse button only
      if (e.button !== 0) return;

      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;

      el.classList.add("cursor-grabbing");
      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e: PointerEvent) => {
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };

    const onPointerUp = (e: PointerEvent) => {
      el.releasePointerCapture(e.pointerId);
      el.classList.remove("cursor-grabbing");
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
    };

    el.addEventListener("pointerdown", onPointerDown);
    return () => el.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return ref;
}

/**
 * ResponsiveTable
 * Wrap any <table> so it gains horizontal scroll on small screens
 * (tap-to-scroll on mobile, click-and-drag on desktop).
 */
export default function ResponsiveTable({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const scrollRef = useDragScroll<HTMLDivElement>();
  const { hasOverflow, atStart, atEnd } = useEdgeMask(scrollRef);
  return (
    /* Outer frame never scrolls; masks stick here */
    <div className="relative w-full mb-[2rem]">
      {/* Inner container scrolls horizontally */}
      <div
        ref={scrollRef}
        className="
          overflow-x-auto overflow-y-hidden
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400
          cursor-grab select-none
        "
      >
        {/* Keeps natural width so overflow can kick in */}
        <div className="min-w-max">{children}</div>
      </div>

      {/* Left gradient mask */}
      {hasOverflow && !atStart && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-6
                     bg-gradient-to-r from-white/90 dark:from-slate-900/90"
        />
      )}

      {/* Right gradient mask */}
      {hasOverflow && !atEnd && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-6
                     bg-gradient-to-l from-white/90 dark:from-slate-900/90"
        />
      )}
    </div>
  );
}
