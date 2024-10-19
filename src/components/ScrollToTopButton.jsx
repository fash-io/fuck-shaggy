import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`hidden fixed bottom-10 right-9  p-3 border-2 border-[#c5ffde] text-[#c5ffde] bg-[#42c77c]/10 opacity-30 duration-300 hover:bg-[#42c77c]/40 hover:opacity-100 ${
        isAtTop ? "sm:hidden" : "sm:block"
      }`}
      onClick={scrollToTop}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
