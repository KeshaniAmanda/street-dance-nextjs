import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Users,
  Flame,
} from "lucide-react";

import aboutImg from "../assets/time.jpg";
import Hero10 from "./Hero10";

const AboutUs = () => {
  const [activeFilter, setActiveFilter] = useState("ALL EVENTS");

  const scheduleData = [
    {
      time: "09:00 - 10:00",
      days: [
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        {
          title: "Ballet",
          teacher: "Brandon Burns",
          category: "BALLET",
        },
        null,
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        null,
      ],
    },

    {
      time: "10:00 - 11:00",
      days: [
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
        {
          title: "Yoga Dance",
          teacher: "Teresa Soto",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        null,
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
      ],
    },

    {
      time: "15:00 - 16:00",
      days: [
        null,
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
        {
          title: "Yoga Dance",
          teacher: "Jacob Spencer",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        null,
        {
          title: "Yoga Dance",
          teacher: "Nathan Shaw",
          category: "YOGA DANCE",
        },
        null,
      ],
    },

    {
      time: "18:00 - 19:00",
      days: [
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        null,
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        null,
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
      ],
    },
  ];

  const buttons = [
    "ALL EVENTS",
    "YOGA DANCE",
    "MODERN DANCE",
    "BALLET",
  ];

  return (
    <div className="w-full bg-black overflow-hidden">
      {/* HERO */}
      <section
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* ORANGE GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-500/20 blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-center w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-orange-500 font-bold text-sm">
              Weekly Dance Schedule
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight mt-5">
              Dance
              <br />
              Timetable
            </h1>

            <p className="text-gray-300 leading-8 mt-8 text-lg">
              Explore our weekly classes, professional instructors, freestyle
              workshops, modern choreography, and powerful urban dance
              experiences.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                <Clock3 className="text-orange-500 mb-3" size={30} />
                <h3 className="text-white font-bold text-xl">
                  Flexible Times
                </h3>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                <Users className="text-orange-500 mb-3" size={30} />
                <h3 className="text-white font-bold text-xl">
                  Expert Coaches
                </h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black/60 border border-orange-500/20 backdrop-blur-lg p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-500 flex items-center justify-center">
                <Flame className="text-white" size={28} />
              </div>

              <div>
                <h2 className="text-3xl font-black text-white uppercase">
                  Urban Dance
                </h2>

                <p className="text-gray-400">
                  Move with rhythm & energy
                </p>
              </div>
            </div>

            <img
              src={aboutImg}
              alt=""
              className="w-full h-[300px] object-cover border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-16 px-6 lg:px-16 bg-[#0d0d0d]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(btn)}
              className={`px-8 py-4 uppercase tracking-[3px] text-sm font-bold transition duration-300 border
              
              ${
                activeFilter === btn
                  ? "bg-orange-500 border-orange-500 text-white scale-105"
                  : "bg-transparent border-white/10 text-white hover:bg-orange-500 hover:border-orange-500"
              }
            `}
            >
              {btn}
            </button>
          ))}
        </motion.div>
      </section>

      {/* TIMETABLE */}
      <section className="pb-24 px-4 lg:px-16 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto border border-white/10 bg-[#111]"
        >
          <table className="w-full text-center min-w-[1200px]">
            {/* HEADER */}
            <thead>
              <tr className="bg-[#151515] text-white uppercase tracking-[2px] text-sm">
                <th className="py-8 border-r border-white/10 w-[140px]">
                  Time
                </th>

                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <th
                    key={day}
                    className="py-8 border-r border-white/10 last:border-r-0"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {scheduleData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-white/10"
                >
                  {/* TIME */}
                  <td className="py-10 border-r border-white/10 text-orange-500 font-bold text-lg bg-[#151515]">
                    {row.time}
                  </td>

                  {/* DAYS */}
                  {row.days.map((item, index) => {
                    const shouldShow =
                      activeFilter === "ALL EVENTS" ||
                      item?.category === activeFilter;

                    return (
                      <td
                        key={index}
                        className="py-8 border-r border-white/10 last:border-r-0 hover:bg-orange-500/10 transition duration-300"
                      >
                        {item && shouldShow ? (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-3"
                          >
                            <div className="flex justify-center mb-3">
                              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                                <CalendarDays
                                  className="text-white"
                                  size={22}
                                />
                              </div>
                            </div>

                            <p className="text-orange-500 font-bold text-lg">
                              {item.title}
                            </p>

                            <p className="text-gray-300 mt-2">
                              {item.teacher}
                            </p>

                            <p className="text-gray-500 text-sm mt-3 leading-6">
                              09:00 AM
                              <br />
                              10:00 AM
                            </p>
                          </motion.div>
                        ) : (
                          <div className="h-[140px]"></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      <Hero10 />
    </div>
  );
};

export default AboutUs;