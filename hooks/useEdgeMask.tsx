import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";

/* ---------- 1.  click-and-drag / touch-drag helper --------------------- */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startScrollLeft = 0;

    const down = (e: PointerEvent) => {
      if (e.button !== 0) return; // left button only
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;

      el.classList.add("cursor-grabbing");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
    };
    const move = (e: PointerEvent) => {
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };
    const up = (e: PointerEvent) => {
      el.releasePointerCapture(e.pointerId);
      el.classList.remove("cursor-grabbing");
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
    };

    el.addEventListener("pointerdown", down);
    return () => el.removeEventListener("pointerdown", down);
  }, []);

  return ref;
}

/* ---------- 2.  fade-mask logic (edge & overflow awareness) ------------ */
export function useEdgeMask(ref: RefObject<HTMLElement>) {
  const [state, setState] = useState({
    hasOverflow: false,
    atStart: true,
    atEnd: true,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const calc = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth + 1; // +1 = rounding wiggle
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      setState({ hasOverflow, atStart, atEnd });
    };

    // Respond to both scroll *and* element resize
    el.addEventListener("scroll", calc);
    calc(); // run once now

    const ro = new ResizeObserver(calc);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", calc);
      ro.disconnect();
    };
  }, [ref]);

  return state; // { hasOverflow, atStart, atEnd }
}

/* ---------- 3.  The responsive wrapper itself ------------------------- */
export default function ResponsiveTable({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const dragRef = useDragScroll<HTMLDivElement>();
  const { hasOverflow, atStart, atEnd } = useEdgeMask(dragRef);

  return (
    /* OUTER frame never scrolls; masks stick here */
    <div className="relative w-full">
      {/* INNER scrollable container  */}
      <div
        ref={dragRef}
        className="
          overflow-x-auto overflow-y-hidden
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400
          cursor-grab select-none
          /* optional: disable horiz. scroll ≥640 px if you like */
          /* sm:overflow-x-visible */
        "
      >
        {/* Ensures the table keeps its natural width */}
        <div className="min-w-max">{children}</div>
      </div>

      {/* LEFT gradient — only if overflow AND not atStart */}
      {hasOverflow && !atStart && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-6
                     bg-gradient-to-r from-white/90 dark:from-slate-900/90"
        />
      )}

      {/* RIGHT gradient — only if overflow AND not atEnd */}
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
