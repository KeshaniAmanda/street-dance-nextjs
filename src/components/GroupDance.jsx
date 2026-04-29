import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTumblr,
  FaPinterestP,
} from "react-icons/fa";

// IMAGES (6 GRID)
import img1 from "../assets/pf3.jpg";
import img2 from "../assets/tc12.jpg";
import img3 from "../assets/tc11.jpg";
import img4 from "../assets/pf4.jpg";
import img5 from "../assets/tc10.jpg";
import img6 from "../assets/pf6.jpg";

const Graffiti = () => {

  // 👉 NEW STATES (ADDED ONLY)
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="bg-[#19c2a0] h-[260px] flex flex-col justify-center items-center text-white pt-24">
        <h1 className="text-[36px] tracking-widest font-semibold">
          GROUP DANCE
        </h1>

        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/art" className="hover:text-black">Art</Link>
          <span>/</span>
          <Link to="/urban-dance" className="hover:text-black">
            Urban Dance
          </Link>
          <span>/</span>
          <span>Group Dance</span>
        </div>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden cursor-pointer"
              onClick={() => {
                setCurrent(i);
                setOpen(true);
              }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>

      {/* ================= DETAILS SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16">

        {/* LEFT TEXT */}
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

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          <div>
            <h4 className="font-semibold text-black">CLIENT:</h4>
            <a
              href="https://qodeinteractive.com/theme-author/elated-wordpress-themes/?_gl=1*prkca4*_gcl_au*MTcxMTIzNDMxMC4xNzc2NTk1MTcz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#19c2a0]"
            >
              Elated themes
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-black">CATEGORY:</h4>
            <p className="text-gray-500">Art, Urban Dance</p>
          </div>

          <div>
            <h4 className="font-semibold text-black">DATE:</h4>
            <p className="text-gray-500">September 27, 2016</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-5 pt-4 text-sm text-black">
  <FaFacebookF className="cursor-pointer transition duration-300 hover:text-[#19c2a0]" />
  <FaTwitter className="cursor-pointer transition duration-300 hover:text-[#19c2a0]" />
  <FaLinkedinIn className="cursor-pointer transition duration-300 hover:text-[#19c2a0]" />
  <FaTumblr className="cursor-pointer transition duration-300 hover:text-[#19c2a0]" />
  <FaPinterestP className="cursor-pointer transition duration-300 hover:text-[#19c2a0]" />
</div>

        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 flex justify-between items-center text-gray-400">

        <span className="text-2xl cursor-pointer hover:text-[#19c2a0]">
          ←
        </span>

        <Link to="/" className="grid grid-cols-2 gap-2 group">
  {[1,2,3,4].map((i) => (
    <span
      key={i}
      className="w-2 h-2 bg-black rounded-full transition group-hover:bg-[#19c2a0]"
    ></span>
  ))}
</Link>

        <span className="text-2xl cursor-pointer hover:text-[#19c2a0]">
          →
        </span>

      </div>

      {/* ================= POPUP (ADDED ONLY) ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          {/* IMAGE */}
          <div className="relative w-[80%] max-w-[1000px]">
            <img
              src={images[current]}
              alt=""
              className="w-full h-auto"
            />

            {/* LEFT */}
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ‹
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                setCurrent((prev) =>
                  (prev + 1) % images.length
                )
              }
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ›
            </button>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-6 right-10 text-white text-sm">
            {current + 1} / {images.length}
          </div>

        </div>
      )}

    </div>
  );
};

export default Graffiti;