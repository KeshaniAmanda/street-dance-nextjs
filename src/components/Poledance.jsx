import { useState, useEffect } from "react";

import img1 from "../assets/pd1.jpg";
import img2 from "../assets/pd2.jpg";
import img3 from "../assets/pd3.jpg";

import neonText from "../assets/pd.png";

export default function Hero() {
  const PURCHASE_LINK =
    "https://themeforest.net/checkout/114152339/create_account";

  const slides = [
    // 🔥 SLIDE 1
    {
      id: 1,
      type: "right-content",
      title: "SHOW OFF\nYOUR MOVES",
      desc: "Import the full Vibez demo content with a single mouse click thanks to the one-click import feature",
      img: img1,
      buttons: ["purchase"],
    },

    // 🔥 SLIDE 2
    {
      id: 2,
      type: "neon-center",
      img: img2,
      overlayImg: neonText,
      desc: "Vibez comes with everything you need for your website. Packed with the theme are seven remarkable and fully customizable homepage layouts",
      buttons: ["purchase"],
    },

    // 🔥 SLIDE 3
    {
      id: 3,
      type: "left-right",
      title: "GRACEFUL\nPERFORMANCE",
      desc: "Vibez is a dazzling modern theme filled to the brim with astounding features, powerful elements & absolutely astonishing predesigned inner page layouts",
      img: img3,
      buttons: ["signup", "purchase"],
    },
  ];

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
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* 🔥 Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 h-full">

        {/* ================================================= */}
        {/* 🔥 SLIDE 1 */}
        {/* ================================================= */}
        {slides[current].type === "right-content" && (
          <div className="h-full flex items-center px-6 md:px-20">

            <div className="w-full grid md:grid-cols-2 items-center">

              <div></div>

              <div className="text-white">

                {/* TITLE */}
                <h1
                  className="
                  font-light
                  uppercase
                  leading-[0.95]
                  tracking-[0.04em]
                  text-[10px]
                  sm:text-[15px]
                  md:text-[20px]
                  lg:text-[75px]
                  "
                >
                  {slides[current].title
                    .split("\n")
                    .map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-8 text-[18px] text-gray-200 leading-relaxed max-w-lg">
                  {slides[current].desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={handlePurchase}
                  className="
                  mt-10
                  bg-pink-500
                  hover:bg-white
                  hover:text-pink-500
                  text-white
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  px-10
                  py-4
                  transition
                  duration-300
                  "
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* 🔥 SLIDE 2 */}
        {/* ================================================= */}
        {slides[current].type === "neon-center" && (
          <div className="h-full flex flex-col items-center justify-center px-6 text-center">

            {/* 🌟 pd.png */}
            <img
              src={slides[current].overlayImg}
              alt="Neon"
              className="
              w-full
              max-w-[950px]
              object-contain
              mix-blend-screen
              opacity-95
              drop-shadow-[0_0_45px_rgba(255,0,180,0.8)]
              "
            />

            {/* DESCRIPTION */}
            <p
              className="
              mt-5
              text-[18px]
              md:text-[20px]
              leading-relaxed
              text-gray-200
              max-w-4xl
              "
            >
              {slides[current].desc}
            </p>

            {/* BUTTON */}
            <button
              onClick={handlePurchase}
              className="
              mt-10
              bg-pink-500
              hover:bg-white
              hover:text-pink-500
              text-white
              uppercase
              tracking-[0.2em]
              font-semibold
              px-10
              py-4
              transition
              duration-300
              "
            >
              Purchase
            </button>
          </div>
        )}

        {/* ================================================= */}
        {/* 🔥 SLIDE 3 */}
        {/* ================================================= */}
        {slides[current].type === "left-right" && (
          <div className="h-full flex items-center px-6 md:px-20">

            <div className="w-full grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT SIDE */}
              <div className="text-white">

                {/* TITLE */}
                <h1
                  className="
                  mt-10
                  font-light
                  text-right
                  uppercase
                  leading-[0.95]
                  tracking-[0.04em]
                 text-[10px]
                  sm:text-[15px]
                  md:text-[20px]
                  lg:text-[75px]
                  "
                >
                  {slides[current].title
                    .split("\n")
                    .map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                </h1>

{/* BUTTONS UNDER TITLE */}
<div className="w-full flex gap-5 mt-10 flex-wrap justify-end translate-x-52">

  {/* SIGNUP */}
  <button
    onClick={handleSignup}
    className="
    bg-pink-500
    hover:bg-white
    hover:text-pink-500
    text-white
    uppercase
    tracking-[0.2em]
    font-semibold
    px-10
    py-4
    transition
    duration-300
    "
  >
    Sign Up
  </button>

  {/* PURCHASE */}
  <button
    onClick={handlePurchase}
    className="
    border
    border-white
    hover:bg-white
    hover:text-pink-500
    text-white
    uppercase
    tracking-[0.2em]
    font-semibold
    px-10
    py-4
    transition
    duration-300
    "
  >
    Purchase
  </button>
</div>
  </div>

              {/* RIGHT SIDE DESCRIPTION */}
              <div className="text-white">

                <p className="text-[18px] text-gray-200 leading-relaxed max-w-lg">
                  {slides[current].desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ⬅ LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="
        absolute
        left-5
        md:left-8
        top-1/2
        -translate-y-1/2
        text-white
        text-7xl
        z-40
        hover:text-pink-500
        transition
        "
      >
        ‹
      </button>

      {/* ➡ RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="
        absolute
        right-5
        md:right-8
        top-1/2
        -translate-y-1/2
        text-white
        text-7xl
        z-40
        hover:text-pink-500
        transition
        "
      >
        ›
      </button>
    </div>
  );
}