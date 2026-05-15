import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  Crown,
  Music,
  Heart,
  X,
  Trophy,
  Users,
  Flame,
  Camera,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Hero10 from "./Hero10";

const Ballet = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const classes = [
    {
      title: "Classic Ballet",
      text: "Elegant posture, graceful movement and timeless choreography.",
    },
    {
      title: "Stage Performance",
      text: "Professional theater performance and artistic expression.",
    },
    {
      title: "Elite Training",
      text: "Advanced ballet training for flexibility and balance.",
    },
  ];

  const showcaseImages = [
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="bg-[#050505] text-white overflow-hidden">

      {/* VIDEO MODAL */}

      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center px-4 backdrop-blur-xl"
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-5 right-5 text-white hover:text-orange-400 duration-300"
          >
            <X size={38} />
          </button>

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl rounded-[30px] overflow-hidden border border-white/10"
          >
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/5y6g0gO3n8E?autoplay=1"
                title="Ballet"
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
          src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* BACKGROUND EFFECT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,115,0,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]"></div>

        {/* FLOATING BALLS */}

        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[15%] left-[10%] w-52 h-52 rounded-full bg-orange-500/10 blur-[80px]"
        />

        <motion.div
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-white/5 blur-[100px]"
        />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[8px] text-orange-400 text-xs mb-6">
              Elegant Movement
            </p>

            <h1 className="text-[65px] sm:text-[90px] md:text-[140px] font-black leading-[0.9] uppercase">
              Ballet
            </h1>

            <p className="text-[#cfcfcf] leading-[2] mt-8 max-w-[600px] text-sm md:text-base">
              Experience the beauty of ballet through graceful movement,
              emotional storytelling and timeless artistic performance.
            </p>

            <div className="flex items-center gap-5 flex-wrap mt-10">

              <button
                onClick={() => navigate("/signup")}
                className="bg-orange-500 hover:bg-white hover:text-black duration-300 px-9 py-4 rounded-full uppercase tracking-[3px] text-xs font-bold shadow-[0_0_40px_rgba(255,115,0,0.4)]"
              >
                Join Ballet
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="border border-white/20 hover:border-orange-400 hover:text-orange-400 duration-300 px-9 py-4 rounded-full uppercase tracking-[3px] text-xs flex items-center gap-3"
              >
                <Play size={18} />
                Watch Show
              </button>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="relative w-full h-[650px] rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

              {/* CIRCLE */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[500px] h-[500px] border border-orange-400/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[350px] h-[350px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* CENTER */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="w-28 h-28 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-[0_0_50px_rgba(255,115,0,0.5)]"
                >
                  <Crown size={50} />
                </motion.div>

                <h2 className="text-5xl font-black uppercase mt-8">
                  Grace
                </h2>

                <p className="text-[#bdbdbd] mt-6 leading-[2] max-w-[350px] text-sm">
                  Timeless ballet performance with artistic expression,
                  rhythm and elegance.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {classes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10"
            >

              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[70px] rounded-full"></div>

              <div className="w-16 h-16 rounded-full bg-orange-500 text-black flex items-center justify-center mb-8">
                {i === 0 && <Sparkles size={28} />}
                {i === 1 && <Star size={28} />}
                {i === 2 && <Music size={28} />}
              </div>

              <h2 className="text-3xl font-black uppercase mb-5">
                {item.title}
              </h2>

              <p className="text-[#bcbcbc] leading-[2] text-sm">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* NEW SHOWCASE SECTION */}

      <section className="py-28 bg-[#0b0b0b] px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            Performance Gallery
          </p>

          <h2 className="text-[45px] md:text-[90px] font-black uppercase">
            Stage Moments
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {showcaseImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] h-[450px]"
            >

              <img
                src={img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-[2000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center mb-4">
                  <Camera size={24} />
                </div>

                <h3 className="text-2xl font-black uppercase">
                  Ballet Art
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <img
              src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] h-[700px] w-full object-cover"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-6">
              Ballet Experience
            </p>

            <h2 className="text-[45px] md:text-[80px] font-black uppercase leading-[1]">
              Move
              <br />
              With
              <br />
              Passion
            </h2>

            <p className="text-[#bdbdbd] leading-[2] mt-8">
              Our ballet academy combines graceful movement, emotional
              storytelling and world-class choreography to create unforgettable
              performances.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              {[
                {
                  icon: <Trophy size={28} />,
                  title: "Award Shows",
                },
                {
                  icon: <Users size={28} />,
                  title: "Team Training",
                },
                {
                  icon: <Flame size={28} />,
                  title: "Creative Energy",
                },
                {
                  icon: <Heart size={28} />,
                  title: "Passionate Art",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                  }}
                  className="bg-white/[0.03] border border-white/10 rounded-[28px] p-7"
                >

                  <div className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="uppercase font-black text-lg">
                    {item.title}
                  </h3>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-28 bg-[#0b0b0b] px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            ["12+", "Years Experience"],
            ["50+", "Performances"],
            ["20K", "Students"],
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.04,
              }}
              className="text-center border border-white/10 rounded-[35px] bg-white/[0.03] p-12"
            >

              <motion.h1
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-7xl font-black text-orange-400"
              >
                {item[0]}
              </motion.h1>

              <p className="uppercase tracking-[4px] text-xs text-[#bcbcbc] mt-5">
                {item[1]}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="relative py-32 overflow-hidden text-center">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 px-6"
        >

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-10"
          >
            <Heart size={40} />
          </motion.div>

          <h2 className="text-black uppercase text-[50px] md:text-[100px] font-black leading-[0.95]">
            Feel
            <br />
            The Art
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-black/80 leading-[2]">
            Step into the world of ballet and experience graceful movement,
            elegance and unforgettable stage artistry.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 bg-black text-white hover:bg-white hover:text-black duration-300 px-10 py-5 rounded-full uppercase tracking-[4px] text-xs font-bold flex items-center gap-3 mx-auto"
          >

            Start Journey

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </section>

      {/* FOOTER */}

      <Hero10 />

    </div>
  );
};

export default Ballet;