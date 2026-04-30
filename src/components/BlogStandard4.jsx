import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi"; // ✅ thin arrow
import bb1 from "../assets/bb6.jpg";

const BlogStandard = () => {
  return (
    <div className="bg-white">

      {/* BLOG CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* IMAGE */}
        <div className="w-full">
          <Link to="/blog-details" className="block overflow-hidden">
            <img
              src={bb1}
              alt="blog"
              className="w-full h-[700px] object-cover cursor-pointer hover:scale-105 transition duration-500"
            />
          </Link>
        </div>

        {/* META */}
        <div className="mt-6 text-sm text-gray-500 flex flex-wrap items-center gap-2">
          <span className="hover:text-[#19c2a0] cursor-pointer transition">
            May 16, 2016
          </span>

          <span>/</span>

          <span>
            By{" "}
            <span className="hover:text-[#19c2a0] cursor-pointer transition">
              admin
            </span>
          </span>

          <span>/</span>

          <span className="hover:text-[#19c2a0] cursor-pointer transition">
            0 Comments
          </span>

          <span>/</span>

          <span className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-[#19c2a0] transition">
            <FaRegHeart />
            14
          </span>

          <span>/</span>

          <span className="hover:text-[#19c2a0] cursor-pointer transition">
            Dance
          </span>
        </div>

        {/* TITLE */}
        <Link to="/blog-details">
          <h2 className="text-2xl font-semibold mt-4 tracking-wide text-black hover:text-[#19c2a0] transition duration-300 cursor-pointer">
            Amazing Inspiration
          </h2>
        </Link>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-4 leading-7">
           Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero...
        </p>

        {/* READ MORE */}
        <Link
          to="/blog-details"
          className="mt-6 inline-flex items-center gap-2 text-[#19c2a0] font-semibold hover:text-black hover:gap-3 transition-all duration-300"
        >
          → READ MORE
        </Link>

        {/* 🔽 PAGINATION */}
        <div className="w-full flex items-center justify-between mt-20">

          {/* Center numbers */}
          <div className="flex gap-6 mx-auto text-lg text-gray-500">
            <span className="cursor-pointer hover:text-[#19c2a0] transition">
              1
            </span>
            <span className="cursor-pointer hover:text-[#19c2a0] transition">
              2
            </span>
          </div>

          {/* Right arrow (thin style) */}
          <Link
            to="/blog/page/2"
            className="text-3xl text-gray-400 hover:text-[#19c2a0] hover:translate-x-1 transition cursor-pointer"
          >
            <FiChevronRight />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default BlogStandard;