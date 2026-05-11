import React from "react";
import md5 from "../assets/md5.png";

export default function Moderndance2() {
  const featuresLeft = [
    {
      title: "EXTENSIVE DOCUMENTATION",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
    {
      title: "FREE PLUGINS INCLUDED",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
    {
      title: "WORKING HOURS EVERYDAY",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
  ];

  const featuresRight = [
    {
      title: "PERFECT DESIGN",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
    {
      title: "FULL SHOP FUNCTIONALITY",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
    {
      title: "EASY TO CUSTOMIZE",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-16 text-center lg:text-right">
          {featuresLeft.map((item, index) => (
            <div key={index}>
              <h2 className="uppercase tracking-[1px] text-[18px] md:text-[19px] font-light text-[#1f2230] flex items-center justify-center lg:justify-end gap-2">
                {item.title}
                <span className="text-pink-500 text-[28px] leading-none">
                  »
                </span>
              </h2>

              <p className="text-[#8b8b8b] text-[14px] md:text-[14px] leading-[1.9] mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center">
          {/* PINK BOX */}
         

          <img
            src={md5}
            alt="dance"
            className="relative z-10 w-full max-w-[420px] object-contain hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-16 text-center lg:text-left">
          {featuresRight.map((item, index) => (
            <div key={index}>
              <h2 className="uppercase tracking-[1px] text-[18px] md:text-[19px] font-light text-[#1f2230] flex items-center justify-center lg:justify-start gap-2">
                <span className="text-pink-500 text-[28px] leading-none">
                  «
                </span>
                {item.title}
              </h2>

              <p className="text-[#8b8b8b] text-[14px] md:text-[14px] leading-[1.9] mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}