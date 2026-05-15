import React, { useState } from "react";

const Hero7 = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#070707] overflow-hidden relative py-10 sm:py-14">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      <div className="grid lg:grid-cols-2 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="relative group overflow-hidden h-[320px] sm:h-[420px] lg:h-[520px]">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop"
            alt="hiphop dance"
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-[2500ms]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* GLOW */}
          <div className="absolute -left-40 top-0 w-[220px] h-full bg-[#ffb347]/20 blur-[120px] group-hover:left-[110%] transition-all duration-[2500ms]"></div>

          {/* CONTENT */}
          <div className="absolute bottom-8 left-6 sm:left-10 text-white z-20">

            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 animate-subtitle">
              Urban Dance Camp
            </p>

            <h2 className="text-3xl sm:text-5xl font-extralight uppercase leading-[1.1] tracking-[0.08em] animate-title">
              Feel The <br />
              Street Energy
            </h2>

            <div className="w-20 h-[2px] bg-[#ffb347] mt-6 animate-line"></div>
          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center z-20">

            <button
              onClick={() => setOpen(true)}
              className="group/play relative w-20 h-20 rounded-full border border-white/30 backdrop-blur-md bg-white/10 flex items-center justify-center hover:scale-110 transition duration-500"
            >

              {/* PULSE */}
              <span className="absolute inset-0 rounded-full border border-[#ffb347] animate-ping opacity-40"></span>

              {/* ICON */}
              <div className="w-0 h-0 border-l-[16px] border-l-[#ffb347] border-y-[10px] border-y-transparent ml-1 group-hover/play:translate-x-1 transition duration-300"></div>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center bg-[#0d0d0d] min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">

          {/* SIDE LINE */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-[2px] h-44 bg-gradient-to-b from-transparent via-[#ffb347] to-transparent"></div>
          </div>

          <div className="px-6 sm:px-10 md:px-16 max-w-2xl">

            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-5 animate-subtitle">
              Hip Hop Workshop
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.15] tracking-[0.08em] mb-6 animate-title">
              Train Hard. <br />
              Move Bold.
            </h2>

            <div className="w-24 h-[2px] bg-[#ffb347] mb-7 animate-line"></div>

            <p className="text-gray-400 text-sm sm:text-base leading-[2] max-w-xl animate-text">
              Experience powerful hip hop choreography, freestyle movement,
              street culture, and live urban dance training with professional
              instructors and energetic performers.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => window.open("/music", "_blank")}
              className="group mt-8 overflow-hidden relative px-7 py-3 bg-[#ffb347] text-black uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold hover:px-9 transition-all duration-500 animate-button"
            >

              <span className="relative z-10 flex items-center gap-2">
                Join The Camp
                <span className="group-hover:translate-x-1 transition duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 text-white text-4xl hover:text-[#ffb347] transition"
          >
            ×
          </button>

          {/* VIDEO */}
          <div className="w-full max-w-5xl animate-video">

            <iframe
              src="https://player.vimeo.com/video/30619461?autoplay=1"
              className="w-full h-[240px] sm:h-[420px] md:h-[550px] rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(255,179,71,0.15)]"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Hip Hop Dance Video"
            ></iframe>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(20px);
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
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textFade {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            width: 6rem;
            opacity: 1;
          }
        }

        @keyframes buttonFade {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes videoZoom {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-subtitle {
          animation: subtitleFade 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s ease forwards;
        }

        .animate-text {
          animation: textFade 1.5s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1.3s ease forwards;
        }

        .animate-button {
          animation: buttonFade 1.8s ease forwards;
        }

        .animate-video {
          animation: videoZoom 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero7;