import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Music2,
  Users,
  ChevronRight,
  Play,
  Star,
  Clock3,
  Trophy,
  Mic2,
  Flame,
} from "lucide-react";

import Hero10 from "./Hero10";

import event from "../assets/event.jpg";
import event2 from "../assets/event1.jpg";
import event3 from "../assets/event2.jpg";
import event4 from "../assets/event3.jpg";

export default function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // button click karama top ekata yanna
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const upcomingEvents = [
    {
      title: "Urban Freestyle Night",
      date: "15 JULY 2026",
      location: "Colombo Arena",
      image: event2,
    },
    {
      title: "Hip Hop Championship",
      date: "22 JULY 2026",
      location: "Dance Hall Studio",
      image: event3,
    },
    {
      title: "Street Dance Battle",
      date: "30 JULY 2026",
      location: "Urban Stage",
      image: event4,
    },
  ];

  return (
    <div className="bg-black overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <img
          src={event}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-500/20 blur-[120px]"></div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[5px] text-orange-500 font-bold text-sm"
          >
            URBAN DANCE EVENTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-black uppercase text-white mt-5 leading-tight"
          >
            Events
            <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 text-base leading-8 mt-6"
          >
            Discover freestyle battles, choreography showcases, live DJ
            sessions, dance workshops, and powerful urban movement culture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <motion.button
              onClick={scrollTop}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 uppercase tracking-[3px] font-black text-sm"
            >
              Explore Events
            </motion.button>

            <motion.button
              onClick={scrollTop}
              whileHover={{
                scale: 1.05,
                borderColor: "#f97316",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-8 py-4 uppercase tracking-[3px] font-black text-sm"
            >
              Watch Trailer
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-[#0d0d0d] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            {
              number: "25+",
              title: "Live Events",
            },
            {
              number: "10K",
              title: "Dance Fans",
            },
            {
              number: "120+",
              title: "Performers",
            },
            {
              number: "15",
              title: "Dance Crews",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 p-7 text-center hover:border-orange-500 duration-500"
            >
              <h2 className="text-4xl font-black text-orange-500">
                {item.number}
              </h2>

              <p className="text-white uppercase tracking-[2px] mt-3 text-sm">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Music2 size={36} />,
              title: "Live DJ Sessions",
              desc: "Powerful music, nonstop beats, and high-energy dance vibes.",
            },
            {
              icon: <Users size={36} />,
              title: "Dance Battles",
              desc: "Freestyle competitions with elite urban dancers.",
            },
            {
              icon: <Ticket size={36} />,
              title: "VIP Access",
              desc: "Exclusive backstage experience and workshops.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[#111] border border-white/10 p-8 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-orange-500 mb-6">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-black uppercase text-white">
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

      {/* UPCOMING EVENTS */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Upcoming Shows
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4">
              Featured Events
            </h2>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 bg-[#111] border border-white/10 overflow-hidden group"
              >
                <div className="overflow-hidden h-[280px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[2px] text-orange-500 font-bold">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black uppercase text-white mt-6">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 leading-8 mt-5 text-sm">
                    Urban choreography, freestyle culture, energetic dance
                    battles, and unforgettable live experiences.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.button
                      onClick={scrollTop}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ea580c",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-500 text-white px-7 py-3 uppercase tracking-[2px] font-black flex items-center gap-2 text-sm"
                    >
                      Book Ticket
                      <ChevronRight size={16} />
                    </motion.button>

                    <motion.button
                      onClick={scrollTop}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "#f97316",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white/20 text-white px-7 py-3 uppercase tracking-[2px] font-black flex items-center gap-2 text-sm"
                    >
                      Watch Trailer
                      <Play size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              LIVE EXPERIENCE
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4 leading-tight">
              Feel The Energy
              <br />
              Of Urban Dance
            </h2>

            <p className="text-gray-400 leading-8 mt-6 text-base">
              Experience choreography showcases, freestyle battles, dance crews,
              live performances, and underground movement culture.
            </p>

            <div className="space-y-6 mt-8">
              {[
                {
                  icon: <Flame size={22} />,
                  title: "Freestyle Dance Battles",
                },
                {
                  icon: <Mic2 size={22} />,
                  title: "Live DJ Music Sessions",
                },
                {
                  icon: <Trophy size={22} />,
                  title: "Professional Dance Competitions",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 bg-orange-500 flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-1 text-sm">
                      Powerful movement and creative urban vibes.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={event}
              alt=""
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 border-[8px] border-orange-500/20"></div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6 bg-[#0b0b0b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Event Schedule
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4">
              Event Timeline
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                time: "05:00 PM",
                title: "Opening Ceremony",
              },
              {
                time: "06:30 PM",
                title: "Freestyle Battle Round",
              },
              {
                time: "08:00 PM",
                title: "Crew Performance Showcase",
              },
              {
                time: "09:30 PM",
                title: "Live DJ Dance Party",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border border-white/10 bg-black p-6 hover:border-orange-500 duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7 text-sm">
                      Professional choreography and unforgettable dance moments.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-orange-500">
                    <Clock3 size={22} />

                    <h2 className="text-2xl font-black whitespace-nowrap">
                      {item.time}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Event Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mt-4">
              Dance Moments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[event2, event3, event4].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group h-[320px]"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 duration-500"></div>

                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star size={16} fill="#f97316" />
                    <Star size={16} fill="#f97316" />
                    <Star size={16} fill="#f97316" />
                  </div>

                  <h2 className="text-2xl font-black uppercase text-white mt-3">
                    Urban Vibes
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-orange-500"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="uppercase tracking-[4px] text-black font-bold text-sm">
            JOIN THE EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-black mt-5 leading-tight">
            Feel The Urban
            <br />
            Dance Energy
          </h2>

          <p className="text-black/70 text-base leading-8 mt-6 max-w-2xl mx-auto">
            Discover freestyle battles, choreography workshops, urban movement,
            and unforgettable dance experiences.
          </p>

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
            Reserve Your Spot
          </motion.button>
        </motion.div>
      </section>

      <Hero10 />
    </div>
  );
}