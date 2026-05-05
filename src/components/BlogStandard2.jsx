import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRegHeart } from "react-icons/fa"; 
import { Link } from "react-router-dom";

import bb2 from "../assets/bb2.jpg";
import bb3 from "../assets/bb3.jpg";
import bb4 from "../assets/bb4.jpg";

const images = [bb2, bb3, bb4];

const IBlogStandard2 = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* 🎯 SLIDER FIRST */}
      <div className="w-full flex justify-center mt-6 sm:mt-10">
        <div className="w-full max-w-6xl px-4 sm:px-0">
          <div className="
            relative w-full 
            h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] 
            overflow-hidden rounded
          ">

            <Link to="/blog-details">
              <img
                src={images[current]}
                alt="slider"
                className="
                  w-full h-full object-cover 
                  cursor-pointer
                "
              />
            </Link>

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="
                absolute left-2 sm:left-5 
                top-1/2 -translate-y-1/2 
                text-white 
                text-lg sm:text-2xl 
                bg-black/30 
                p-2 sm:p-3 
                rounded-full
              "
            >
              <FaChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="
                absolute right-2 sm:right-5 
                top-1/2 -translate-y-1/2 
                text-white 
                text-lg sm:text-2xl 
                bg-black/30 
                p-2 sm:p-3 
                rounded-full
              "
            >
              <FaChevronRight />
            </button>

          </div>
        </div>
      </div>


      {/* 🔽 BLOG TEXT LAST */}
      <div className="w-full flex justify-center mt-6 sm:mt-10 mb-8 sm:mb-10">
        <div className="w-full max-w-6xl px-4 sm:px-6">

          {/* META */}
          <div className="
            mt-4 sm:mt-6 
            text-xs sm:text-sm 
            text-gray-500 
            flex flex-wrap items-center gap-2
          ">
            <span className="hover:text-[#19c2a0] cursor-pointer transition">
              May 16, 2016
            </span>

            <span>/</span>

            <span>
              By{" "}
              <span className="hover:text-[#19c2a0] cursor-pointer transition">
                admin
              </span>
            </span>

            <span>/</span>

            <span className="hover:text-[#19c2a0] cursor-pointer transition">
              0 Comments
            </span>

            <span>/</span>

            <span className="flex items-center gap-1 cursor-pointer hover:text-[#19c2a0] transition">
              <FaRegHeart />
              14
            </span>

            <span>/</span>

            <span className="hover:text-[#19c2a0] cursor-pointer transition">
              Dance
            </span>
          </div>

          {/* TITLE */}
          <Link to="/blog-details">
            <h2 className="
              text-lg sm:text-xl md:text-2xl 
              font-semibold mt-3 sm:mt-4 
              tracking-wide 
              hover:text-[#19c2a0] 
              transition duration-300
            ">
              BETWEEN BODY & SOUL
            </h2>
          </Link>

          {/* DESCRIPTION */}
          <p className="
            text-gray-500 
            text-sm sm:text-base 
            leading-6 sm:leading-7 
            mt-3 sm:mt-4 
            mb-4 sm:mb-5
          ">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Etiam rhoncus. Maecenas tempus...
          </p>

          {/* READ MORE */}
          <Link
            to="/blog-details"
            className="
              mt-4 sm:mt-6 
              inline-flex items-center gap-2 
              text-[#19c2a0] font-semibold 
              text-sm sm:text-base
              hover:text-black hover:gap-3 
              transition-all duration-300
            "
          >
            → READ MORE
          </Link>

          {/* 🧱 GRAY SECTION */}
          <div className="w-full flex justify-center mt-6 sm:mt-10">
            <div className="
              w-full max-w-6xl 
              bg-gray-100 
              py-10 sm:py-16 
              px-4 
              text-center
            ">

              <h2 className="
                text-sm sm:text-xl md:text-2xl 
                tracking-widest uppercase
              ">
                <Link
                  to="/blog"
                  className="text-black hover:text-[#19c2a0] transition"
                >
                  DANCE TO EXPRESS NOT TO IMPRESS
                </Link>
              </h2>

              <p className="
                text-xs sm:text-sm 
                text-[#19c2a0] 
                mt-3 sm:mt-4 
                break-all
              ">
                https://qodeinteractive.com/wordpress-theme/vibez-dynamic-theme-for-dance-studios-and-instructors/
              </p>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default IBlogStandard2;