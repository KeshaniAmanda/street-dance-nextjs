import React, { useState } from "react";
import h7a from "../assets/h7a.jpg";

const Hero7 = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white">

      <div className="grid md:grid-cols-2">

        {/* LEFT - IMAGE */}
        <div className="relative">
          <img
            src={h7a}
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

        {/* RIGHT - CONTENT */}
        <div className="relative bg-black text-white flex items-center">
          <div className="px-6 md:px-16 py-12 max-w-3xl">

            <h2 className="text-2xl md:text-3xl font-light leading-snug uppercase">
              Dance Competition <span className="font-bold">Camp.</span><br />
              Train Your <span className="font-bold">Skills</span> To The Max.
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus<br /> viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean<br /> imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper<br /> ultricies nisi.
            </p>

            <button className="mt-6 text-yellow-400 text-xs tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              → PARTICIPATE
            </button>

          </div>
        </div>

      </div>

      {/* MODAL VIDEO */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* VIDEO */}
          <div className="w-[90%] md:w-[70%] lg:w-[60%]">
            <iframe
              src="https://player.vimeo.com/video/66091494?autoplay=1"
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

export default Hero7;