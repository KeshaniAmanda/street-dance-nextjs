import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import errorImg from "../assets/404.jpg";

export default function ErrorPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={errorImg}
        alt="404"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[140px] md:text-[220px] font-black text-white leading-none"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl md:text-5xl font-black uppercase text-white tracking-[6px]"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg mt-8 max-w-2xl leading-9"
        >
          Oops! The page you are looking for does not exist.
          It might have been moved or deleted.
        </motion.p>

        {/* HOME BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link to="/">
            <button
              className="
                mt-12
                bg-white
                text-black
                px-14
                py-5
                uppercase
                tracking-[5px]
                font-black
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-500
              "
            >
              Homepage
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}