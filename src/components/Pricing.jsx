import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import pri from "../assets/pri.jpg";

import Hero10 from "./Hero10";

export default function PricingPackages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "STANDARD",
      price: "$53",
      active: false,
      features: [
        "Freestyle Dance Classes",
        "Hip Hop Choreography",
        "Street Battle Training",
        "Performance Workshops",
      ],
    },
    {
      title: "POPULAR",
      price: "$84",
      active: true,
      features: [
        "Advanced Dance Sessions",
        "Professional Choreo",
        "Battle Camp Access",
        "Stage Performance Training",
      ],
    },
    {
      title: "PROFESSIONAL",
      price: "$79",
      active: false,
      features: [
        "Urban Dance Training",
        "Freestyle Coaching",
        "Music Performance Skills",
        "Crew Practice Sessions",
      ],
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black overflow-hidden">
      {/* HERO */}
      <section className="relative h-[85vh] w-full">
        <img
          src={pri}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-5xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-5xl md:text-7xl font-black uppercase text-white leading-tight"
            >
              Pricing Packages
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-gray-200 text-lg leading-9 mt-6 max-w-3xl mx-auto"
            >
              Discover flexible dance training plans with freestyle classes,
              choreography workshops, battle sessions, and premium performance
              coaching.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TITLE */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-black uppercase leading-tight text-center lg:text-left text-white"
          >
            Meeting Our Amazing
            <br />
            <span className="text-orange-500">Dance Instructors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-400 text-lg leading-10"
          >
            Learn hip hop foundations, freestyle movement, stage confidence,
            choreography, urban grooves, and battle performance from
            experienced dance professionals.
          </motion.p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                scale: 1.02,
              }}
              className={`p-14 text-center transition-all duration-500 border ${
                plan.active
                  ? "bg-orange-500 text-white border-orange-500 shadow-2xl shadow-orange-500/20"
                  : "bg-[#111] text-white border-white/10"
              }`}
            >
              <h3 className="text-2xl font-black tracking-[3px] uppercase">
                {plan.title}
              </h3>

              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`text-7xl font-black mt-8 ${
                  plan.active ? "text-white" : "text-orange-500"
                }`}
              >
                {plan.price}
              </motion.h1>

              <p
                className={`mt-3 text-lg ${
                  plan.active ? "text-white" : "text-gray-400"
                }`}
              >
                monthly
              </p>

              <div
                className={`w-full h-[1px] my-12 ${
                  plan.active ? "bg-white/40" : "bg-white/10"
                }`}
              ></div>

              <div className="space-y-8 text-lg">
                {plan.features.map((feature, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {feature}
                  </motion.p>
                ))}
              </div>

              <button
                onClick={scrollTop}
                className={`mt-14 px-14 py-5 uppercase tracking-[3px] font-black transition-all duration-500 ${
                  plan.active
                    ? "bg-white text-black hover:bg-black hover:text-white"
                    : "bg-orange-500 text-white hover:bg-white hover:text-black"
                }`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCROLL TOP BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-white hover:text-black text-white p-4 transition-all duration-500 rounded-full shadow-lg"
      >
        <ArrowUp size={24} />
      </motion.button>

      <Hero10 />
    </div>
  );
}