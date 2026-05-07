import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  // ✅ Page checks
  const isHomePage = location.pathname === "/";

  const isPinkPage =
    location.pathname === "/pole-dance" ||
    location.pathname === "/modern-dance";

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    setClicked(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setClicked(false);
    }, 600);
  };

  return (
    <>
      {showBtn && (
        <button
          onClick={scrollUp}
          className="
            fixed
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            z-50
            transition-transform duration-300
            hover:scale-110
          "
        >
          <div className="relative w-[32px] h-[32px] sm:w-[42px] sm:h-[42px]">

            {/* MAIN TRIANGLE */}
            <div
              className={`
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-0 h-0
                border-l-[16px] border-r-[16px] border-b-[28px]
                sm:border-l-[20px] sm:border-r-[20px] sm:border-b-[36px]
                border-l-transparent border-r-transparent

                ${
                  isHomePage
                    ? "border-b-yellow-400"
                    : isPinkPage
                    ? "border-b-pink-500"
                    : "border-b-[#19c2a0]"
                }
              `}
            />

            {/* WHITE INNER TRIANGLE */}
            {clicked && (
              <div
                className="
                  absolute
                  bottom-[6px]
                  sm:bottom-[8px]
                  left-1/2
                  -translate-x-1/2
                  w-0 h-0
                  border-l-[8px] border-r-[8px] border-b-[14px]
                  sm:border-l-[10px] sm:border-r-[10px] sm:border-b-[18px]
                  border-l-transparent border-r-transparent
                  border-b-white
                "
              />
            )}

          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;