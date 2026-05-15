import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Flame,
  Play,
  ArrowUp,
} from "lucide-react";

import Hero10 from "./Hero10";

// IMAGES
import tc1 from "../assets/tc1.jpg";
import tc2 from "../assets/tc2.jpg";
import tc3 from "../assets/tc3.jpg";
import tc4 from "../assets/tc4.jpg";
import tc5 from "../assets/tc5.jpg";
import tc6 from "../assets/tc6.jpg";
import tc7 from "../assets/tc7.jpg";
import tc8 from "../assets/tc8.jpg";
import tc9 from "../assets/tc9.jpg";
import tc10 from "../assets/tc10.jpg";
import tc11 from "../assets/tc11.jpg";
import tc12 from "../assets/tc12.jpg";

const data = [
  { img: tc5, title: "GROUP MOVE", category: "Urban" },
  { img: tc1, title: "INSPIRATIONAL MOVE", category: "Kids" },
  { img: tc9, title: "FLAMENCO", category: "Latino" },

  { img: tc7, title: "MOON DANCE", category: "Kids" },
  { img: tc3, title: "DANCE ACT", category: "Latino" },
  { img: tc8, title: "MODERN BALLET", category: "Urban" },

  { img: tc10, title: "GROUP DANCE", category: "Urban" },
  { img: tc4, title: "BALLET’S FINEST", category: "Kids" },
  { img: tc6, title: "WANDERLUST", category: "Latino" },

  { img: tc11, title: "INSPIRATIONAL MOVE", category: "Kids" },
  { img: tc2, title: "GROUP DANCE", category: "Urban" },
  { img: tc12, title: "DANCE ACT", category: "Latino" },
];

export default function ClassicLayout() {
  const [filter, setFilter] = useState("All");
  const [showTop, setShowTop] = useState(false);

  const navigate = useNavigate();

  // SHOW TOP BUTTON
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.category === filter);

  // TOP BUTTON
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // CARD CLICK
  const handleClick = (title) => {
    const path = title.toLowerCase().replace(/ /g, "-");

    navigate(`/portfolio/${path}`);

    // PAGE TOP
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={tc8}
            alt=""
            className="w-full h-full object-cover scale-110"
          />

          <div className="absolute inset-0 "></div>
        </div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500/20 blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-xs">
              Dance Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mt-5">
              Creative
              <br />
              Dance Gallery
            </h1>

            <p className="text-gray-600 text-base leading-8 mt-6 max-w-xl">
              Explore powerful choreography, urban movement, freestyle energy,
              and unforgettable performances from our creative artists.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
             

              
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[tc1, tc5, tc9, tc7].map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden border border-white/10 rounded-xl ${
                  index === 1 || index === 2 ? "translate-y-6" : ""
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-[180px] object-cover hover:scale-110 duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-14 px-5 bg-[#0d0d0d]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["All", "Kids", "Latino", "Urban"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 uppercase tracking-[2px] text-xs font-bold border transition duration-300 rounded-full
              
              ${
                filter === item
                  ? "bg-orange-500 border-orange-500 text-white scale-105"
                  : "bg-transparent border-white/10 text-white hover:bg-orange-500 hover:border-orange-500"
              }`}
            >
              {item === "All" && "Show All"}
              {item === "Kids" && "Kids Dance"}
              {item === "Latino" && "Latino Dance"}
              {item === "Urban" && "Urban Dance"}
            </button>
          ))}
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-5 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Sparkles size={28} />,
              title: "Creative Choreography",
              desc: "Modern artistic movement with emotional storytelling.",
            },
            {
              icon: <Flame size={28} />,
              title: "Urban Energy",
              desc: "Powerful freestyle vibes and street dance culture.",
            },
            {
              icon: <ChevronRight size={28} />,
              title: "Live Performance",
              desc: "Dynamic stage moments with unforgettable visuals.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#111] border border-white/10 p-7 relative overflow-hidden group rounded-2xl"
            >
              <div className="absolute inset-0 bg-orange-500 scale-y-0 group-hover:scale-y-100 origin-bottom opacity-10 duration-500"></div>

              <div className="relative z-10">
                <div className="text-orange-500 mb-5">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-black uppercase">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-7 mt-4 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 px-5 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-xs">
              Portfolio Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase mt-5">
              Dance Moments
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => handleClick(item.title)}
                className={`group cursor-pointer ${
                  index % 4 === 1 ? "xl:translate-y-10" : ""
                }`}
              >
                <div className="relative overflow-hidden border border-white/10 rounded-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[380px] object-cover group-hover:scale-110 duration-700"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 duration-500"></div>

                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="uppercase tracking-[2px] text-orange-500 text-[10px] font-bold">
                          {item.category} Dance
                        </p>

                        <h3 className="text-2xl font-black uppercase mt-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="w-12 h-12 bg-orange-500 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 rounded-full">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-orange-500"></div>

        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-white/10 blur-[120px]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="uppercase tracking-[4px] text-black font-bold text-xs">
            Join The Movement
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-black mt-5 leading-tight">
            Feel The Rhythm
            <br />
            Of Dance Culture
          </h2>

          <p className="text-black/70 text-base leading-8 mt-6 max-w-2xl mx-auto">
            Discover creative performances, freestyle choreography, urban
            culture, and unforgettable live dance experiences.
          </p>

          {/* BOTTOM BUTTON */}
          <motion.button
            onClick={scrollTop}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-white text-black px-10 py-4 uppercase tracking-[3px] font-black text-sm"
          >
            Back To Top
          </motion.button>
        </motion.div>
      </section>

      {/* FLOATING TOP BUTTON */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}

      <Hero10 />
    </div>
  );
}