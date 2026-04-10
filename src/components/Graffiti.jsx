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
import mainImg from "../assets/h3c.jpg";
import main1Img from "../assets/h3b.jpg";
import main2Img from "../assets/h3e.jpg";

const Graffiti = () => {
  const images = [mainImg, main1Img, main2Img];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // NEXT
  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setAnimating(false);
    }, 300);
  };

  // PREV
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

      {/* HERO */}
      <div className="bg-[#20c4b7] py-16 text-center text-white">
        <h1 className="text-[40px] tracking-widest font-semibold">
          GRAFFITI
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <span>/</span>
          <Link to="/urban-dance" className="hover:text-black transition">
            Urban Dance
          </Link>
          <span>/</span>
          <span>Graffiti</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">

        {/* 🔥 LEFT SLIDER */}
        <div>
          <div className="relative w-full h-[500px] overflow-hidden">

            {/* IMAGE */}
            <img
              src={images[current]}
              className={`w-full h-full object-cover transition-all duration-500 ${
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />

            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl 
              hover:text-[#20c4b7] transition"
            >
              ‹
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl 
              hover:text-[#20c4b7] transition"
            >
              ›
            </button>

          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="sticky top-28 h-fit">

          <h2 className="text-3xl font-semibold tracking-wide text-black mb-6">
            PROJECT NAME
          </h2>

          <p className="text-gray-500 leading-7 text-[15px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus.
            Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet
            mattis, massa.
          </p>

          <div className="space-y-5 text-[14px]">
            <div>
              <h4 className="font-semibold text-black">CLIENT:</h4>
              <p className="text-gray-500">Creative Performance Group</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">CATEGORY:</h4>
              <p className="text-gray-500">Urban Dance</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">DATE:</h4>
              <p className="text-gray-500">September 29, 2016</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-10 text-black text-sm">
            <FaFacebookF className="hover:text-[#20c4b7] cursor-pointer" />
            <FaTwitter className="hover:text-[#20c4b7] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#20c4b7] cursor-pointer" />
            <FaTumblr className="hover:text-[#20c4b7] cursor-pointer" />
            <FaPinterestP className="hover:text-[#20c4b7] cursor-pointer" />
          </div>

        </div>
      </div>

      {/* 🔥 BOTTOM NAV */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="text-gray-400 text-2xl hover:text-[#20c4b7] transition"
          >
            ←
          </button>

          {/* DOTS */}
          <Link to="/" className="group">
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="w-2 h-2 rounded-full bg-black 
                  group-hover:bg-[#20c4b7] transition"
                ></span>
              ))}
            </div>
          </Link>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="text-gray-400 text-2xl hover:text-[#20c4b7] transition"
          >
            →
          </button>

        </div>
      </div>

    </div>
  );
};

export default Graffiti;