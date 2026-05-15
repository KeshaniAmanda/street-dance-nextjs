import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Music2,
  Users,
  Trophy,
  ArrowRight,
  X,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

const classes = [
  {
    title: "Street Groove",
    desc: "Powerful street choreography sessions.",
    img: "https://images.unsplash.com/photo-1508700115892-45ecbd05ae2d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Urban Choreo",
    desc: "Modern urban dance combinations.",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Battle Training",
    desc: "Freestyle and battle performance training.",
    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
  },
];

const HipHop = () => {
  const navigate = useNavigate();

  const [showVideo, setShowVideo] = useState(false);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full overflow-hidden bg-[#050505] text-white">

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center px-4">

          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#ff7b00] transition-all duration-300"
          >
            <X size={35} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl rounded-[20px] overflow-hidden shadow-2xl border border-[#ff7b00]/30"
          >

            <div className="relative pt-[56.25%]">

              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ZWk19OVon2k?autoplay=1"
                title="Hip Hop Dance"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

            </div>

          </motion.div>

        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1600&auto=format&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        {/* ORANGE GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff7b00]/20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-5"
        >

          <p className="uppercase tracking-[6px] text-[#ff7b00] text-xs mb-5">
            Feel The Rhythm
          </p>

          <h1 className="uppercase font-black leading-[0.9] text-[48px] sm:text-[70px] md:text-[130px]">
            Hip Hop
            <br />
            Movement
          </h1>

          <p className="max-w-[700px] mx-auto mt-8 text-[#d0d0d0] leading-[2] text-[15px] md:text-[18px]">
            Experience freestyle culture, choreography and powerful urban
            movement with our dance crew.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">

            <button
              onClick={goHome}
              className="bg-[#ff7b00] hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full uppercase text-xs tracking-[3px] font-semibold shadow-[0_0_40px_rgba(255,123,0,0.3)]"
            >
              Join Classes
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="border border-white/20 hover:border-[#ff7b00] hover:text-[#ff7b00] transition-all duration-300 px-8 py-4 rounded-full uppercase text-xs tracking-[3px] flex items-center gap-3 backdrop-blur-sm"
            >

              <Play size={16} />

              Watch Video

            </button>

          </div>

        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >

          <div className="absolute -inset-5 border border-[#ff7b00]/20 rounded-[35px]"></div>

          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="relative w-full h-[650px] object-cover rounded-[30px]"
          />

        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-[#ff7b00] text-xs mb-5">
            About Us
          </p>

          <h2 className="uppercase leading-[1] font-black text-[40px] sm:text-[55px] md:text-[75px]">
            Live The
            <br />
            Street Culture
          </h2>

          <p className="text-[#b5b5b5] leading-[2] mt-8 text-[15px]">
            Our hip hop community is built around passion, freestyle,
            choreography and energetic performance training.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            <div className="bg-[#111111] border border-white/10 p-7 rounded-[30px] hover:border-[#ff7b00] transition-all duration-300 group">

              <Music2
                className="text-[#ff7b00] mb-5 group-hover:scale-110 transition"
                size={34}
              />

              <h3 className="uppercase font-black text-2xl mb-3">
                Urban Music
              </h3>

              <p className="text-[#9f9f9f] text-sm leading-[1.9]">
                Dance with rhythm and powerful hip hop energy.
              </p>

            </div>

            <div className="bg-[#111111] border border-white/10 p-7 rounded-[30px] hover:border-[#ff7b00] transition-all duration-300 group">

              <Users
                className="text-[#ff7b00] mb-5 group-hover:scale-110 transition"
                size={34}
              />

              <h3 className="uppercase font-black text-2xl mb-3">
                Dance Crew
              </h3>

              <p className="text-[#9f9f9f] text-sm leading-[1.9]">
                Train together and perform with our dance crew.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* CLASSES */}
      <section className="bg-[#0d0d0d] py-24 px-5 md:px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#ff7b00] text-xs mb-5">
            Our Programs
          </p>

          <h2 className="uppercase font-black text-[40px] sm:text-[55px] md:text-[80px]">
            Dance Classes
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {classes.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-black rounded-[35px] overflow-hidden border border-white/10 hover:border-[#ff7b00] transition-all duration-500"
            >

              <div className="overflow-hidden h-[360px] relative">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

              </div>

              <div className="p-8">

                <h3 className="uppercase text-3xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-[#b5b5b5] leading-[1.9] text-sm mb-7">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 uppercase tracking-[3px] text-sm text-[#ff7b00]">

                  Explore More

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-24 grid md:grid-cols-3 gap-8">

        {[
          ["500+", "Active Dancers"],
          ["45+", "Stage Shows"],
          ["20+", "Dance Battles"],
        ].map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-[#111111] rounded-[35px] p-10 text-center border border-white/10 hover:border-[#ff7b00] transition-all duration-300"
          >

            <Trophy
              className="mx-auto text-[#ff7b00] mb-6"
              size={42}
            />

            <h2 className="text-6xl font-black mb-3">
              {item[0]}
            </h2>

            <p className="uppercase tracking-[4px] text-[#b5b5b5] text-sm">
              {item[1]}
            </p>

          </motion.div>

        ))}

      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#0d0d0d] px-5 md:px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <Sparkles size={40} />,
              title: "Freestyle",
            },
            {
              icon: <Music2 size={40} />,
              title: "Urban Beats",
            },
            {
              icon: <Users size={40} />,
              title: "Dance Community",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="bg-[#111111] border border-white/10 rounded-[35px] p-10 text-center hover:border-[#ff7b00] transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-[#ff7b00] text-black flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl uppercase font-black">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="relative bg-[#ff7b00] py-24 text-center px-5 overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_60%)]"></div>

        <div className="relative z-10">

          <h2 className="uppercase text-black font-black leading-[1] text-[45px] sm:text-[60px] md:text-[100px]">
            Dance Beyond Limits
          </h2>

          <button
            onClick={goHome}
            className="mt-10 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 px-10 py-5 rounded-full uppercase tracking-[3px] text-sm font-semibold"
          >
            Start Training
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative bg-black text-gray-300 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ff7b00]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ABOUT */}
            <div>

              <h3 className="text-white text-xl font-black uppercase tracking-[0.2em] mb-6">
                Vibez
              </h3>

              <p className="text-sm leading-[2] text-gray-400 mb-6">
                Experience the rhythm of urban culture with freestyle battles,
                street performances and unforgettable energy.
              </p>

              <div className="flex gap-3">

                {[Instagram, Youtube, Facebook].map((Icon, i) => (

                  <a
                    key={i}
                    href="/"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff7b00] hover:text-black transition duration-300"
                  >
                    <Icon size={16} />
                  </a>

                ))}

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-white text-xl font-black uppercase tracking-[0.2em] mb-6">
                Contact
              </h3>

              <div className="space-y-5 text-sm">

                <div className="flex gap-4">
                  <Phone size={18} className="text-[#ff7b00]" />
                  <span>+1 677 124 44227</span>
                </div>

                <div className="flex gap-4">
                  <MapPin size={18} className="text-[#ff7b00]" />
                  <span>New York, USA</span>
                </div>

                <div className="flex gap-4">
                  <Mail size={18} className="text-[#ff7b00]" />
                  <span>vibez@example.com</span>
                </div>

              </div>

            </div>

            {/* LINKS */}
            <div>

              <h3 className="text-white text-xl font-black uppercase tracking-[0.2em] mb-6">
                Quick Links
              </h3>

              <div className="flex flex-col gap-4 text-sm">

                <Link to="/" className="hover:text-[#ff7b00] transition">
                  Home
                </Link>

                <Link
                  to="/hiphop"
                  className="hover:text-[#ff7b00] transition"
                >
                  Hip Hop
                </Link>

                <Link
                  to="/contact"
                  className="hover:text-[#ff7b00] transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* NEWSLETTER */}
            <div>

              <h3 className="text-white text-xl font-black uppercase tracking-[0.2em] mb-6">
                Newsletter
              </h3>

              <p className="text-sm text-gray-400 mb-6 leading-[2]">
                Subscribe for updates and dance workshops.
              </p>

              <div className="relative">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-12 bg-white/5 border border-white/10 px-5 text-sm text-white outline-none focus:border-[#ff7b00]"
                />

                <button
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#ff7b00] text-xs uppercase tracking-[0.2em]"
                >
                  Send
                </button>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 py-6 text-center text-sm text-gray-500">
          © 2026 Vibez Dance Studio
        </div>

      </footer>

    </div>
  );
};

export default HipHop;