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
    <section className="w-full bg-[#0a0a0a] overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      {/* SECTION TITLE */}
      <div className="relative z-20 text-center py-14 sm:py-16 px-6">

        <p className="uppercase tracking-[0.4em] text-[#ffb347] text-[11px] mb-5">
          Dance Showcase
        </p>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[0.10em] leading-[1.2]">
          Urban Dance <br />
          Experience
        </h2>

        <div className="w-20 h-[2px] bg-[#ffb347] mx-auto mt-6"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-[1.9] text-sm">
          Explore creative dance performances, street culture,
          freestyle energy, and artistic movement in a modern atmosphere.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 auto-rows-[220px] lg:h-[760px]">

        {/* LEFT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative group overflow-hidden">

          <img
            src={h3f}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          {/* ORANGE GLOW */}
          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          {/* BORDER */}
          <div className="absolute inset-4 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          {/* CONTENT */}
          <Link
            to="/newdancers"
            className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 z-20 text-white"
          >

            <p className="uppercase tracking-[0.30em] text-[10px] sm:text-xs text-[#ffb347] mb-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Urban Dance
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight uppercase tracking-[0.08em] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              NEW DANCERS
            </h2>

            <span className="inline-block mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80 hover:text-[#ffb347] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-1000">
              → Explore More
            </span>
          </Link>
        </div>

        {/* TOP MIDDLE */}
        <div className="relative group overflow-hidden">

          <img
            src={h3d}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="absolute inset-3 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          <Link
            to="/thedance"
            className="absolute bottom-5 left-5 z-20 text-white"
          >

            <p className="uppercase tracking-[0.25em] text-[10px] text-[#ffb347] mb-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Performance
            </p>

            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.08em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              THE DANCE
            </h2>
          </Link>
        </div>

        {/* TOP RIGHT */}
        <div className="relative group overflow-hidden">

          <img
            src={h3c}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="absolute inset-3 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          <Link
            to="/graffiti"
            className="absolute bottom-5 left-5 z-20 text-white"
          >

            <p className="uppercase tracking-[0.25em] text-[10px] text-[#ffb347] mb-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Creative Art
            </p>

            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.08em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              GRAFFITI
            </h2>
          </Link>
        </div>

        {/* BOTTOM LEFT */}
        <div className="relative group overflow-hidden">

          <img
            src={h3b}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="absolute inset-3 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          <Link
            to="/exhibition"
            className="absolute bottom-5 left-5 z-20 text-white"
          >

            <p className="uppercase tracking-[0.25em] text-[10px] text-[#ffb347] mb-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Showcase
            </p>

            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.08em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              EXHIBITION
            </h2>
          </Link>
        </div>

        {/* BOTTOM MIDDLE */}
        <div className="relative group overflow-hidden">

          <img
            src={h3a}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="absolute inset-3 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          <Link
            to="/organized"
            className="absolute bottom-5 left-5 z-20 text-white"
          >

            <p className="uppercase tracking-[0.25em] text-[10px] text-[#ffb347] mb-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Music Culture
            </p>

            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.08em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              ORGANIZED
            </h2>
          </Link>
        </div>

        {/* RIGHT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative group overflow-hidden">

          <img
            src={h3e}
            alt="dance"
            className="w-full h-full object-cover transition duration-[1400ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="absolute inset-4 border border-[#ffb347]/40 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition duration-700"></div>

          <Link
            to="/attitude"
            className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 z-20 text-white"
          >

            <p className="uppercase tracking-[0.30em] text-[10px] sm:text-xs text-[#ffb347] mb-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              Street Energy
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight uppercase tracking-[0.08em] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
              ATTITUDE
            </h2>

            <span className="inline-block mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/80 hover:text-[#ffb347] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-1000">
              → View Collection
            </span>
          </Link>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(60px);
            letter-spacing: 0.2em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.12em;
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.3s ease forwards;
        }
      `}</style>
    </section>
  );
}