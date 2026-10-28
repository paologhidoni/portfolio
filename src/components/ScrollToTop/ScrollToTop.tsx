import React, { useEffect, useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[1100] flex h-11 w-11 items-center justify-center rounded-full border border-secondaryColor/60 bg-canvas text-secondaryColor shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondaryColor hover:text-canvas md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <CgChevronDoubleUp className="h-6 w-6" aria-hidden />
    </button>
  );
};

export default ScrollToTop;
