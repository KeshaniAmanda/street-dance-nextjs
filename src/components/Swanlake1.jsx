import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  User,
  Globe,
  Mail,
  Flame,
  Play,
} from "lucide-react";

import heroImg from "../assets/slb.jpg";
import signImg from "../assets/slb1.jpg";
import Hero10 from "./Hero10";

const Swanlake1 = () => {
  const [activeBtn, setActiveBtn] = useState("google");

  return (
    <div className="w-full font-sans bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/20 blur-[130px]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-orange-500 font-bold text-sm">
              Live Ballet Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mt-6">
              Swan Lake
              <br />
              Ballet
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl">
              Experience the beauty of classical ballet with emotional
              storytelling, elegant choreography, cinematic music, and a magical
              live performance atmosphere.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#000",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-10 py-4 uppercase tracking-[3px] font-bold"
              >
                Reserve Seat
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "#f97316",
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 px-10 py-4 uppercase tracking-[3px] font-bold flex items-center gap-3"
              >
                Watch Trailer
                <Play size={18} />
              </motion.button>
            </div>
          </motion.div>

          
        </div>
      </section>

      {/* EVENT PASSED */}
      <section className="px-6 lg:px-16 py-10 bg-[#0d0d0d]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-orange-500/10 border border-orange-500/30 text-orange-400 px-8 py-5 text-sm uppercase tracking-[3px]"
        >
          This Event Has Passed
        </motion.div>
      </section>

      {/* TITLE + PRICE */}
      <section className="px-6 lg:px-16 py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <div className="bg-orange-500 text-white text-center px-7 py-6 shadow-lg">
              <p className="text-4xl font-black leading-none">26</p>
              <p className="text-sm font-bold tracking-[3px] mt-2">
                DEC
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black uppercase tracking-wide">
                Music Class
              </h2>

              <p className="text-gray-400 text-sm mt-4 tracking-[2px] uppercase">
                December 26, 2024 @ 8:00 AM - 8:00 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-orange-500 text-white px-12 py-4 text-3xl font-black shadow-lg"
          >
            $120
          </motion.div>
        </div>
      </section>

      {/* IMAGE + MAP */}
      <section className="grid lg:grid-cols-2 gap-12 px-6 lg:px-16 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden border border-white/10 group"
        >
          <img
            src={signImg}
            alt="event"
            className="w-full h-[500px] object-cover group-hover:scale-110 duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[500px] overflow-hidden border border-white/10"
        >
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-6 lg:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-orange-500 font-bold text-sm">
            Event Description
          </p>

          <h2 className="text-5xl font-black uppercase mt-5">
            A Night Of Ballet
          </h2>

          <p className="text-gray-400 text-[16px] leading-9 mt-8">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum.
          </p>

          <p className="text-gray-500 text-[16px] leading-9 mt-6">
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Experience graceful movement,
            classical storytelling, and unforgettable live stage performances.
          </p>
        </motion.div>
      </section>

      {/* EVENT DETAILS */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-orange-500 font-bold text-sm">
              Event Information
            </p>

            <h3 className="text-5xl font-black uppercase mt-5 mb-16">
              Event Details
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 p-10 space-y-8"
            >
              <p className="flex items-center gap-4">
                <CalendarDays size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Date:</span>{" "}
                  December 26, 2024 @ 8:00 am - 8:00 pm
                </span>
              </p>

              <p className="flex items-center gap-4">
                <Clock size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Time:</span>{" "}
                  8:00 am - 8:00 pm
                </span>
              </p>

              <p className="flex items-center gap-4">
                <MapPin size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Venue:</span>{" "}
                  HipHop
                </span>
              </p>

              <p className="flex items-center gap-4">
                <MapPin size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Address:</span>{" "}
                  2777 Goethals Rd N
                </span>
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 p-10 space-y-8"
            >
              <p className="flex items-center gap-4">
                <User size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">
                    Organizer:
                  </span>{" "}
                  David Harrison
                </span>
              </p>

              <p className="flex items-center gap-4">
                <Phone size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Phone:</span>{" "}
                  1-677-124-44227
                </span>
              </p>

              <p className="flex items-center gap-4">
                <Globe size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Website:</span>{" "}
                  <a
                    href="http://yoursite.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-500 duration-300"
                  >
                    yoursite.com
                  </a>
                </span>
              </p>

              <p className="flex items-center gap-4">
                <Mail size={22} className="text-orange-500" />
                <span>
                  <span className="font-bold text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@yoursite.com"
                    className="hover:text-orange-500 duration-300"
                  >
                    info@yoursite.com
                  </a>
                </span>
              </p>
            </motion.div>
          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-end gap-5 mt-14"
          >
            <button
              onClick={() => setActiveBtn("google")}
              className={`px-8 py-4 text-sm font-bold tracking-[2px] uppercase transition duration-300
                ${
                  activeBtn === "google"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black hover:bg-orange-500 hover:text-white"
                }`}
            >
              + Google Calendar
            </button>

            <button
              onClick={() => setActiveBtn("ical")}
              className={`px-8 py-4 text-sm font-bold tracking-[2px] uppercase transition duration-300
                ${
                  activeBtn === "ical"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black hover:bg-orange-500 hover:text-white"
                }`}
            >
              + Add To iCalendar
            </button>
          </motion.div>
        </div>
      </section>

      <Hero10 />
    </div>
  );
};

export default Swanlake1;