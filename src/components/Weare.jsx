import React from "react";

import arrow1 from "../assets/arrow-img-1.png";
import arrow2 from "../assets/arrow-img-2.png";
import arrow3 from "../assets/arrow-img-3.png";
import arrow4 from "../assets/arrow-img-1.png";
import arrow5 from "../assets/arrow-img-2.png";
import arrow6 from "../assets/arrow-img-3.png";

import wa from "../assets/wa.jpg";

export default function AboutUsHero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      
      {/* BG */}
      <img
        src={wa}
        alt="about"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-12">
        
        {/* LEFT SIDE */}
        <div className="w-1/2 flex items-center gap-8">
          
          {/* ARROWS */}
          <div className="flex flex-col gap-6">
            
            {/* TOP */}
            <div className="flex items-center gap-4">
              <img src={arrow1} alt="" className="w-[60px]" />
              <img src={arrow2} alt="" className="w-[60px]" />
              <img src={arrow3} alt="" className="w-[60px]" />
            </div>

            {/* BOTTOM */}
            <div className="flex items-center gap-4">
              <img src={arrow4} alt="" className="w-[60px]" />
              <img src={arrow5} alt="" className="w-[60px]" />
              <img src={arrow6} alt="" className="w-[60px]" />
            </div>

          </div>

          {/* PARAGRAPH */}
<p className="text-white text-[15px] leading-[2] w-[500px] font-light translate-x-20 text-right whitespace-nowrap">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo<br />
  ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et<br />
  magnis dis parturient montes,nascetur ridiculus mus.
</p>
        </div>

        {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="w-[70%] flex justify-center">
  <h1 className="text-white uppercase leading-[0.95] font-extralight text-[50px] max-w-[900px]">
  <span className="font-semibold">About Us</span> And Dance.
  <br />
  Get To <span className="font-semibold">Know Us.</span>
</h1>

</div>
      </div>
    </section>
  );
}