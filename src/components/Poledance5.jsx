import React from "react";
import { Play } from "lucide-react";
import lpv from "../assets/lpv.jpg";

export default function VideoSection() {
  return (
    <section className="w-full">
      
      {/* TOP STATS */}
      <div className="bg-[#f5f5f5] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          <div>
            <h2 className="text-[55px] font-light text-[#222] leading-none">
              9859
            </h2>
            <p className="mt-3 uppercase tracking-[1px] text-[13px] text-gray-500">
              Team Energy
            </p>
          </div>

          <div>
            <h2 className="text-[55px] font-light text-[#222] leading-none">
              8197
            </h2>
            <p className="mt-3 uppercase tracking-[1px] text-[13px] text-gray-500">
              Lines Of Code
            </p>
          </div>

          <div>
            <h2 className="text-[55px] font-light text-[#222] leading-none">
              1143
            </h2>
            <p className="mt-3 uppercase tracking-[1px] text-[13px] text-gray-500">
              Cool Projects
            </p>
          </div>

          <div>
            <h2 className="text-[55px] font-light text-[#222] leading-none">
              2197
            </h2>
            <p className="mt-3 uppercase tracking-[1px] text-[13px] text-gray-500">
              Cups Of Coffee
            </p>
          </div>

        </div>
      </div>

      {/* VIDEO IMAGE SECTION */}
      <div className="relative w-full h-[400px] overflow-hidden">
        
        <img
          src={lpv}
          alt="Video Banner"
          className="w-full h-full object-cover"
        />

        {/* PINK OVERLAY */}
        <div className="absolute inset-0 bg-pink-500/40"></div>

        {/* PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-28 h-28 rounded-full border-4 border-white flex items-center justify-center hover:scale-110 transition duration-300">
            <Play
              size={42}
              className="text-white fill-white ml-2"
            />
          </button>
        </div>

      </div>
    </section>
  );
}