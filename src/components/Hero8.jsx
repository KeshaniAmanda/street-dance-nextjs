import React, { useState } from "react";
import h8a from "../assets/h8a.jpg";

const Hero8 = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">

      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-black text-white flex flex-col justify-center px-6 md:px-16 py-12 space-y-8">

          {/* ITEM */}
          {[
            { title: "Open Freestyle Class", value: 68 },
            { title: "Breakdance Class", value: 83 },
            { title: "Music Class", value: 54 },
            { title: "Neon Dance Performance", value: 76 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-2">
                <span>{item.title}</span>
                <span>{item.value}%</span>
              </div>

              <div className="w-full h-[2px] bg-gray-600">
                <div
                  className="h-[2px] bg-yellow-400"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative">
          <img
            src={h8a}
            alt="dance"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              onClick={() => setOpen(true)}
              className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition"
            >
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* VIDEO */}
          <div className="w-[90%] md:w-[70%] lg:w-[60%]">
            <iframe
              src="https://player.vimeo.com/video/30619461?autoplay=1"
              className="w-full h-[250px] sm:h-[400px] md:h-[500px]"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      )}

    </section>
  );
};

export default Hero8;