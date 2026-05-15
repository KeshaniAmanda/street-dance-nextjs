import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Music2,
  Play,
  ArrowRight,
  Star,
  Heart,
  Trophy,
  Sparkles,
  Crown,
  Volume2,
  Radio,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Hero10 from "./Hero10";

const Latin = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const styles = [
    {
      title: "Salsa Fusion",
      desc: "Powerful spins, partner connection and energetic footwork.",
      img: "https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg",
    },

    {
      title: "Latin Fire",
      desc: "Fast rhythm, stage confidence and expressive movement.",
      img: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
    },

    {
      title: "Night Performance",
      desc: "Professional choreography with vibrant latin energy.",
      img: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
    },
  ];

  const gallery = [
    "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",

    "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg",

    "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg",

    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  ];

  return (
    <div className="bg-[#080808] text-white overflow-hidden">

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
            className="w-full max-w-5xl rounded-[30px] overflow-hidden border border-orange-500/20"
          >

            <div className="relative pt-[56.25%]">

              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/a0m0BqG6h4w?autoplay=1"
                title="Latin Dance"
                allow="autoplay"
                allowFullScreen
              ></iframe>

            </div>

          </motion.div>

        </motion.div>
      )}

      {/* HERO */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <img
          src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-orange-950/70"></div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full bg-orange-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[140px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[8px] text-orange-400 text-xs mb-6">
              Passion & Rhythm
            </p>

            <h1 className="text-[70px] sm:text-[100px] md:text-[150px] font-black uppercase leading-[0.9]">
              Latin
              <br />
              Dance
            </h1>

            <p className="text-[#cfcfcf] leading-[2] mt-8 max-w-[600px]">
              Feel the energy of salsa, latin fusion and vibrant stage
              choreography with powerful movement and rhythm.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-10">

              <button
                onClick={() => navigate("/signup")}
                className="bg-orange-500 hover:bg-white hover:text-black duration-300 px-9 py-4 rounded-full uppercase tracking-[3px] text-xs font-bold shadow-[0_0_40px_rgba(255,115,0,0.4)]"
              >
                Join Now
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

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="grid grid-cols-2 gap-6">

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg"
                alt=""
                className="rounded-[35px] h-[260px] object-cover w-full"
              />

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg"
                alt=""
                className="rounded-[35px] h-[380px] object-cover w-full mt-16"
              />

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg"
                alt=""
                className="rounded-[35px] h-[380px] object-cover w-full -mt-16"
              />

              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                alt=""
                className="rounded-[35px] h-[260px] object-cover w-full"
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-7">

          {[
            {
              icon: <Flame size={28} />,
              title: "Hot Moves",
            },

            {
              icon: <Music2 size={28} />,
              title: "Latin Beats",
            },

            {
              icon: <Heart size={28} />,
              title: "Passion",
            },

            {
              icon: <Sparkles size={28} />,
              title: "Performance",
            },
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -12,
              }}
              className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >

              <div className="w-16 h-16 rounded-full bg-orange-500 text-black flex items-center justify-center mb-7">
                {item.icon}
              </div>

              <h2 className="text-2xl font-black uppercase">
                {item.title}
              </h2>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROGRAMS */}

      <section className="py-28 bg-[#101010] px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            Dance Styles
          </p>

          <h2 className="text-[45px] md:text-[90px] font-black uppercase">
            Programs
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-20">

          {styles.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -15,
              }}
              className="rounded-[35px] overflow-hidden bg-white/[0.03] border border-white/10"
            >

              <img
                src={item.img}
                alt=""
                className="w-full h-[420px] object-cover"
              />

              <div className="p-8">

                <div className="flex gap-2 text-orange-400 mb-5">
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </div>

                <h2 className="text-3xl font-black uppercase mb-5">
                  {item.title}
                </h2>

                <p className="text-[#bcbcbc] leading-[2] text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg"
            alt=""
            className="rounded-[40px] h-[700px] object-cover w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
              Dance Experience
            </p>

            <h2 className="text-[45px] md:text-[90px] font-black uppercase leading-[0.95]">
              Move
              <br />
              With
              <br />
              Rhythm
            </h2>

            <p className="text-[#bcbcbc] leading-[2] mt-8">
              Latin dance combines explosive rhythm, confidence,
              performance energy and unforgettable choreography.
            </p>

            <div className="space-y-6 mt-10">

              {[
                "Professional Choreography",
                "Partner Dance Training",
                "Stage Performance",
                "Advanced Rhythm Sessions",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center">
                    <ArrowRight size={18} />
                  </div>

                  <h3 className="uppercase font-bold tracking-[2px]">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-28 bg-[#101010] px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            ["20K", "Students"],
            ["120+", "Shows"],
            ["35+", "Awards"],
            ["15+", "Years"],
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
              }}
              className="text-center rounded-[35px] border border-white/10 bg-white/[0.03] p-12"
            >

              <h2 className="text-6xl font-black text-orange-400">
                {item[0]}
              </h2>

              <p className="uppercase tracking-[4px] text-xs text-[#bcbcbc] mt-5">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section className="py-28 px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-orange-400 text-xs mb-5">
            Dance Gallery
          </p>

          <h2 className="text-[45px] md:text-[90px] font-black uppercase">
            Latin Energy
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {gallery.map((img, i) => (

            <motion.img
              key={i}
              whileHover={{
                scale: 1.04,
              }}
              src={img}
              alt=""
              className="rounded-[35px] h-[430px] object-cover w-full"
            />

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

          <div className="flex justify-center gap-5 mb-10">

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center"
            >
              <Radio size={34} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center"
            >
              <Volume2 size={34} />
            </motion.div>

          </div>

          <h2 className="text-black uppercase text-[50px] md:text-[110px] font-black leading-[0.95]">
            Feel
            <br />
            The Beat
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-black/80 leading-[2]">
            Discover vibrant latin movement, explosive choreography
            and unforgettable performance energy.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="mt-10 bg-black text-white hover:bg-white hover:text-black duration-300 px-10 py-5 rounded-full uppercase tracking-[4px] text-xs font-bold flex items-center gap-3 mx-auto"
          >

            Start Dancing

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </section>

      {/* FOOTER */}

      <Hero10 />

    </div>
  );
};

export default Latin;