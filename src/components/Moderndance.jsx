import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import md1 from "../assets/md1.jpg";
import md2 from "../assets/md2.jpg";
import md3 from "../assets/md3.jpg";

export default function ModeranDance1() {
  const purchaseLink =
    "https://themeforest.net/checkout/114443007/create_account?clickid=3VUQrcwqaxyZThuXldzD02pwUkuUV6WULSLeUk0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1306815&mp_value1=&utm_campaign=af_impact_radius_1306815&utm_medium=affiliate&utm_source=impact_radius";

  const slides = [
    {
      image: md1,
      title: "CONTEMPORARY",
      desc: "Vibez comes with absolutely everything you need to make your website. Packed with the theme are seven remarkable and fully customizable homepage layouts",
      button: "PURCHASE",
      overlay: "bg-pink-600/40",
      titleStyle: "font-light tracking-wide",
      contentPosition: "center",
      animation: "bottom",
      buttonStyle:
        "bg-black text-white border border-black hover:bg-transparent hover:text-black",
    },

    {
      image: md2,
      title: "DANCE AS A\nFORM OF ART",
      desc: "Vibez is a dazzling modern theme designed specifically for all types of dance studios, dance clubs and enthusiasts",
      button: "PURCHASE",
      overlay: "bg-gray-500/30",
      titleStyle: "font-light leading-[0.9]",
      contentPosition: "left",
      animation: "right",
      buttonStyle:
        "bg-pink-500 border border-pink-500 text-white hover:bg-transparent hover:text-pink-500",
    },

    {
      image: md3,
      title: "LET'S KEEP ON DANCING",
      desc: "You can import the complete Vibez demo content in an instant with just a single click of your mouse thanks to the one-click import feature",
      button: "PURCHASE",
      overlay: "bg-black/40",
      titleStyle: "font-bold italic",
      contentPosition: "center",
      animation: "bottom",
      buttonStyle:
        "bg-pink-500 border border-pink-500 text-white hover:bg-black hover:border-black",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextSlide = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 100);
  };

  const prevSlide = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimate(true);
    }, 100);
  };

  useEffect(() => {
    setAnimate(true);

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <img
        src={slides[current].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105"
      />

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 ${slides[current].overlay} transition-all duration-700`}
      />

      {/* CONTENT */}
      <div
        className={`relative z-20 flex items-center h-full px-6 md:px-20
        ${
          slides[current].contentPosition === "left"
            ? "justify-start text-left"
            : "justify-center text-center"
        }`}
      >
        <div
          className={`${
            slides[current].contentPosition === "left"
              ? "max-w-2xl"
              : "max-w-5xl"
          }`}
        >
          {/* TITLE */}
          <h1
            className={`text-white uppercase whitespace-pre-line
            text-[55px] md:text-[75px]
            ${slides[current].titleStyle}
            transition-all duration-1000
            ${
              animate
                ? slides[current].animation === "right"
                  ? "opacity-100 translate-x-0"
                  : "opacity-100 translate-y-0"
                : slides[current].animation === "right"
                ? "opacity-0 translate-x-32"
                : "opacity-0 translate-y-32"
            }`}
          >
            {slides[current].title}
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`text-white/90 text-[18px] md:text-[22px] leading-relaxed mt-6
            transition-all duration-1000 delay-300
            ${
              slides[current].contentPosition === "left"
                ? "max-w-xl"
                : "max-w-4xl mx-auto"
            }
            ${
              animate
                ? slides[current].animation === "right"
                  ? "opacity-100 translate-x-0"
                  : "opacity-100 translate-y-0"
                : slides[current].animation === "right"
                ? "opacity-0 translate-x-32"
                : "opacity-0 translate-y-32"
            }`}
          >
            {slides[current].desc}
          </p>

          {/* BUTTON */}
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`mt-10 px-12 py-5 uppercase tracking-[4px] text-sm font-semibold
              transition-all duration-1000 delay-500
              ${slides[current].buttonStyle}
              ${
                animate
                  ? slides[current].animation === "right"
                    ? "opacity-100 translate-x-0"
                    : "opacity-100 translate-y-0"
                  : slides[current].animation === "right"
                  ? "opacity-0 translate-x-32"
                  : "opacity-0 translate-y-32"
              }`}
            >
              {slides[current].button}
            </button>
          </a>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-30 text-white hover:scale-110 transition"
      >
        <ChevronLeft size={70} strokeWidth={1.2} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-30 text-white hover:scale-110 transition"
      >
        <ChevronRight size={70} strokeWidth={1.2} />
      </button>
    </section>
  );
}