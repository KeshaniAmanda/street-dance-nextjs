import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRegHeart } from "react-icons/fa"; 
import { Link } from "react-router-dom";// ✅ FIX

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
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-6xl">
          <div className="relative w-full h-[700px] overflow-hidden rounded">

            <Link to="/blog-details"> {/* 👉 oyata ona route eka danna */}
  <img
    src={images[current]}
    alt="slider"
    className="w-full h-[700px] object-cover cursor-pointer"
  />
</Link>

            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/30 p-3 rounded-full"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/30 p-3 rounded-full"
            >
              <FaChevronRight />
            </button>

          </div>
        </div>
      </div>


      {/* 🔽 BLOG TEXT LAST */}
      <div className="w-full flex justify-center mt-10 mb-10">
        <div className="w-full max-w-6xl">

         <div className="mt-6 text-sm text-gray-500 flex flex-wrap items-center gap-2">
         
           <span className="hover:text-[#19c2a0] cursor-pointer transition">
             May 16, 2016
           </span>
         
           <span>/</span>
         
           <span className="text-gray-500">
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
         
           {/* 🤍 Outline Heart */}
          <span className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-[#19c2a0] transition">
           <FaRegHeart className="transition" />
           14
         </span>
         
           <span>/</span>
         
           <span className="hover:text-[#19c2a0] cursor-pointer transition">
             Dance
           </span>
         
         </div>
<Link to="/blog-details">
  <h2 className="text-2xl font-semibold mt-4 tracking-wide text-black hover:text-[#19c2a0] transition duration-300 cursor-pointer">
    BETWEEN BODY & SOUL
  </h2>
</Link>
        

          <p className="text-gray-500 leading-7 mb-5">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Etiam rhoncus. Maecenas tempus...
          </p>

          {/* READ MORE */}
        <Link
  to="/blog-details"
  className="mt-6 inline-flex items-center gap-2 text-[#19c2a0] font-semibold hover:text-black hover:gap-3 transition-all duration-300"
>
  → READ MORE
</Link>
{/* 🧱 GRAY SECTION */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-6xl bg-gray-100 py-16 text-center">

          
<h2 className="text-xl md:text-2xl tracking-widest uppercase">
  <Link
    to="/blog" // 👉 oyata ona page eka danna
    className="text-black hover:text-[#19c2a0] transition cursor-pointer"
  >
    DANCE TO EXPRESS NOT TO IMPRESS
  </Link>
</h2>

          <p className="text-sm text-[#19c2a0] mt-4 break-all">
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