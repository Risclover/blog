import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

type Props = {};

function BackToTop({}: Props) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [showBtn]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:hidden block">
      {showBtn && (
        <button
          className="back-to-top bg-pink-500 hover:bg-pink-600 fixed text-4xl rounded-full p-3  text-white"
          onClick={scrollToTop}
        >
          <FiChevronUp />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
