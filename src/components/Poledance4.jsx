import React from "react";
import lp6 from "../assets/lp6.png";

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      
      {/* TESTIMONIAL CONTENT */}
      <div className="max-w-4xl mx-auto text-center">

        {/* QUOTE IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={lp6}
            alt="Quote"
            className="w-10 md:w-12 object-contain"
          />
        </div>

        {/* TEXT */}
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[2] max-w-3xl mx-auto font-light">
          Lorem ipsum proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem auci elit consequat ipsutissem
          niuis sed odio sit amet nibh vulputate cursus a sit amet.
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum
          rhoncus, semquamsem per libero.
        </p>

        {/* NAME */}
        <h3 className="mt-8 text-[22px] tracking-[1px] uppercase font-light text-black">
          BAMES NEWBIE{" "}
          <span className="text-gray-400 text-[20px]">
            / POLEDANCE ALUMNI
          </span>
        </h3>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        </div>

      </div>
    </section>
  );
}