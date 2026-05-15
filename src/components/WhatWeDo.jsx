import React from "react";
import {
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import wd1 from "../assets/wd1.jpg";
import wd2 from "../assets/wd2.jpg";
import wd3 from "../assets/wd3.jpg";
import wd4 from "../assets/wd4.jpg";
import wd5 from "../assets/wd5.jpg";

import Hero10 from "./Hero10";

export default function WhatWeDo() {
  const skills = [
    { title: "Hip Hop Foundation", value: "68%" },
    { title: "Street Choreography", value: "83%" },
    { title: "Freestyle Training", value: "55%" },
    { title: "Stage Performance", value: "95%" },
  ];

  return (
    <div className="bg-[#f3f3f3] text-black overflow-hidden">
      {/* HERO */}
      <section className="relative h-[85vh] w-full bg-black">
        <img
          src={wd1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center">
  <div className="max-w-5xl mx-auto px-6 text-center">
    
    <motion.div
  initial={{ opacity: 0, scale: 0.8, y: 100 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="relative z-10 h-full flex items-center justify-center"
>
  <div className="max-w-5xl mx-auto px-6 text-center">

    <motion.h1
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-4xl md:text-6xl font-black uppercase leading-tight text-white"
    >
      We Have Our Special Approach To Dance Techniques
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 1 }}
      className="text-gray-300 text-base md:text-lg leading-8 mt-6 max-w-3xl mx-auto"
    >
      Urban dance workshops, freestyle sessions, choreography
      battles, and high-energy training programs built for the next
      generation of street dancers.
    </motion.p>

  </div>
</motion.div>

  </div>

        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <img
              src={wd2}
              alt=""
              className="w-full h-[420px] object-cover hover:scale-110 duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-black uppercase leading-tight">
              Dance Competition Camp.
              <br />
              <span className="text-orange-500">
                Train Your Skills To The Max.
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-9 mt-6">
              Learn freestyle movement, choreography transitions, teamwork,
              battle confidence, and stage presence with professional urban
              dance coaches and performance artists.
            </p>

            <button className="flex items-center gap-3 mt-8 uppercase tracking-[3px] font-bold text-orange-500 hover:gap-5 duration-300">
              Participate <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            {skills.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="font-bold">{item.value}</span>
                </div>

                <div className="w-full bg-gray-300 h-[4px] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1.5 }}
                    className="bg-orange-500 h-[4px]"
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <img
              src={wd3}
              alt=""
              className="w-full h-[380px] object-cover hover:scale-105 duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <img
              src={wd4}
              alt=""
              className="w-full h-[430px] object-cover hover:scale-105 duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-black uppercase leading-tight">
              Dance Competition Camp.
              <br />
              <span className="text-orange-500">
                Train Your Skills To The Max.
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-9 mt-6">
              Master popping, locking, krump, freestyle techniques, and dance
              battle performance with immersive street dance workshops.
            </p>

            <div className="flex gap-10 mt-10 flex-wrap">
              <div>
                <h1 className="text-6xl font-black text-orange-500">10</h1>
                <p className="uppercase tracking-[3px] mt-2 text-sm">
                  Days
                </p>
              </div>

              <div>
                <h1 className="text-6xl font-black text-orange-500">12</h1>
                <p className="uppercase tracking-[3px] mt-2 text-sm">
                  Hours
                </p>
              </div>

              <div>
                <h1 className="text-6xl font-black text-orange-500">89</h1>
                <p className="uppercase tracking-[3px] mt-2 text-sm">
                  Seconds
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAST SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-right"
          >
            <h2 className="text-4xl font-black uppercase leading-tight">
              Dance Competition Camp.
              <br />
              <span className="text-orange-500">
                Train Your Skills To The Max.
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-9 mt-6">
              Experience live urban dance battles, creative movement sessions,
              teamwork exercises, and energetic performances with elite dance
              instructors.
            </p>

            <button className="flex items-center gap-3 mt-8 uppercase tracking-[3px] font-bold text-orange-500 hover:gap-5 duration-300 lg:ml-auto">
              Participate <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <img
              src={wd5}
              alt=""
              className="w-full h-[420px] object-cover hover:scale-105 duration-700"
            />
          </motion.div>
        </div>
      </section>

      <Hero10 />
    </div>
  );
}