import React from "react";
import { Link } from "react-router-dom";

import h3a from "../assets/h3a.jpg";
import h3b from "../assets/h3b.jpg";
import h3c from "../assets/h3c.jpg";
import h3d from "../assets/h3d.jpg";
import h3e from "../assets/h3e.jpg";
import h3f from "../assets/h3f.jpg";

export default function Hero3() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-2 h-auto lg:h-[1100px]">

        {/* LEFT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative group overflow-hidden">
          <img
            src={h3f}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/newdancers"
            className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              NEW DANCERS
            </h2>
          </Link>
        </div>

        {/* TOP MIDDLE */}
        <div className="relative group overflow-hidden">
          <img
            src={h3d}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/thedance"
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              THE DANCE
            </h2>
          </Link>
        </div>

        {/* TOP RIGHT */}
        <div className="relative group overflow-hidden">
          <img
            src={h3c}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/graffiti"
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              GRAFFITI ARTWORK
            </h2>
          </Link>
        </div>

        {/* BOTTOM LEFT */}
        <div className="relative group overflow-hidden">
          <img
            src={h3b}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/exhibition"
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              EXHIBITION
            </h2>
          </Link>
        </div>

        {/* BOTTOM MIDDLE */}
        <div className="relative group overflow-hidden">
          <img
            src={h3a}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/organized"
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              ORGANIZED NOIZE
            </h2>
          </Link>
        </div>

        {/* RIGHT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative group overflow-hidden">
          <img
            src={h3e}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <Link
            to="/attitude"
            className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 z-20 
            opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
            transition duration-500 text-white"
          >
            <p className="text-xs sm:text-sm hover:text-yellow-400 transition duration-300">
              Urban Dance
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              ATTITUDE
            </h2>
          </Link>
        </div>

      </div>
    </section>
  );
}