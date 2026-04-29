import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

// IMAGES
import img1 from "../assets/tc11.jpg";
import img2 from "../assets/pf4.jpg";
import img3 from "../assets/pf6.jpg";

const BlogStandard = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="bg-[#19c2a0] h-[220px] flex flex-col justify-center items-center text-white">
        <h1 className="text-[34px] tracking-widest font-semibold">
          BLOG STANDARD
        </h1>

        <div className="mt-3 text-sm text-white/80 flex gap-2">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Blog Standard</span>
        </div>
      </div>

      {/* ================= BLOG LIST ================= */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-24">

        {/* ===== POST 1 ===== */}
        <div>

          <img src={img1} className="w-full h-[420px] object-cover" />

          {/* META */}
          <p className="text-gray-400 text-sm mt-6">
            May 16, 2016 / By admin / 0 Comments /{" "}
            <span className="inline-flex items-center gap-1">
              <FaRegHeart /> 14
            </span>{" "}
            / Dance
          </p>

          {/* TITLE */}
          <h2 className="text-3xl font-semibold mt-3">
            CONTINUE WORKING
          </h2>

          {/* DESC */}
          <p className="text-gray-500 mt-4 leading-7">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>

          {/* READ MORE */}
          <Link
            to="/blog-details"
            className="inline-block mt-4 text-[#19c2a0] text-sm tracking-widest"
          >
            → READ MORE
          </Link>
        </div>

        {/* ===== QUOTE BLOCK ===== */}
        <div className="bg-gray-100 py-16 px-10 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>

          <h4 className="mt-6 font-semibold tracking-widest">
            JAMES NEWBIE / PROJECT MANAGER
          </h4>
        </div>

        {/* ===== POST 2 ===== */}
        <div>

          <img src={img2} className="w-full h-[420px] object-cover" />

          <p className="text-gray-400 text-sm mt-6">
            May 16, 2016 / By admin / 2 Comments /{" "}
            <span className="inline-flex items-center gap-1">
              <FaRegHeart /> 1
            </span>{" "}
            / Dance
          </p>

          <h2 className="text-3xl font-semibold mt-3">
            BETWEEN BODY & SOUL
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo.
          </p>

          <Link className="inline-block mt-4 text-[#19c2a0] text-sm tracking-widest">
            → READ MORE
          </Link>
        </div>

        {/* ===== QUOTE SMALL ===== */}
        <div className="bg-gray-100 py-12 text-center">
          <h3 className="tracking-widest text-gray-700">
            DANCE TO EXPRESS NOT TO IMPRESS
          </h3>
          <p className="text-[#19c2a0] text-sm mt-2">
            https://qodeinteractive.com
          </p>
        </div>

        {/* ===== POST 3 ===== */}
        <div>

          <img src={img3} className="w-full h-[420px] object-cover" />

          <p className="text-gray-400 text-sm mt-6">
            May 16, 2016 / By admin / 2 Comments /{" "}
            <span className="inline-flex items-center gap-1">
              <FaRegHeart /> 1
            </span>{" "}
            / Dance
          </p>

          <h2 className="text-3xl font-semibold mt-3">
            AMAZING INSPIRATION
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>

          <Link className="inline-block mt-4 text-[#19c2a0] text-sm tracking-widest">
            → READ MORE
          </Link>
        </div>

      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center items-center gap-6 pb-20 text-gray-600">

        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>

        <span className="text-xl cursor-pointer hover:text-[#19c2a0]">
          →
        </span>

      </div>

    </div>
  );
};

export default BlogStandard;