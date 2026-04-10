import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTumblr,
  FaPinterestP,
} from "react-icons/fa";

// IMAGES
import img1 from "../assets/h3f.jpg";
import img2 from "../assets/h3a.jpg";
import img3 from "../assets/h3d.jpg";

const TheDance = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="bg-[#20c4b7] py-16 text-center text-white">
        <h1 className="text-[38px] tracking-[4px] font-semibold">
          THE DANCE
        </h1>

        {/* BREADCRUMB */}
        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/urban-dance" className="hover:text-black transition">
            Urban Dance
          </Link>
          <span>/</span>
          <span>The Dance</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1300px] mx-auto px-6 py-16">

        {/* IMAGES */}
        <div className="space-y-12">
          <img src={img1} className="w-full object-cover" />
          <img src={img2} className="w-full object-cover" />
          <img src={img3} className="w-full object-cover" />
        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-20 mt-16">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[28px] tracking-wide font-semibold text-black mb-6">
              PROJECT NAME
            </h2>

            <p className="text-gray-500 leading-7 text-[15px]">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>

          {/* RIGHT META */}
          <div className="space-y-6 text-[14px]">

            <div>
              <h4 className="font-semibold text-black">CLIENT:</h4>
              <p className="text-gray-500">
                Creative Performance Group
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-black">CATEGORY:</h4>
              <p className="text-gray-500">Urban Dance</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">DATE:</h4>
              <p className="text-gray-500">September 29, 2016</p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-6 text-black text-sm">
              <FaFacebookF className="cursor-pointer hover:text-[#20c4b7]" />
              <FaTwitter className="cursor-pointer hover:text-[#20c4b7]" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#20c4b7]" />
              <FaTumblr className="cursor-pointer hover:text-[#20c4b7]" />
              <FaPinterestP className="cursor-pointer hover:text-[#20c4b7]" />
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM NAV */}
        <div className="flex items-center justify-between mt-20">

          {/* LEFT ARROW */}
          <Link to="/" className="text-gray-400 hover:text-black text-2xl">
            ←
          </Link>

          {/* CENTER DOTS */}
          <Link to="/" className="group">
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="w-2 h-2 rounded-full bg-black group-hover:bg-[#20c4b7] transition"
                ></span>
              ))}
            </div>
          </Link>

          {/* RIGHT ARROW */}
          <Link to="/" className="text-gray-400 hover:text-black text-2xl">
            →
          </Link>

        </div>

      </div>
    </div>
  );
};

export default TheDance;