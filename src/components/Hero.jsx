import { useState, useEffect } from "react";

import img1 from "../assets/home2.jpg";
import img2 from "../assets/home3.jpg";
import img3 from "../assets/home4.jpg";

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "MOVE WITH PASSION",
      subtitle: "Feel Every Beat",
      desc: "Experience the energy of modern dance with stunning choreography and unforgettable performances.",
      img: img1,
      buttons: ["purchase"],
    },
    {
      id: 2,
      title: "DANCE WITHOUT LIMITS",
      subtitle: "Find Your Rhythm",
      desc: "Join a vibrant dance community where movement, creativity, and music inspire every dancer.",
      img: img2,
      buttons: ["signup", "purchase"],
    },
    {
      id: 3,
      title: "KEEP THE VIBE ALIVE",
      subtitle: "Dance All Night",
      desc: "Discover breathtaking dance experiences with immersive performances and modern artistic expression.",
      img: img3,
      buttons: ["purchase"],
    },
  ];

  const PURCHASE_LINK =
    "https://themeforest.net/checkout/114152339/create_account";

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handlePurchase = () => {
    window.open(PURCHASE_LINK, "_blank");
  };

  const handleSignup = () => {
    window.open("/signup", "_blank");
  };

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden">

      {/* BACKGROUND */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-110 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt="dance"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* CONTENT */}
      <div
        key={current}
        className={`relative z-30 h-full flex items-center px-5 sm:px-8 md:px-16 lg:px-24 py-24 ${
          slides[current].id === 3
            ? "justify-center text-center"
            : "justify-start"
        }`}
      >

        {/* SLIDE 2 SPECIAL LAYOUT */}
        {slides[current].id === 2 ? (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-white">

            {/* LEFT */}
            <div className="w-full lg:w-1/2 text-center lg:text-right animate-slideLeft">

              <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 font-light animate-fadeUp">
                {slides[current].subtitle}
              </p>

              <h1 className="font-oswald uppercase text-[28px] sm:text-[38px] md:text-[52px] lg:text-[68px] leading-[1.05] font-extralight tracking-[0.08em] animate-title break-words">
                {slides[current].title}
              </h1>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-slideRight">

              <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[16px] leading-[1.9] max-w-[500px] mx-auto lg:mx-0 mb-8 animate-fadeUp delay-200">
                {slides[current].desc}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fadeUp delay-500">

                {slides[current].buttons.includes("signup") && (
                  <button
                    onClick={handleSignup}
                    className="px-6 sm:px-8 py-3 bg-black text-white uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold hover:bg-white hover:text-[#ffb347] transition-all duration-500"
                  >
                    Sign Up
                  </button>
                )}

                {slides[current].buttons.includes("purchase") && (
                  <button
                    onClick={handlePurchase}
                    className="px-6 sm:px-8 py-3 border border-[#ffb347] bg-[#ffb347] text-black uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold hover:bg-transparent hover:text-[#ffb347] transition-all duration-500"
                  >
                    Purchase
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* NORMAL SLIDES */
          <div
            className={`text-white w-full max-w-4xl ${
              slides[current].id === 3
                ? "mx-auto text-center"
                : "text-center sm:text-left"
            }`}
          >

            {/* SUBTITLE */}
            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 font-light animate-fadeUp">
              {slides[current].subtitle}
            </p>

            {/* TITLE */}
            <h1 className="font-oswald uppercase text-[28px] sm:text-[38px] md:text-[52px] lg:text-[68px] leading-[1.05] font-extralight tracking-[0.08em] mb-6 animate-title break-words">
              {slides[current].title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`text-gray-300 text-[13px] sm:text-[14px] md:text-[16px] leading-[1.9] max-w-[550px] mb-10 animate-fadeUp delay-300 ${
                slides[current].id === 3
                  ? "mx-auto text-center"
                  : "mx-auto sm:mx-0"
              }`}
            >
              {slides[current].desc}
            </p>

            {/* BUTTONS */}
            <div
              className={`flex flex-wrap gap-4 animate-fadeUp delay-500 ${
                slides[current].id === 3
                  ? "justify-center"
                  : "justify-center sm:justify-start"
              }`}
            >

              {slides[current].buttons.includes("purchase") && (
                <button
                  onClick={handlePurchase}
                  className="px-6 sm:px-8 py-3 border border-[#ffb347] bg-[#ffb347] text-black uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold hover:bg-transparent hover:text-[#ffb347] transition-all duration-500"
                >
                  Purchase
                </button>
              )}

              {slides[current].buttons.includes("signup") && (
                <button
                  onClick={handleSignup}
                  className="px-6 sm:px-8 py-3 bg-white text-black uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-semibold hover:bg-[#ffb347] transition-all duration-500"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 text-white text-[38px] sm:text-[50px] hover:text-[#ffb347] transition duration-300"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 text-white text-[38px] sm:text-[50px] hover:text-[#ffb347] transition duration-300"
      >
        ›
      </button>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(60px);
            letter-spacing: 0.2em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.08em;
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s ease forwards;
        }

        .animate-slideLeft {
          animation: slideLeft 1.2s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1.2s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}