import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  Send,
  Clock3,
  Users,
  Music2,
  Trophy,
} from "lucide-react";

import contact from "../assets/contact.jpg";

import Hero10 from "./Hero10";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const features = [
    {
      icon: <Music2 size={34} />,
      title: "Freestyle Classes",
      desc: "Urban groove and freestyle movement training.",
    },
    {
      icon: <Users size={34} />,
      title: "Dance Crew",
      desc: "Team choreography and stage performance sessions.",
    },
    {
      icon: <Trophy size={34} />,
      title: "Battle Training",
      desc: "Professional street battle preparation classes.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Flexible Time",
      desc: "Morning and evening dance training programs.",
    },
  ];

  return (
    <div className="bg-black overflow-hidden">
      {/* HERO */}
      <section className="relative h-[75vh] w-full">
        <img
          src={contact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "15px" }}
              animate={{ opacity: 1, letterSpacing: "3px" }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-7xl font-black uppercase text-white leading-tight"
            >
              Contact Us
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-orange-500 mx-auto mt-8"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-gray-300 text-lg leading-9 mt-8"
            >
              Connect with our professional dance instructors for freestyle
              workshops, choreography classes, battle training, and performance
              coaching.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-black border border-orange-500/20 p-8 text-center hover:border-orange-500 duration-500"
            >
              <div className="text-orange-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black uppercase text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-white">
              Our Dance
              <br />
              <span className="text-orange-500">
                Studio
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              Learn hip hop choreography, freestyle movement, urban groove,
              stage confidence, and battle performance with elite dance
              professionals.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* CARD */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-7 border-b-4 border-orange-500"
              >
                <MapPin
                  className="text-orange-500 mb-4"
                  size={34}
                />

                <h3 className="text-2xl font-black uppercase">
                  Colombo
                </h3>

                <div className="space-y-2 mt-5 text-gray-500">
                  <p>21 Street Main Road</p>
                  <p>Sri Lanka 10200</p>
                  <p>vibezdance@gmail.com</p>
                  <p>+94 77 123 4567</p>
                </div>
              </motion.div>

              {/* CARD */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-7 border-b-4 border-orange-500"
              >
                <Phone
                  className="text-orange-500 mb-4"
                  size={34}
                />

                <h3 className="text-2xl font-black uppercase">
                  New York
                </h3>

                <div className="space-y-2 mt-5 text-gray-500">
                  <p>Dance Street Avenue</p>
                  <p>New York 20400</p>
                  <p>urbancrew@gmail.com</p>
                  <p>+1 101 0000</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-4xl font-black uppercase">
              Send Message
            </h2>

            <p className="text-gray-500 mt-4 leading-8">
              Contact our instructors for freestyle workshops, choreography
              classes, and private dance sessions.
            </p>

            <form className="space-y-5 mt-8">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 h-14 px-5 outline-none focus:border-orange-500 duration-300"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 h-14 px-5 outline-none focus:border-orange-500 duration-300"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 h-14 px-5 outline-none focus:border-orange-500 duration-300"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-5 outline-none focus:border-orange-500 duration-300 resize-none"
              ></motion.textarea>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000",
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-orange-500 text-white px-12 py-4 uppercase tracking-[3px] font-black flex items-center gap-3"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase text-white leading-tight">
              Join The
              <br />
              <span className="text-orange-500">
                Urban Movement
              </span>
            </h2>

            <p className="text-gray-400 leading-9 mt-8 text-lg">
              Experience freestyle dance battles, choreography workshops,
              performance coaching, and creative street dance culture with
              Vibez Dance Studio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-orange-500 p-10 text-center">
              <h1 className="text-6xl font-black text-white">
                12+
              </h1>

              <p className="uppercase tracking-[3px] text-white mt-4">
                Years Experience
              </p>
            </div>

            <div className="bg-white p-10 text-center">
              <h1 className="text-6xl font-black text-orange-500">
                5K
              </h1>

              <p className="uppercase tracking-[3px] text-black mt-4">
                Active Students
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="relative">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[420px] grayscale"
          loading="lazy"
        ></iframe>

        {/* FLOAT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-white shadow-2xl px-8 py-6 w-[92%] md:w-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" size={30} />

              <div>
                <h4 className="font-black uppercase">
                  Dance Studio
                </h4>

                <p className="text-gray-500">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" size={30} />

              <div>
                <h4 className="font-black uppercase">
                  Email
                </h4>

                <p className="text-gray-500">
                  vibezdance@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SCROLL TOP */}
      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-black text-white p-4 transition-all duration-500"
      >
        <ArrowUp size={24} />
      </button>

      <Hero10 />
    </div>
  );
}