import React from "react";
import bg from "../assets/hhh.jpg";

export default function ModernDanceHero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="dance"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl">
          
          {/* TITLE */}
          <h1 className="text-white uppercase font-light leading-tight tracking-wide text-[26px] md:text-[40px]">
            KNOWLEDGE,{" "}
            <span className="font-bold">EXPERIENCE</span> AND FRESH
            IDEAS.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-white/90 text-[13px] md:text-[17px] leading-[1.7] w-full mx-auto">
            Lorem ipsum dolor sit amet dictum ante tempor eget faucibus et urna
            eu maecenas viverra aliquam lorem id tincidunt praesent viverra
            <br />
            massanon varius magna eget nibh vitae velit efficitur. Lorem ipsum
            dolor sit consectetuer
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-7
              px-10
              py-3
              border
              border-white
              text-white
              uppercase
              tracking-[2px]
              text-[11px]
              font-semibold
              hover:bg-pink-500
              hover:border-pink-500
              transition-all
              duration-500
            "
          >
            PARTICIPATE
          </button>
        </div>
      </div>
    </section>
  );
}