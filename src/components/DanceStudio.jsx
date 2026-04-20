import { useEffect, useState } from "react";

import img1 from "../assets/h1-slider1-backgroound-img.jpg";
import img2 from "../assets/h1-slider2-backgroound-img.jpg";
import img3 from "../assets/h1-slider3-backgroound-img.jpg";

import textImg from "../assets/h1-slider2-img.png";

import arrowMain from "../assets/arrow-img-1.png";
import arrowSmall from "../assets/arrow-img-2.png";
import arrowLine from "../assets/arrow-img-3.png";

const slides = [
  { id: 1, image: img1, type: "style1" },
  { id: 2, image: img2, type: "style2" },
  { id: 3, image: img3, type: "style3" },
];

export default function DanceStudio() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <img
        src={slide.image}
        alt=""
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-white px-6">

        {/* STYLE 1 */}
        {slide.type === "style1" && (
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              JOIN OUR <br /> DANCE CREW
            </h1>

            <div className="max-w-md text-gray-300">
              <p className="mb-6">
                Vibez is a dazzling modern theme designed specifically for all types of dance studios.
              </p>

              <div className="flex gap-4">
                <button className="bg-teal-500 px-6 py-3">SIGN UP</button>
                <button className="border px-6 py-3">PURCHASE</button>
              </div>
            </div>
          </div>
        )}

        {/* STYLE 2 */}
        {slide.type === "style2" && (
          <div className="text-center max-w-3xl">
            <img
              src={textImg}
              alt=""
              className="mx-auto mb-6 w-[80%] md:w-[60%]"
            />

            <p className="text-gray-300 mb-6">
              Vibez comes with everything you need for your website.
            </p>

            <button className="bg-[#19c2a0] px-6 py-3">
              PURCHASE
            </button>
          </div>
        )}

        {/* STYLE 3 */}
        {slide.type === "style3" && (
          <div className="max-w-xl ml-auto text-right pr-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              ELEGANCE <br /> AND RHYTHM
            </h1>

            <p className="mb-6 text-gray-300">
              Import the full demo content with a single mouse click
            </p>

            <button className="bg-[#19c2a0] px-6 py-3">
              PURCHASE
            </button>
          </div>
        )}

      </div>

      {/* LEFT WHITE ARROW */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl z-20"
      >
        ❮
      </button>

      {/* RIGHT WHITE ARROW */}
      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl z-20"
      >
        ❯
      </button>

      {/* 🔥 GREEN ARROWS - SLIDE 1 (RIGHT SIDE) */}
      {slide.type === "style1" && (
        <div className="absolute right-24 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">

          <div className="flex items-center gap-3">
            <img src={arrowLine} className="w-8 opacity-60" />
            <img src={arrowSmall} className="w-6 opacity-80" />
            <img src={arrowMain} className="w-10" />
          </div>

          <div className="flex items-center gap-3">
            <img src={arrowLine} className="w-8 opacity-60" />
            <img src={arrowSmall} className="w-6 opacity-80" />
            <img src={arrowMain} className="w-10" />
          </div>

        </div>
      )}

      {/* 🔥 GREEN ARROWS - SLIDE 2 (LEFT SIDE) */}
      {slide.type === "style2" && (
        <div className="absolute left-24 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">

          <div className="flex items-center gap-3">
            <img src={arrowMain} className="w-10 rotate-180" />
            <img src={arrowSmall} className="w-6 opacity-80 rotate-180" />
            <img src={arrowLine} className="w-8 opacity-60 rotate-180" />
          </div>

          <div className="flex items-center gap-3">
            <img src={arrowMain} className="w-10 rotate-180" />
            <img src={arrowSmall} className="w-6 opacity-80 rotate-180" />
            <img src={arrowLine} className="w-8 opacity-60 rotate-180" />
          </div>

        </div>
      )}

      {/* 🔥 GREEN ARROWS - SLIDE 3 (LEFT SIDE) */}
      {slide.type === "style3" && (
        <div className="absolute  left-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6 z-10">

          <div className="flex items-center gap-3">
            <img src={arrowMain} className="w-10 rotate-180" />
            <img src={arrowSmall} className="w-6 opacity-80 rotate-180" />
            <img src={arrowLine} className="w-8 opacity-60 rotate-180" />
          </div>

          <div className="flex items-center gap-3">
            <img src={arrowMain} className="w-10 rotate-180" />
            <img src={arrowSmall} className="w-6 opacity-80 rotate-180" />
            <img src={arrowLine} className="w-8 opacity-60 rotate-180" />
          </div>

        </div>
      )}

    </div>
  );
}