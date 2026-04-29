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
import img1 from "../assets/tc11.jpg";
import img2 from "../assets/pf4.jpg";
import img3 from "../assets/pf3.jpg";

const Graffiti = () => {
  const [current, setCurrent] = useState(0);

  const images = [img1, img2, img3];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="bg-[#19c2a0] h-[260px] flex flex-col justify-center items-center text-white pt-16">
        <h1 className="text-[34px] tracking-widest font-semibold">
          DANCE ACT
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
                  <Link to="/" className="hover:text-black">Home</Link>
                  <span>/</span>
                  <Link to="/art" className="hover:text-black">Art</Link>
                  <span>/</span>
                  <Link to="/urban-dance" className="hover:text-black">
                    Latino Dance
                  </Link>
                  <span>/</span>
                  <span>Dance Act</span>
                </div>
      </div>

      {/* ================= BIG IMAGE SLIDER ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 relative">

        <img
          src={images[current]}
          alt=""
          className="w-full h-[800px] object-cover"
        />

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
          className="absolute left-10 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setCurrent((current + 1) % images.length)
          }
          className="absolute right-10 top-1/2 -translate-y-1/2 text-white text-4xl opacity-70 hover:opacity-100"
        >
          ›
        </button>

      </div>

      {/* ================= DETAILS ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-wide text-black">
            PROJECT NAME
          </h2>

          <p className="text-gray-500 leading-7 text-[15px]">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          <div>
            <h4 className="font-semibold text-black">CLIENT:</h4>
            <p className="text-gray-500">Elated themes</p>
          </div>

          <div>
            <h4 className="font-semibold text-black">CATEGORY:</h4>
            <p className="text-gray-500">Art, Latino Dance</p>
          </div>

          <div>
            <h4 className="font-semibold text-black">DATE:</h4>
            <p className="text-gray-500">September 27, 2016</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 pt-4 text-sm text-black">
            <FaFacebookF className="cursor-pointer hover:text-[#19c2a0]" />
            <FaTwitter className="cursor-pointer hover:text-[#19c2a0]" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#19c2a0]" />
            <FaTumblr className="cursor-pointer hover:text-[#19c2a0]" />
            <FaPinterestP className="cursor-pointer hover:text-[#19c2a0]" />
          </div>

        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 flex justify-between items-center text-gray-400">

        <span className="text-2xl cursor-pointer hover:text-[#19c2a0]">
          ←
        </span>

        <Link to="/" className="grid grid-cols-2 gap-2 group">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-2 h-2 bg-black rounded-full group-hover:bg-[#19c2a0]"
            ></span>
          ))}
        </Link>

        <span className="text-2xl cursor-pointer hover:text-[#19c2a0]">
          →
        </span>

      </div>

    </div>
  );
};

export default Graffiti;