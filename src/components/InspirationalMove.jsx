import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTumblr,
  FaPinterestP,
} from "react-icons/fa";

// IMAGES
import mainImg from "../assets/tc6.jpg";
import main1Img from "../assets/tc6.jpg";
import main2Img from "../assets/tc6.jpg";

// 👉 NEW IMAGES (BOTTOM)
import pf5 from "../assets/pf5.jpg";
import tc9 from "../assets/tc9.jpg";

const Graffiti = () => {
  const images = [mainImg, main1Img, main2Img];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="bg-[#19c2a0] h-[260px] flex flex-col justify-center items-center text-white pt-24">
        <h1 className="text-[36px] tracking-widest font-semibold">
          Inspirational Move
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <span>/</span>
          <Link to="/art" className="hover:text-black transition">
            Art
          </Link>
          <span>/</span>
          <Link to="/kids-dance" className="hover:text-black transition">
            Kids Dance
          </Link>
          <span>/</span>
          <span>InspirationalMove</span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* SLIDER */}
          <div className="relative w-full h-[520px] overflow-hidden">
            <img
              src={images[current]}
              alt=""
              className={`w-full h-full object-cover transition-all duration-500 ${
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />

            {/* ARROWS */}
            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[#19c2a0]"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[#19c2a0]"
            >
              ›
            </button>
          </div>

          {/* 🔥 BOTTOM 2 IMAGES */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <img
              src={pf5}
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <img
              src={tc9}
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>

        </div>

        {/* RIGHT DETAILS */}
        <div className="sticky top-24 h-fit">

          <h2 className="text-3xl font-semibold tracking-wide text-black mb-6">
            PROJECT NAME
          </h2>

          <p className="text-gray-500 leading-7 text-[15px] mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam <br />
 cursus. Morbi ut mi. Nullam enim leo, egestas id, cond imentum <br />
 at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent  <br />
mauris ante, elementum et, bibendum at, posuere sit amet,  <br />
nibh. Duis tincidunt lectus quis dui viverra vestibulum.  <br />
Suspendisse vulputate aliquam dui.Excepteur sint occaecat <br />
 cupidatat non proident.
          </p>

          <div className="space-y-5 text-[14px]">
            <div>
  <h4 className="font-semibold text-black">CLIENT:</h4>

  <a
    href="https://qodeinteractive.com/theme-author/elated-wordpress-themes/?_gl=1*prkca4*_gcl_au*MTcxMTIzNDMxMC4xNzc2NTk1MTcz"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:text-[#19c2a0] transition"
  >
    Elated themes
  </a>
</div>

            <div>
              <h4 className="font-semibold text-black">CATEGORY:</h4>
              <p className="text-gray-500">Art,Kids Dance</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">DATE:</h4>
              <p className="text-gray-500">September 29, 2016</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-10 text-black text-sm">
            <FaFacebookF className="hover:text-[#19c2a0] cursor-pointer" />
            <FaTwitter className="hover:text-[#19c2a0] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#19c2a0] cursor-pointer" />
            <FaTumblr className="hover:text-[#19c2a0] cursor-pointer" />
            <FaPinterestP className="hover:text-[#19c2a0] cursor-pointer" />
          </div>

        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="flex items-center justify-between">

          <button
            onClick={prevSlide}
            className="text-gray-400 text-2xl hover:text-[#19c2a0]"
          >
            ←
          </button>

          <Link to="/" className="group">
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="w-2 h-2 rounded-full bg-black group-hover:bg-[#19c2a0]"
                ></span>
              ))}
            </div>
          </Link>

          <button
            onClick={nextSlide}
            className="text-gray-400 text-2xl hover:text-[#19c2a0]"
          >
            →
          </button>

        </div>
      </div>

    </div>
  );
};

export default Graffiti;