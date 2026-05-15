import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    }, 500);
  };

  return (
    <>
      {showBtn && (
        <button
          onClick={scrollUp}
          className="
            fixed
            bottom-5 right-5
            sm:bottom-7 sm:right-7
            z-50
            group
          "
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-[#ffb347] blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-full"></div>

          {/* BUTTON */}
          <div
            className={`
              relative
              w-[30px] h-[30px]
              sm:w-[40px] sm:h-[40px]
              rounded-full
              border border-[#ffb347]/30
              bg-[#0b0b0b]/90
              backdrop-blur-md
              flex items-center justify-center
              overflow-hidden
              transition-all duration-500
              group-hover:scale-110
              group-hover:border-[#ffb347]
              ${
                clicked
                  ? "scale-90 rotate-12"
                  : "scale-100 rotate-0"
              }
            `}
          >
            {/* ROTATING BORDER */}
            <div className="absolute inset-0 rounded-full border border-[#ffb347]/20 animate-spinSlow"></div>

            {/* INNER CIRCLE */}
            <div className="absolute w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-br from-[#ffb347] to-orange-500"></div>

            {/* STAR ICON */}
            <Star
              size={22}
              fill="black"
              className={`
                relative z-10
                text-black
                transition duration-300
                ${
                  clicked
                    ? "scale-125 rotate-180"
                    : "scale-100 rotate-0"
                }
              `}
            />
          </div>
        </button>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spinSlow {
          animation: spinSlow 6s linear infinite;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;