import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Send,
} from "lucide-react";

import faq from "../assets/faq.jpg";

import Hero10 from "./Hero10";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(0);

  const faqData = [
    {
      question: "How do I join dance classes?",
      answer:
        "You can register online for freestyle, hip hop, choreography, urban dance, and beginner dance training sessions through our dance academy platform.",
    },
    {
      question: "Do you offer beginner dance programs?",
      answer:
        "Yes. We provide beginner-friendly dance classes with professional instructors focused on rhythm, confidence, body movement, and freestyle basics.",
    },
    {
      question: "Can I join battle training sessions?",
      answer:
        "Absolutely. Our battle training programs help dancers improve freestyle performance, stage presence, and competitive dance techniques.",
    },
    {
      question: "Do you organize dance workshops?",
      answer:
        "We host choreography camps, freestyle workshops, stage performance events, and urban dance masterclasses every month.",
    },
    {
      question: "Is private coaching available?",
      answer:
        "Yes. Private sessions are available for choreography, competition preparation, freestyle improvement, and performance coaching.",
    },
    {
      question: "What styles do you teach?",
      answer:
        "We teach hip hop, freestyle, urban dance, popping, locking, street choreography, commercial dance, and performance training.",
    },
    {
      question: "Do you perform at events?",
      answer:
        "Our professional dance crew performs at festivals, concerts, stage shows, competitions, and entertainment events worldwide.",
    },
    {
      question: "Can kids join the academy?",
      answer:
        "Yes. We offer dance programs for kids, teenagers, and adults with separate training levels and professional instructors.",
    },
  ];

  // SCROLL TO TOP FUNCTION
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // BUTTON CLICK => TOP
  const handleExplore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[55vh] w-full">
        <img
          src={faq}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 "></div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase text-white">
              FAQ
            </h1>

            <div className="flex items-center justify-center gap-3 mt-6 text-lg font-semibold uppercase tracking-[3px]">
              <span
                onClick={() => (window.location.href = "/")}
                className="text-orange-500 cursor-pointer hover:text-white duration-300"
              >
                Home
              </span>

              <span className="text-white">/</span>

              <span className="text-white">FAQ</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.7fr_0.8fr] gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase leading-tight text-black">
              Frequently Asked
              <br />
              <span className="text-orange-500">Questions</span>
            </h2>

            <p className="text-gray-500 text-lg leading-10 mt-8">
              Discover answers about freestyle dance training, choreography
              workshops, urban performance classes, private coaching, and dance
              academy programs.
            </p>

            {/* FAQ */}
            <div className="mt-14 space-y-5">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-8 py-7 text-left"
                  >
                    <h3
                      className={`text-xl md:text-2xl font-black uppercase transition-all duration-300 ${
                        active === index
                          ? "text-orange-500"
                          : "text-black"
                      }`}
                    >
                      {item.question}
                    </h3>

                    {active === index ? (
                      <ChevronUp
                        className="text-orange-500"
                        size={28}
                      />
                    ) : (
                      <ChevronDown
                        className="text-black"
                        size={28}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-gray-600 text-lg leading-9 border-t border-gray-200">
                          <p className="pt-6">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* FORM */}
            <div className="bg-black p-10">
              <h2 className="text-4xl font-black uppercase text-white">
                Ask Questions
              </h2>

              <p className="text-gray-400 leading-8 mt-5">
                Send your questions about choreography classes, freestyle
                workshops, and dance training sessions.
              </p>

              <form className="space-y-5 mt-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-16 px-6 bg-white text-black outline-none border-2 border-transparent focus:border-orange-500 duration-300"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-16 px-6 bg-white text-black outline-none border-2 border-transparent focus:border-orange-500 duration-300"
                />

                <textarea
                  rows="6"
                  placeholder="Your Question"
                  className="w-full p-6 bg-white text-black outline-none border-2 border-transparent focus:border-orange-500 duration-300 resize-none"
                ></textarea>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ea580c",
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={scrollTop}
                  className="bg-orange-500 text-white px-12 py-5 uppercase tracking-[3px] font-black flex items-center gap-3"
                >
                  Submit <Send size={20} />
                </motion.button>
              </form>
            </div>

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden group"
            >
              <img
                src={faq}
                alt=""
                className="w-full h-[320px] object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/55"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl font-black uppercase text-white">
                  Dance
                  <span className="text-orange-500"> Academy</span>
                </h2>

                <p className="text-gray-200 leading-8 mt-4">
                  Urban movement, freestyle workshops, and professional dance
                  coaching.
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleExplore}
                  className="mt-8 bg-orange-500 text-white px-10 py-4 uppercase tracking-[3px] font-black"
                >
                  Explore More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black uppercase text-white leading-tight"
          >
            Join Our
            <span className="text-orange-500"> Dance Crew</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-10 mt-8 max-w-4xl mx-auto"
          >
            Experience choreography camps, freestyle dance sessions, battle
            training, urban movement classes, and stage performance workshops
            with professional dance instructors.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExplore}
            className="mt-12 bg-orange-500 text-white px-14 py-5 uppercase tracking-[3px] font-black transition-all duration-300"
          >
            Explore Classes
          </motion.button>
        </div>
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