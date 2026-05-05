import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            w-10 h-10 sm:w-12 sm:h-12 
            flex items-center justify-center 
            z-50 
            transition transform hover:scale-110
          "
        >
          {/* DEFAULT TRIANGLE */}
          {!clicked ? (
            <div className="
              w-0 h-0 
              border-l-[12px] border-r-[12px] border-b-[20px] 
              sm:border-l-[16px] sm:border-r-[16px] sm:border-b-[28px]
              border-l-transparent border-r-transparent 
              border-b-[#19c2a0]
            " />
          ) : (
            /* CLICKED STYLE */
            <div className="
              relative w-0 h-0 
              border-l-[12px] border-r-[12px] border-b-[20px]
              sm:border-l-[16px] sm:border-r-[16px] sm:border-b-[28px]
              border-l-transparent border-r-transparent 
              border-b-[#19c2a0]
            ">
              <div className="
                absolute 
                left-[-6px] top-[5px] 
                sm:left-[-8px] sm:top-[6px]
                w-0 h-0 
                border-l-[6px] border-r-[6px] border-b-[10px]
                sm:border-l-[8px] sm:border-r-[8px] sm:border-b-[14px]
                border-l-transparent border-r-transparent 
                border-b-white
              "></div>
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;