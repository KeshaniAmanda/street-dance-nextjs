import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  ArrowRight,
  Star,
  Music2,
  Trophy,
  Heart,
  Users,
  ChevronRight,
  X,
  Flame,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Footer from "./Hero10";

const ModernDance = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  // PROGRAMS
  const programs = [
    {
      title: "Contemporary Flow",
      desc: "Express emotion through graceful movement and artistic choreography.",
      img: "https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg",
    },

    {
      title: "Stage Performance",
      desc: "Modern stage performance with cinematic rhythm and creativity.",
      img: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
    },

    {
      title: "Creative Motion",
      desc: "Advanced freestyle movement and modern artistic expression.",
      img: "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg",
    },
  ];

  // GALLERY
  const gallery = [
    "https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg",

    "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",

    "https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg",

    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  ];

  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      {/* VIDEO MODAL */}

      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl px-4"
        >

          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition"
          >
            <X size={34} />
          </button>

          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="w-full max-w-6xl rounded-[35px] overflow-hidden border border-orange-500/20 shadow-[0_0_80px_rgba(255,115,0,0.25)]"
          >

            <div className="relative pt-[56.25%]">

              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ZWk19OVon2k?autoplay=1"
                title="Modern Dance"
                allow="autoplay"
                allowFullScreen
              ></iframe>

            </div>

          </motion.div>

        </motion.div>
      )}

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}

        <img
          src="https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/75"></div>

        {/* ORANGE LIGHT */}

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-yellow-500/20 blur-[140px] rounded-full"></div>

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-5"
        >

          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 backdrop-blur-xl px-5 py-2 rounded-full mb-7">

            <Flame size={15} className="text-orange-400" />

            <span className="uppercase tracking-[4px] text-[11px] text-orange-300">
              Urban Movement
            </span>

          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="uppercase font-black leading-[0.9] text-[60px] sm:text-[100px] md:text-[170px]"
          >

            Modern
            <br />
            Dance

          </motion.h1>

          <p className="max-w-[760px] mx-auto mt-8 text-[#d7d7d7] leading-[2] text-sm md:text-lg">

            Discover cinematic choreography, emotional rhythm,
            modern movement and powerful stage performance.

          </p>

          <div className="flex items-center justify-center gap-5 flex-wrap mt-10">

            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:scale-105 transition duration-300 px-9 py-4 rounded-full uppercase tracking-[3px] text-xs font-bold shadow-[0_0_40px_rgba(255,115,0,0.5)]"
            >
              Join Classes
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="border border-white/20 hover:border-orange-400 hover:text-orange-400 transition duration-300 px-9 py-4 rounded-full uppercase tracking-[3px] text-xs flex items-center gap-3 backdrop-blur-md"
            >

              <Play size={18} />

              Watch Video

            </button>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
            alt=""
            className="rounded-[40px] w-full h-[680px] object-cover"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -bottom-8 -right-8 bg-black/60 border border-orange-500/20 backdrop-blur-xl p-8 rounded-[30px]"
          >

            <h2 className="text-5xl font-black text-orange-400">
              10+
            </h2>

            <p className="uppercase tracking-[3px] text-xs mt-2 text-white">
              Years Experience
            </p>

          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            About Studio
          </p>

          <h2 className="uppercase font-black leading-[1] text-[45px] md:text-[85px]">

            Feel
            <br />
            Every
            <br />
            Motion

          </h2>

          <p className="text-[#b5b5b5] leading-[2] mt-8 text-sm md:text-base">

            We combine creativity, movement and storytelling
            to create unforgettable modern dance experiences.

          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            {[
              {
                icon: <Heart size={28} />,
                title: "Creative Flow",
              },

              {
                icon: <Sparkles size={28} />,
                title: "Modern Style",
              },

              {
                icon: <Users size={28} />,
                title: "Team Training",
              },

              {
                icon: <Music2 size={28} />,
                title: "Live Rhythm",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white/[0.04] border border-white/10 rounded-[28px] p-6 hover:border-orange-400/50 transition duration-300 backdrop-blur-xl"
              >

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(255,115,0,0.5)]">
                  {item.icon}
                </div>

                <h3 className="uppercase font-bold text-lg">
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* PROGRAMS */}

      <section className="py-28 bg-[#0b1023] px-5 md:px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            Dance Programs
          </p>

          <h2 className="uppercase font-black text-[40px] md:text-[90px]">
            Our Classes
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-20">

          {programs.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -15,
              }}
              className="group bg-[#11182f]/80 rounded-[35px] overflow-hidden border border-white/10 hover:border-orange-400/50 transition duration-500"
            >

              <div className="overflow-hidden h-[430px]">

                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-[2000ms]"
                />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-2 text-orange-400 mb-5">
                  <Star size={15} />
                  <Star size={15} />
                  <Star size={15} />
                </div>

                <h3 className="uppercase text-3xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-[#b5b5b5] leading-[1.9] text-sm">
                  {item.desc}
                </p>

                <button className="flex items-center gap-3 mt-7 uppercase tracking-[3px] text-xs text-orange-400 hover:translate-x-2 transition duration-300">

                  Explore

                  <ChevronRight size={16} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-28 grid md:grid-cols-3 gap-8">

        {[
          ["15K", "Dance Students"],
          ["80+", "Stage Shows"],
          ["25+", "Awards Won"],
        ].map((item, i) => (

          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center hover:border-orange-400/40 transition duration-300 backdrop-blur-xl"
          >

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black flex items-center justify-center mx-auto mb-7 shadow-[0_0_40px_rgba(255,115,0,0.4)]">

              <Trophy size={34} />

            </div>

            <h2 className="text-6xl font-black mb-4">
              {item[0]}
            </h2>

            <p className="uppercase tracking-[4px] text-xs text-[#b5b5b5]">
              {item[1]}
            </p>

          </motion.div>

        ))}

      </section>

      {/* GALLERY */}

      <section className="py-28 bg-[#0b1023] px-5 md:px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            Gallery
          </p>

          <h2 className="uppercase font-black text-[40px] md:text-[90px]">
            Dance Moments
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {gallery.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-[30px] group relative border border-white/10"
            >

              <img
                src={img}
                alt=""
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 via-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="relative py-32 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 px-5"
        >

          <h2 className="uppercase text-black font-black leading-[1] text-[45px] md:text-[100px]">

            Dance
            <br />
            Without Limits

          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-black/80 leading-[2]">

            Join our modern dance academy and explore movement,
            rhythm and artistic freedom.

          </p>

          <button
            onClick={() => navigate("/signup")}
            className="mt-10 bg-black text-white hover:bg-white hover:text-black transition duration-300 px-10 py-5 rounded-full uppercase tracking-[4px] text-xs font-bold flex items-center gap-3 mx-auto"
          >

            Start Now

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </section>

      {/* FOOTER */}

      <Footer />

      {/* CUSTOM CSS */}

      <style>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.15);
          }
        }

        .animate-slowZoom {
          animation: slowZoom 18s linear infinite alternate;
        }
      `}</style>

    </div>
  );
};

export default ModernDance;