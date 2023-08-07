import React, { useState, useEffect, useRef, useCallback } from "react";

const ComparisonSlider = ({
  topImage,
  bottomImage,
}: {
  topImage: any;
  bottomImage: any;
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const topImageRef = useRef<any>(null);
  const handleRef = useRef<any>(null);

  const setPositioning = useCallback((x: number) => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    if (x >= left && x <= width + left - handleWidth) {
      handleRef.current.style.left = `${((x - left) / width) * 100}%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - ((x - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e: any) => {
      if (e.clientX) {
        setPositioning(e.clientX);
      } else if (e.touches[0] && e.touches[0].clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning]
  );

  // Set initial positioning on component mount
  useEffect(() => {
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    setPositioning(width / 2 + left - handleWidth / 2);
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);

    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("touchmove", handleResize);
    window.removeEventListener("mouseup", handleResizeEnd);
    window.removeEventListener("touchend", handleResizeEnd);
  }, [handleResize]);

  const onKeyDown = useCallback(
    (e: any) => {
      const { offsetLeft, offsetParent } = handleRef.current;

      if (e.code === "ArrowLeft") {
        setPositioning(offsetLeft + offsetParent.offsetLeft - 10);
      }

      if (e.code === "ArrowRight") {
        setPositioning(offsetLeft + offsetParent.offsetLeft + 10);
      }
    },
    [setPositioning]
  );

  // Add keydown event on mount
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
      window.removeEventListener("keyup", onKeyDown);
    };
  }, [isResizing, handleResize, handleResizeEnd, onKeyDown]);

  return (
    <div>
      <div className="comparison-slider">
        <div
          ref={handleRef}
          className="handle"
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z"
              fill="black"
            />
          </svg>
        </div>
        <div ref={topImageRef} className="comparison-item top">
          <img draggable="false" src={topImage.src} alt={topImage.alt} />
        </div>
        <div className="comparison-item">
          <img draggable="false" src={bottomImage.src} alt={bottomImage.alt} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
