import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiUser } from "react-icons/fi";

const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    title: "STREET DANCE ENERGY",
    desc: "Experience urban freestyle culture with powerful movement and creative rhythm from passionate dancers.",
    date: "March 15, 2026",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    title: "LIVE CREW BATTLE",
    desc: "Join high-energy dance battles featuring synchronized choreography and powerful stage vibes.",
    date: "April 10, 2026",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    title: "URBAN MUSIC FEST",
    desc: "Explore live performances, street culture, and unforgettable music experiences with dancers.",
    date: "May 22, 2026",
  },
];

const Hero6 = () => {
  const navigate = useNavigate();

  const handleTitleClick = (id) => {
    if (id === 1) navigate("/blog");
    if (id === 2) navigate("/blog1");
    if (id === 3) navigate("/blog2");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-6 md:px-14">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

      {/* TOP CONTENT */}
      <div className="relative z-10 text-center mb-14">

        <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-5 animate-subtitle">
          Latest Events
        </p>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.2] tracking-[0.1em] animate-title">
          Upcoming Dance <br />
          Experiences
        </h2>

        <div className="w-20 h-[2px] bg-[#ffb347] mx-auto mt-6 animate-line"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm leading-[2] animate-text">
          Discover freestyle battles, urban performances, and creative
          dance events filled with energy, rhythm, and passion.
        </p>
      </div>

      {/* CARDS */}
      <div className="relative z-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#ffb347]/40 transition duration-700 animate-card"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden h-[240px]">

              <img
                src={item.img}
                alt={item.title}
                onClick={() => handleTitleClick(item.id)}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[1800ms] cursor-pointer"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#ffb347]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* DATE */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <p className="text-[#ffb347] text-[10px] uppercase tracking-[0.2em]">
                  {item.date}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* ADMIN */}
              <div className="flex items-center gap-3 text-gray-500 text-xs uppercase tracking-[0.18em] mb-4">

                <span className="flex items-center gap-2">
                  <FiCalendar className="text-[#ffb347]" />
                  Event
                </span>

                <span className="flex items-center gap-2">
                  <FiUser className="text-[#ffb347]" />
                  Admin
                </span>
              </div>

              {/* TITLE */}
              <h3
                onClick={() => handleTitleClick(item.id)}
                className="text-white text-xl sm:text-2xl font-light uppercase leading-[1.4] tracking-[0.08em] cursor-pointer hover:text-[#ffb347] transition duration-500"
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-[2] mt-4">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => handleTitleClick(item.id)}
                className="group/btn mt-7 flex items-center gap-3 text-[#ffb347] uppercase tracking-[0.25em] text-[10px] sm:text-xs"
              >

                <span className="group-hover/btn:translate-x-1 transition duration-300">
                  →
                </span>

                Read More
              </button>
            </div>

            {/* BORDER GLOW */}
            <div className="absolute inset-0 rounded-[24px] border border-[#ffb347]/0 group-hover:border-[#ffb347]/30 transition duration-700 pointer-events-none"></div>
          </div>
        ))}
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
            transform: translateY(60px);
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

        @keyframes textFade {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardFade {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-subtitle {
          animation: subtitleFade 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1.4s ease forwards;
        }

        .animate-text {
          animation: textFade 1.6s ease forwards;
        }

        .animate-card {
          opacity: 0;
          animation: cardFade 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero6;