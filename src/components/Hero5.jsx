import React from "react";
import h5a from "../assets/h5a.jpg";
import h5b from "../assets/h5b.jpg";

const Hero5 = () => {

  // 🔥 FUNCTIONS
  const goToNeoDance = () => {
    window.open("/neon", "_blank"); // FIXED PATH
  };

  const goToMusic = () => {
    window.open("/music", "_blank");
  };

  return (
    <section className="w-full">

      {/* TOP SECTION */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden group">
        <img
          src={h5a}
          alt=""
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xs sm:text-sm tracking-widest italic mb-2">
            Solo Performance
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
            FREESTYLE BATTLE
          </h1>

          <button
            onClick={goToNeoDance}  // FIXED FUNCTION
            className="text-yellow-400 text-xs sm:text-sm tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            → PARTICIPATE
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden group">
        <img
          src={h5b}
          alt=""
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xs sm:text-sm tracking-widest italic mb-2">
            Group Performance
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
            CREW COMPETITION
          </h1>

          <button
            onClick={goToMusic}
            className="text-yellow-400 text-xs sm:text-sm tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            → PARTICIPATE
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero5;