import React, { useState, useEffect, useRef, useCallback } from "react";

const ComparisonSlider = ({ topImage, bottomImage }) => {
  const [isResizing, setIsResizing] = useState(false);
  const topImageRef = useRef(null);
  const handleRef = useRef(null);
  const containerRef = useRef(null);

  // Function to set the position of the slider
  const setPositioning = useCallback((x) => {
    if (!topImageRef.current || !handleRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    if (x >= left && x <= left + width - handleWidth) {
      const percentage = ((x - left) / width) * 100;
      handleRef.current.style.left = `${percentage}%`;
      topImageRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
  }, []);

  // Handle mouse and touch move events
  const handleMove = useCallback(
    (e) => {
      if (!isResizing) return;

      let clientX;
      if (e.type === "mousemove") {
        clientX = e.clientX;
      } else if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }

      if (clientX !== undefined) {
        setPositioning(clientX);
      }
    },
    [isResizing, setPositioning]
  );

  // Handle end of resizing
  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("mouseup", handleResizeEnd);
    window.removeEventListener("touchend", handleResizeEnd);
  }, [handleMove]);

  // Handle keydown events for accessibility
  const onKeyDown = useCallback((e) => {
    if (!handleRef.current || !topImageRef.current) return;

    const handleElement = handleRef.current;
    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleElement.offsetWidth;
    const currentLeft = parseFloat(handleElement.style.left) || 50; // Default to 50%

    let newLeft = currentLeft;

    if (e.key === "ArrowLeft") {
      newLeft = Math.max(currentLeft - 5, 0);
    }

    if (e.key === "ArrowRight") {
      newLeft = Math.min(currentLeft + 5, 100);
    }

    handleElement.style.left = `${newLeft}%`;
    topImageRef.current.style.clipPath = `inset(0 ${100 - newLeft}% 0 0)`;
  }, []);

  // Initialize slider position to the center after images load
  useEffect(() => {
    const handleImageLoad = () => {
      if (!topImageRef.current || !handleRef.current) return;

      const { left, width } = topImageRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      // Center the slider
      const initialX = left + width / 2 - handleWidth / 2;
      setPositioning(initialX);
    };

    const topImg = topImageRef.current?.querySelector("img");
    const bottomImg = topImageRef.current?.nextSibling?.querySelector("img");

    if (topImg && bottomImg) {
      let imagesLoaded = 0;

      const onLoad = () => {
        imagesLoaded += 1;
        if (imagesLoaded === 2) {
          handleImageLoad();
        }
      };

      topImg.addEventListener("load", onLoad);
      bottomImg.addEventListener("load", onLoad);

      // In case images are already cached
      if (topImg.complete) onLoad();
      if (bottomImg.complete) onLoad();

      return () => {
        if (topImg) topImg.removeEventListener("load", onLoad);
        if (bottomImg) bottomImg.removeEventListener("load", onLoad);
      };
    }
  }, [setPositioning]);

  // Attach event listeners when resizing starts
  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
    };
  }, [isResizing, handleMove, handleResizeEnd]);

  // Attach keydown listener for accessibility
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className="comparison-slider" ref={containerRef}>
      <div
        ref={handleRef}
        className="handle"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
        tabIndex={0} // Make handle focusable for accessibility
        aria-label="Comparison Slider Handle"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={parseFloat(handleRef.current?.style.left) || 50}
      >
        {/* Handle Icon */}
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
  );
};

export default ComparisonSlider;
