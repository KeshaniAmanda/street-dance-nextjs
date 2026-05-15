import React from "react";
import {
  ArrowRight,
  Play,
  Star,
  Trophy,
  Heart,
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Music2,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const PoleDance = () => {
  const navigate = useNavigate();

  const classes = [
    {
      title: "BEGINNER FLOW",
      level: "Starter",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "POWER MOVES",
      level: "Intermediate",
      img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AERIAL STYLE",
      level: "Advanced",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const trainers = [
    {
      name: "EMMA RAY",
      role: "Pole Artist",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "LISA MOON",
      role: "Flexibility Coach",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "SOFIA KING",
      role: "Aerial Performer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="w-full bg-[#050505] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        {/* ORANGE GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.5em] text-orange-400 text-xs mb-5 animate-fadeUp">
            Elegant Movement Studio
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.9] animate-title">
            POLE <br />
            DANCE
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-gray-300 leading-[2] text-sm sm:text-base animate-text">
            Discover confidence, elegance, strength, and artistic
            expression through modern pole dance choreography.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-btn">

            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-orange-400 hover:bg-orange-300 transition duration-500 text-black uppercase tracking-[0.25em] text-xs font-bold"
            >
              Join Class
            </button>

            <button
              onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
              className="px-8 py-4 border border-white/20 hover:bg-orange-400 hover:text-black transition duration-500 uppercase tracking-[0.25em] text-xs"
            >
              Explore More
            </button>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10">

        {[
          ["15+", "TRAINERS"],
          ["8K", "STUDENTS"],
          ["30+", "CLASSES"],
          ["50+", "SHOWS"],
        ].map((item, i) => (

          <div
            key={i}
            className="py-10 text-center border-white/10 md:border-r last:border-r-0"
          >

            <h2 className="text-4xl md:text-5xl font-black text-orange-400 mb-3">
              {item[0]}
            </h2>

            <p className="tracking-[0.3em] text-xs text-gray-400">
              {item[1]}
            </p>

          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative group overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[550px] object-cover group-hover:scale-110 transition duration-[2000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          </div>

          <div>

            <p className="uppercase tracking-[0.4em] text-orange-400 text-xs mb-5">
              ABOUT US
            </p>

            <h2 className="text-4xl md:text-6xl font-light uppercase leading-[1.1] mb-8">
              MOVE WITH <span className="font-black">CONFIDENCE</span>
            </h2>

            <p className="text-gray-400 leading-[2] mb-8">
              Our pole dance programs combine fitness,
              flexibility, choreography, and artistic movement
              in a luxurious modern environment.
            </p>

            <div className="space-y-5">

              {[
                "Professional Instructors",
                "Luxury Dance Studio",
                "Strength Training",
                "Creative Choreo Sessions",
              ].map((item, i) => (

                <div key={i} className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-full bg-orange-400 text-black flex items-center justify-center">
                    <Star size={18} />
                  </div>

                  <p className="uppercase tracking-[0.2em] text-sm">
                    {item}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 px-6 md:px-16 bg-[#0b0b0b]">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-orange-400 text-xs mb-5">
            Pole Programs
          </p>

          <h2 className="text-4xl md:text-6xl font-light uppercase">
            OUR CLASSES
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {classes.map((item, index) => (

            <div
              key={index}
              className="relative h-[500px] rounded-[30px] overflow-hidden group"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 p-8">

                <p className="uppercase tracking-[0.3em] text-orange-400 text-xs mb-3">
                  {item.level}
                </p>

                <h3 className="text-3xl font-light uppercase mb-5">
                  {item.title}
                </h3>

                <button className="flex items-center gap-2 uppercase tracking-[0.2em] text-xs hover:text-orange-400 transition">
                  Explore <ArrowRight size={14} />
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 text-center">

          <button
            onClick={() =>
              window.open(
                "https://player.vimeo.com/video/30619461",
                "_blank"
              )
            }
            className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mx-auto hover:bg-orange-400 hover:text-black transition duration-500 group"
          >

            <Play
              size={30}
              className="ml-1 group-hover:scale-110 transition"
            />

          </button>

          <h2 className="text-4xl md:text-6xl font-light uppercase mt-10">
            FEEL THE <span className="font-black">ENERGY</span>
          </h2>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16">

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {[
            {
              icon: <Heart size={40} />,
              title: "PASSION",
            },
            {
              icon: <Sparkles size={40} />,
              title: "ELEGANCE",
            },
            {
              icon: <Trophy size={40} />,
              title: "PERFORMANCE",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-[30px] p-10 text-center hover:border-orange-400/50 transition duration-500"
            >

              <div className="w-20 h-20 rounded-full bg-orange-400 text-black flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl uppercase font-light">
                {item.title}
              </h3>

            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 md:px-16 bg-[#0b0b0b]">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-orange-400 text-xs mb-5">
            Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-light uppercase">
            STUDIO MOMENTS
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {gallery.map((img, i) => (

            <div
              key={i}
              className="overflow-hidden rounded-[25px] group"
            >

              <img
                src={img}
                alt=""
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-24 px-6 md:px-16">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-orange-400 text-xs mb-5">
            Trainers
          </p>

          <h2 className="text-4xl md:text-6xl font-light uppercase">
            OUR TEAM
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {trainers.map((item, index) => (

            <div
              key={index}
              className="relative h-[500px] overflow-hidden rounded-[30px] group"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8">

                <p className="uppercase tracking-[0.3em] text-orange-400 text-xs mb-3">
                  {item.role}
                </p>

                <h3 className="text-3xl font-light uppercase">
                  {item.name}
                </h3>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-16 bg-orange-400 text-black text-center">

        <Trophy size={50} className="mx-auto mb-6" />

        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
          JOIN OUR STUDIO
        </h2>

        <p className="max-w-2xl mx-auto leading-[2] mb-10">
          Start your pole dance journey today and
          discover strength, confidence, and artistic freedom.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="px-10 py-4 bg-black text-white uppercase tracking-[0.2em] text-xs hover:scale-105 transition duration-500"
        >
          REGISTER NOW
        </button>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#050505] text-gray-300 overflow-hidden">

        {/* BG GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

        {/* TOP */}
        <div className="relative z-10 border-b border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-14 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ABOUT */}
            <div className="animate-fadeUp">

              <h3 className="text-white text-lg font-semibold uppercase tracking-[0.2em] mb-6">
                Vibez
              </h3>

              <p className="text-sm leading-[2] text-gray-400 mb-6">
                Experience the rhythm of urban culture with freestyle battles,
                street performances, dance workshops, and unforgettable energy.
              </p>

              {/* SOCIALS */}
              <div className="flex gap-3">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <Youtube size={16} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffb347] hover:text-black transition duration-300"
                >
                  <Music2 size={16} />
                </a>

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
                Subscribe and stay updated with our latest dance events,
                freestyle battles, and workshops.
              </p>

              {/* INPUT */}
              <div className="relative">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-12 bg-white/5 border border-white/10 px-5 text-sm text-white outline-none focus:border-[#ffb347] transition duration-300"
                />

                <button
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#ffb347] text-xs uppercase tracking-[0.2em] hover:translate-x-1 transition duration-300"
                >
                  Send →
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative z-10 py-6 px-6 border-t border-white/5">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-xs sm:text-sm text-gray-500 tracking-[0.15em] uppercase">
              © 2026 Vibez Dance Studio
            </p>

            <p className="text-xs sm:text-sm text-gray-600">
              Designed For Urban Dance Culture
            </p>

          </div>
        </div>

        {/* ANIMATIONS */}
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
      </footer>
    </div>
  );
};

export default PoleDance;