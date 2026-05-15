import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

const Hero9 = () => {
  const teachers = [
    {
      img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
      name: "ALEX CARTER",
      role: "Hip Hop Coach",
    },
    {
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      name: "MIA RAY",
      role: "Urban Choreographer",
    },
    {
      img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      name: "JAYDEN COLE",
      role: "Freestyle Dancer",
    },
    {
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      name: "SOPHIA KING",
      role: "Street Performer",
    },
  ];

  const brands = [
    "NIKE",
    "ADIDAS",
    "RED BULL",
    "PUMA",
    "URBAN",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#070707] overflow-hidden relative">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      {/* TOP SECTION */}
      <div className="relative z-10 py-8 sm:py-10 px-6 md:px-14 border-b border-white/10">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-4 animate-subtitle">
            Professional Team
          </p>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.1] tracking-[0.08em] animate-title">
            Meet Our <span className="font-semibold">Dance Masters</span>
          </h2>

          <div className="w-20 h-[2px] bg-[#ffb347] mx-auto mt-6 animate-line"></div>

        </div>
      </div>

      {/* TEACHERS GRID */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {teachers.map((item, index) => (
          <div
            key={index}
            className="relative h-[320px] overflow-hidden group"
          >

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">

              <p className="uppercase tracking-[0.3em] text-[#ffb347] text-[10px] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                {item.role}
              </p>

              <h3 className="text-xl sm:text-2xl font-light uppercase tracking-[0.08em] mb-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-700">
                {item.name}
              </h3>

              {/* SOCIALS */}
              <div className="flex gap-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-1000">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <FaSpotify />
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BRAND SECTION */}
      <div className="relative z-10 py-10 px-6 md:px-14 border-t border-white/10 bg-[#0b0b0b]">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-5">

          {brands.map((brand, index) => (
            <div
              key={index}
              onClick={scrollToTop}
              className="group cursor-pointer flex items-center justify-center h-20 border border-white/10 bg-white/[0.02] hover:bg-[#ffb347] transition duration-500 overflow-hidden relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#ffb347]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <h3 className="relative z-10 text-white text-sm sm:text-lg font-black tracking-[0.25em] group-hover:text-black transition duration-500">
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </div>

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
            transform: translateY(50px);
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

        .animate-subtitle {
          animation: subtitleFade 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1.3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero9;