import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import bb1 from "../assets/bb1.jpg";

const BlogStandard = () => {
  return (
    <div className="bg-white">

      {/* BLOG HEADER */}
      <div className="
        bg-[#19c2a0] 
        h-[200px] sm:h-[260px] 
        flex flex-col justify-center items-center 
        text-white 
        pt-20 sm:pt-24
      ">
        <h1 className="
          text-2xl sm:text-3xl md:text-[36px] 
          tracking-widest font-semibold
        ">
          BLOG STANDARD
        </h1>

        <div className="mt-3 text-xs sm:text-sm flex justify-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span>Blog Standard</span>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="
        max-w-6xl mx-auto 
        px-4 sm:px-6 
        py-8 sm:py-12
      ">

        {/* IMAGE */}
        <div className="w-full">
          <Link to="/blog-details" className="block overflow-hidden">
            <img
              src={bb1}
              alt="blog"
              className="
                w-full 
                h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] 
                object-cover 
                cursor-pointer 
                hover:scale-105 
                transition duration-500
              "
            />
          </Link>
        </div>

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
            CONTINUE WORKING
          </h2>
        </Link>

        {/* DESCRIPTION */}
        <p className="
          text-gray-500 
          mt-3 sm:mt-4 
          text-sm sm:text-base 
          leading-6 sm:leading-7
        ">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt. Etiam rhoncus. Maecenas tempus,
          tellus eget condimentum rhoncus, sem quam semper libero, sit amet
          adipiscing sem neque sed ipsum.
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

        {/* QUOTE SECTION */}
        <div className="
          bg-gray-100 
          mt-8 sm:mt-12 
          py-8 sm:py-12 
          px-4 sm:px-6 
          text-center
        ">

          <p
            onClick={() => console.log("Clicked!")}
            className="
              text-gray-500 
              max-w-3xl mx-auto 
              text-sm sm:text-base 
              leading-6 sm:leading-7 
              cursor-pointer 
              hover:text-[#19c2a0] 
              transition duration-300
            "
          >
            Far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>

          <h3 className="
            mt-5 sm:mt-6 
            text-xs sm:text-sm 
            tracking-[2px] sm:tracking-[3px] 
            uppercase font-semibold 
            text-gray-800
          ">
            JAMES NEWBIE{" "}
            <span className="text-gray-400 font-normal">
              / PROJECT MANAGER
            </span>
          </h3>

        </div>

      </div>
    </div>
  );
};

export default BlogStandard;