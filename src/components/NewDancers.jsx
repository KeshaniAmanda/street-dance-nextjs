import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTumblr,
  FaPinterestP,
} from "react-icons/fa";

// IMAGES
import mainImg from "../assets/h3c.jpg";
import main1Img from "../assets/h3b.jpg"; 
import main2Img from "../assets/h3e.jpg"; 

const NewDancer = () => {

  // DOT ACTIVE STATE
  const [activeDot, setActiveDot] = useState(0);

  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="bg-[#20c4b7] py-16 text-center text-white">
        
        <h1 className="text-[40px] tracking-widest font-semibold">
          NEW DANCERS
        </h1>

        {/* BREADCRUMB */}
        <div className="mt-3 text-sm text-white/80 flex justify-center gap-2">

          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <span>/</span>

          <Link to="/urban-dance" className="hover:text-black transition">
            Urban Dance
          </Link>

          <span>/</span>

          <span className="text-white">New Dancers</span>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGES */}
        
          <div>
  <img
    src={mainImg}
    className="w-full h-[400px] object-cover"
  />

  <div className="mt-10">
    <img
      src={main1Img}
      className="w-full h-[400px] object-cover"
    />
  </div>

  <div className="mt-10">
    <img
      src={main2Img}
      className="w-full h-[400px] object-cover"
    />
  </div>

          {/* 🔥 DOTS */}
          <div className="w-full flex justify-end items-center mt-24 pr-4">

  <Link to="/" className="group">
    
    <div className="grid grid-cols-2 gap-2">
      
      {[0, 1, 2, 3].map((dot) => (
        <span
          key={dot}
          className="w-2 h-2 rounded-full bg-black group-hover:bg-[#20c4b7] transition duration-300"
        ></span>
      ))}

    </div>

  </Link>

</div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="sticky top-28 h-fit">

          <h2 className="text-3xl font-semibold tracking-wide text-black mb-6">
            PROJECT NAME
          </h2>

          <p className="text-gray-500 leading-7 text-[15px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus.
            Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet
            mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante,
            elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt
            lectus quis dui viverra vestibulum.
          </p>

          {/* META */}
          <div className="space-y-5 text-[14px]">

            <div>
              <h4 className="font-semibold text-black">CLIENT:</h4>
              <p className="text-gray-500">Creative Performance Group</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">CATEGORY:</h4>
              <p className="text-gray-500">Urban Dance</p>
            </div>

            <div>
              <h4 className="font-semibold text-black">DATE:</h4>
              <p className="text-gray-500">September 29, 2016</p>
            </div>

          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-5 mt-10 text-black text-sm">

            <a href="/" className="hover:text-[#20c4b7] transition">
              <FaFacebookF />
            </a>

            <a href="/" className="hover:text-[#20c4b7] transition">
              <FaTwitter />
            </a>

            <a href="/" className="hover:text-[#20c4b7] transition">
              <FaLinkedinIn />
            </a>

            <a href="/" className="hover:text-[#20c4b7] transition">
              <FaTumblr />
            </a>

            <a href="/" className="hover:text-[#20c4b7] transition">
              <FaPinterestP />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default NewDancer;