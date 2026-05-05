import { useState, useEffect } from "react";

import img1 from "../assets/pd1.jpg";
import img2 from "../assets/pd2.jpg";
import img3 from "../assets/pd3.jpg";

// 🌟 Neon overlay image
import neonText from "../assets/pd.png";

export default function Hero() {
  const titleClass =
    "font-oswald text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-light uppercase tracking-[0.15em] leading-[1.05]";

  const PURCHASE_LINK =
    "https://themeforest.net/checkout/114152339/create_account";

  const slides = [
    {
      id: 1,
      title: "SHOW OFF YOUR MOVES",
      desc: "Import the full demo content with a single mouse click thanks to the 1-click import feature",
      img: img1,
      buttons: ["purchase"],
    },
    {
      id: 2,
      title: "", // ❗ no text (we use neon image)
      desc: "Vibez is a dazzling modern theme designed specifically for all types of dance studios, dance clubs and enthusiasts. Brimming with astounding features, powerful elements & astonishing templates",
      img: img2,
      overlayImg: neonText, // ✅ IMPORTANT
      buttons: ["purchase"],
    },
    {
      id: 3,
      title: "GRACEFUL PERFORMANCE",
      desc: "Vibez comes with everything you need for your website. Packed with the theme are seven remarkable and fully customizable homepage layouts",
      img: img3,
      buttons: ["signup", "purchase"],
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

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
    <div className="relative h-screen w-full overflow-hidden">

      {/* 🔥 Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none"></div>

      {/* 📦 Content */}
      <div
        key={current}
        className={`relative z-30 h-full flex items-center px-6 md:px-20 ${
          slides[current].id === 3
            ? "justify-center text-center"
            : "justify-start"
        }`}
      >
        {/* 🔥 SLIDE 2 SPECIAL LAYOUT */}
        {slides[current].id === 2 ? (
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 text-white">

            {/* LEFT (Neon Image OR Title) */}
            <div className="md:w-1/2 text-left">
              {slides[current].overlayImg ? (
                <img
                  src={slides[current].overlayImg}
                  alt="neon text"
                  className="w-full max-w-[500px] mix-blend-screen opacity-90 drop-shadow-[0_0_25px_rgba(255,0,150,0.8)] animate-fadeIn"
                />
              ) : (
                <h1 className={titleClass}>
                  {slides[current].title}
                </h1>
              )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-1/2 text-left">
              <p className="text-[16px] md:text-[17px] text-gray-300 mb-10 leading-relaxed max-w-md">
                {slides[current].desc}
              </p>

              <div className="flex gap-4 flex-wrap">
                {slides[current].buttons.includes("signup") && (
                  <button
                    onClick={handleSignup}
                    className="bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Sign Up
                  </button>
                )}

                {slides[current].buttons.includes("purchase") && (
                  <button
                    onClick={handlePurchase}
                    className="bg-pink-500 text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-pink-400 transition duration-300"
                  >
                    Purchase
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* 🔥 NORMAL SLIDES */
          <div className="text-white max-w-3xl text-left">

            <h1 className={titleClass}>
              {slides[current].title}
            </h1>

            <p
              className={`text-[16px] md:text-[17px] text-gray-300 mb-10 leading-relaxed max-w-md ${
                slides[current].id === 3 ? "mx-auto text-center" : ""
              }`}
            >
              {slides[current].desc}
            </p>

            <div
              className={`flex gap-4 flex-wrap ${
                slides[current].id === 3 ? "justify-center" : ""
              }`}
            >
              {slides[current].buttons.includes("purchase") && (
                <button
                  onClick={handlePurchase}
                  className="bg-pink-500 text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-pink-400 transition duration-300"
                >
                  Purchase
                </button>
              )}

              {slides[current].buttons.includes("signup") && (
                <button
                  onClick={handleSignup}
                  className="bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ⬅ LEFT */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-8xl z-40 hover:text-pink-500 transition"
      >
        ‹
      </button>

      {/* ➡ RIGHT */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-8xl z-40 hover:text-pink-500 transition"
      >
        ›
      </button>
    </div>
  );
}  