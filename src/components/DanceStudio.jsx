import React from "react";
import {
  Play,
  Music2,
  Trophy,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const Studio = () => {
  const navigate = useNavigate();

  // ================= CLASSES =================
  const classes = [
    {
      title: "HIP HOP",
      level: "Beginner",
      path: "/hiphop",
      img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "URBAN STYLE",
      level: "Intermediate",
      path: "/urban",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "FREESTYLE",
      level: "Advanced",
      path: "/freestyle",
      img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // ================= TRAINERS =================
  const trainers = [
    {
      name: "ALEX CARTER",
      role: "Hip Hop Coach",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "MIA RAY",
      role: "Urban Dancer",
      img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "JAYDEN COLE",
      role: "Street Performer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // ================= BUTTON FUNCTIONS =================
  const joinNow = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const exploreStudio = () => {
    navigate("/hiphop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openVideo = () => {
    window.open(
      "https://player.vimeo.com/video/30619461?autoplay=1",
      "_blank"
    );
  };

  const registerNow = () => {
    navigate("/battle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden bg-[#050505] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ffb347]/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-5 sm:px-8">

          <p className="uppercase tracking-[0.45em] text-[#ffb347] text-[10px] sm:text-xs mb-5 animate-fadeUp">
            Urban Dance Studio
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.9] mb-7 animate-title">
            STREET <br />
            MOVEMENT
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 leading-[2] text-sm sm:text-base animate-text">
            Experience hip hop culture, freestyle movement,
            choreography, and urban dance performances in
            a powerful modern atmosphere.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-btn">

            <button
              onClick={joinNow}
              className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-[#ffb347] text-black uppercase tracking-[0.25em] text-xs font-bold hover:scale-105 transition duration-500"
            >
              <span className="relative z-10">JOIN NOW</span>

              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition duration-500"></div>
            </button>

            <button
              onClick={exploreStudio}
              className="group w-full sm:w-auto px-8 py-4 border border-white/20 uppercase tracking-[0.25em] text-xs hover:bg-white hover:text-black transition duration-500"
            >
              <span className="flex items-center justify-center gap-2">
                EXPLORE
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition duration-300"
                />
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10">

        {[
          ["12+", "TRAINERS"],
          ["5K", "STUDENTS"],
          ["25", "CLASSES"],
          ["40+", "AWARDS"],
        ].map((item, i) => (

          <div
            key={i}
            className="py-8 sm:py-10 text-center border-white/10 md:border-r last:border-r-0 hover:bg-white/[0.03] transition duration-500"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ffb347] mb-3 hover:scale-110 transition duration-500">
              {item[0]}
            </h2>

            <p className="tracking-[0.25em] text-[10px] sm:text-xs text-gray-400">
              {item[1]}
            </p>

          </div>
        ))}
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[30px] group">

            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[350px] sm:h-[500px] object-cover group-hover:scale-110 transition duration-[2000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.4em] text-[#ffb347] text-[10px] sm:text-xs mb-5">
              ABOUT STUDIO
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-[1.1] mb-8">
              MOVE WITH <span className="font-black">PASSION</span>
            </h2>

            <p className="text-gray-400 leading-[2] mb-8 text-sm sm:text-base">
              Our studio blends freestyle culture,
              urban movement, and professional choreography
              to create unforgettable performances and
              confident dancers.
            </p>

            <div className="space-y-5">

              {[
                "Professional Coaches",
                "Modern Dance Studio",
                "Weekly Dance Battles",
                "Creative Choreo Sessions",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-4 group"
                >

                  <div className="w-11 h-11 rounded-full bg-[#ffb347] text-black flex items-center justify-center group-hover:rotate-12 transition duration-500">
                    <Music2 size={18} />
                  </div>

                  <p className="uppercase tracking-[0.2em] text-xs sm:text-sm group-hover:text-[#ffb347] transition duration-300">
                    {item}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLASSES ================= */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16 bg-[#0b0b0b]">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.4em] text-[#ffb347] text-[10px] sm:text-xs mb-5">
            Dance Classes
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase">
            OUR PROGRAMS
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {classes.map((item, index) => (

            <div
              key={index}
              className="relative h-[420px] sm:h-[500px] overflow-hidden group rounded-[30px]"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="absolute bottom-0 left-0 p-8 z-20">

                <p className="uppercase tracking-[0.3em] text-[#ffb347] text-[10px] sm:text-xs mb-3">
                  {item.level}
                </p>

                <h3 className="text-2xl sm:text-3xl font-light uppercase mb-5">
                  {item.title}
                </h3>

                <button
                  onClick={() => navigate(item.path)}
                  className="group flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:text-[#ffb347] transition"
                >
                  Explore
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition duration-300"
                  />
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="relative py-24 sm:py-32 flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center px-5">

          <button
            onClick={openVideo}
            className="group w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 flex items-center justify-center mx-auto hover:bg-[#ffb347] hover:text-black transition duration-500"
          >

            <Play
              size={30}
              className="ml-1 group-hover:scale-125 transition duration-300"
            />

          </button>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase mt-10">
            FEEL THE <span className="font-black">BEAT</span>
          </h2>

        </div>
      </section>

      {/* ================= TRAINERS ================= */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.4em] text-[#ffb347] text-[10px] sm:text-xs mb-5">
            Professional Team
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase">
            OUR TRAINERS
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {trainers.map((item, index) => (

            <div
              key={index}
              className="relative h-[420px] sm:h-[500px] overflow-hidden rounded-[30px] group"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute inset-0 bg-[#ffb347]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8">

                <p className="uppercase tracking-[0.3em] text-[#ffb347] text-[10px] sm:text-xs mb-3">
                  {item.role}
                </p>

                <h3 className="text-2xl sm:text-3xl font-light uppercase">
                  {item.name}
                </h3>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 bg-[#ffb347] text-black text-center">

        <Trophy size={50} className="mx-auto mb-6 animate-bounceSlow" />

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
          JOIN THE MOVEMENT
        </h2>

        <p className="max-w-2xl mx-auto leading-[2] mb-10 text-sm sm:text-base">
          Become part of the urban dance culture
          and improve your freestyle skills with
          our professional programs.
        </p>

        <button
          onClick={registerNow}
          className="group px-10 py-4 bg-black text-white uppercase tracking-[0.2em] text-xs hover:scale-105 transition duration-500"
        >
          <span className="flex items-center gap-2">
            REGISTER NOW
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition duration-300"
            />
          </span>
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative bg-[#050505] text-gray-300 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 border-t border-white/10">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ABOUT */}
            <div className="animate-fadeUp">

              <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
                Vibez
              </h3>

              <p className="text-sm leading-[2] text-gray-400 mb-6">
                Experience the rhythm of urban culture with
                freestyle battles, workshops, and unforgettable energy.
              </p>

              <div className="flex gap-3">

                {[
                  {
                    icon: <Instagram size={16} />,
                    link: "https://www.instagram.com/",
                  },
                  {
                    icon: <Youtube size={16} />,
                    link: "https://www.youtube.com/",
                  },
                  {
                    icon: <Facebook size={16} />,
                    link: "https://www.facebook.com/",
                  },
                  {
                    icon: <Music2 size={16} />,
                    link: "https://open.spotify.com/",
                  },
                ].map((item, i) => (

                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black hover:scale-110 transition duration-300"
                  >
                    {item.icon}
                  </a>
                ))}

              </div>
            </div>

            {/* CONTACT */}
            <div className="animate-fadeUp delay-200">

              <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
                Contact
              </h3>

              <div className="space-y-5 text-sm">

                <a
                  href="tel:167712444227"
                  className="flex items-start gap-4 group"
                >
                  <Phone
                    size={18}
                    className="text-[#ffb347] mt-[2px]"
                  />

                  <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300">
                    +1 677 124 44227
                  </span>
                </a>

                <a
                  href="https://maps.google.com/?q=184 Main Collins Street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <MapPin
                    size={18}
                    className="text-[#ffb347] mt-[2px]"
                  />

                  <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300 leading-relaxed">
                    184 Main Collins Street,
                    <br />
                    New York, USA
                  </span>
                </a>

                <a
                  href="mailto:vibez@example.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail
                    size={18}
                    className="text-[#ffb347] mt-[2px]"
                  />

                  <span className="text-gray-400 group-hover:text-[#ffb347] transition duration-300">
                    vibez@example.com
                  </span>
                </a>

              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="animate-fadeUp delay-300">

              <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
                Quick Links
              </h3>

              <div className="flex flex-col gap-4 text-sm">

                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#ffb347] transition duration-300"
                >
                  Home
                </Link>

                <Link
                  to="/hiphop"
                  className="text-gray-400 hover:text-[#ffb347] transition duration-300"
                >
                  Hip Hop
                </Link>

                <Link
                  to="/battle"
                  className="text-gray-400 hover:text-[#ffb347] transition duration-300"
                >
                  Dance Battle
                </Link>

                <Link
                  to="/crew"
                  className="text-gray-400 hover:text-[#ffb347] transition duration-300"
                >
                  Crew Competition
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#ffb347] transition duration-300"
                >
                  Contact
                </Link>

              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="animate-fadeUp delay-500">

              <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
                Newsletter
              </h3>

              <p className="text-sm text-gray-400 leading-[2] mb-6">
                Subscribe and stay updated with
                our latest dance events.
              </p>

              <div className="relative">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-12 bg-white/5 border border-white/10 px-5 text-sm text-white outline-none focus:border-[#ffb347] transition duration-300"
                />

                <button
                  onClick={() => alert("Subscribed Successfully")}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#ffb347] text-xs uppercase tracking-[0.2em] hover:translate-x-1 transition duration-300"
                >
                  Send →
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative z-10 py-6 px-5 border-t border-white/5">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">

            <p className="text-xs sm:text-sm text-gray-500 tracking-[0.15em] uppercase">
              © 2026 Vibez Dance Studio
            </p>

            <p className="text-xs sm:text-sm text-gray-600">
              Designed For Urban Dance Culture
            </p>

          </div>
        </div>
      </footer>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.12);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(70px);
            letter-spacing: 0.2em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.08em;
          }
        }

        @keyframes fadeText {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slowZoom {
          animation: slowZoom 12s ease-in-out infinite alternate;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-title {
          animation: titleReveal 1.2s ease forwards;
        }

        .animate-text {
          animation: fadeText 1.5s ease forwards;
        }

        .animate-btn {
          animation: buttonFade 1.8s ease forwards;
        }

        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Studio;