import React from "react";
import h5a from "../assets/h5a.jpg";
import h5b from "../assets/h5b.jpg";

const Hero5 = () => {

  const goToNeoDance = () => {
    window.open("/neon", "_blank");
  };

  const goToMusic = () => {
    window.open("/music", "_blank");
  };

  return (
    <section className="w-full overflow-hidden bg-[#070707] relative">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      {/* TOP SECTION */}
      <div className="relative w-full h-[48vh] sm:h-[55vh] md:h-[65vh] overflow-hidden group">

        {/* IMAGE */}
        <img
          src={h5a}
          alt="dance"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20"></div>

        {/* GLOW */}
        <div className="absolute -left-40 top-0 w-[250px] h-full bg-[#ffb347]/20 blur-[100px] group-hover:left-[110%] transition-all duration-[2500ms]"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16">

          <div className="max-w-xl text-white">

            {/* SMALL TEXT */}
            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 animate-subtitle">
              Solo Performance
            </p>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.05] tracking-[0.08em] mb-5 animate-title">
              FREESTYLE <br />
              BATTLE
            </h1>

            {/* LINE */}
            <div className="w-20 h-[2px] bg-[#ffb347] mb-6 animate-line"></div>

            {/* TEXT */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-[1.9] max-w-lg mb-8 animate-text">
              Step into the spotlight and express your rhythm through
              freestyle performances and unforgettable stage moments.
            </p>

            {/* BUTTON */}
            <button
              onClick={goToNeoDance}
              className="group/btn relative overflow-hidden px-6 sm:px-7 py-3 uppercase tracking-[0.22em] text-[10px] sm:text-xs font-semibold text-[#ffb347] hover:text-black transition-all duration-500 animate-button bg-white/5 backdrop-blur-sm"
            >

              {/* BUTTON BG */}
              <span className="absolute inset-0 bg-[#ffb347] translate-y-full group-hover/btn:translate-y-0 transition duration-500"></span>

              {/* CONTENT */}
              <span className="relative z-10 flex items-center gap-2">
                Participate

                <span className="group-hover/btn:translate-x-1 transition duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* NUMBER */}
        <h2 className="absolute right-4 sm:right-8 bottom-0 text-white/[0.05] text-[70px] sm:text-[120px] md:text-[160px] font-black leading-none pointer-events-none">
          01
        </h2>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative w-full h-[48vh] sm:h-[55vh] md:h-[65vh] overflow-hidden group">

        {/* IMAGE */}
        <img
          src={h5b}
          alt="dance"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-black/20"></div>

        {/* GLOW */}
        <div className="absolute -right-40 top-0 w-[250px] h-full bg-[#ffb347]/20 blur-[100px] group-hover:right-[110%] transition-all duration-[2500ms]"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-10 md:px-16">

          <div className="max-w-xl text-white text-right">

            {/* SMALL TEXT */}
            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 animate-subtitle">
              Group Performance
            </p>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.05] tracking-[0.08em] mb-5 animate-title">
              CREW <br />
              COMPETITION
            </h1>

            {/* LINE */}
            <div className="w-20 h-[2px] bg-[#ffb347] ml-auto mb-6 animate-line"></div>

            {/* TEXT */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-[1.9] max-w-lg ml-auto mb-8 animate-text">
              Gather your crew and dominate the stage with synchronized
              moves, creativity, and unforgettable performances.
            </p>

            {/* BUTTON */}
            <button
              onClick={goToMusic}
              className="group/btn relative overflow-hidden px-6 sm:px-7 py-3 uppercase tracking-[0.22em] text-[10px] sm:text-xs font-semibold text-[#ffb347] hover:text-black transition-all duration-500 ml-auto animate-button bg-white/5 backdrop-blur-sm"
            >

              {/* BUTTON BG */}
              <span className="absolute inset-0 bg-[#ffb347] translate-y-full group-hover/btn:translate-y-0 transition duration-500"></span>

              {/* CONTENT */}
              <span className="relative z-10 flex items-center gap-2">
                Participate

                <span className="group-hover/btn:translate-x-1 transition duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* NUMBER */}
        <h2 className="absolute left-4 sm:left-8 bottom-0 text-white/[0.05] text-[70px] sm:text-[120px] md:text-[160px] font-black leading-none pointer-events-none">
          02
        </h2>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(25px);
            letter-spacing: 0.5em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.35em;
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.96);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes textFade {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }

        @keyframes buttonFade {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-subtitle {
          animation: subtitleFade 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-text {
          animation: textFade 1.5s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1.4s ease forwards;
        }

        .animate-button {
          animation: buttonFade 1.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero5;