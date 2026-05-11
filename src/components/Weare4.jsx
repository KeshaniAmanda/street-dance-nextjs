import React, { useState } from "react";

import wa1 from "../assets/wa1.png";
import wa2 from "../assets/wa2.png";
import wa3 from "../assets/wa3.png";
import wa4 from "../assets/wa4.png";
import wa5 from "../assets/wa5.png";
import wa6 from "../assets/wa6.png";
import wa7 from "../assets/wa7.png";
import wa8 from "../assets/wa8.png";

import waa1 from "../assets/waa1.png";
import waa2 from "../assets/waa2.png";
import waa3 from "../assets/waa3.png";
import waa4 from "../assets/waa4.png";
import waa5 from "../assets/waa5.png";
import waa6 from "../assets/waa6.png";
import waa7 from "../assets/waa7.png";
import waa8 from "../assets/waa8.png";

const brands = [
  {
    gray: wa1,
    color: waa1,
  },
  {
    gray: wa2,
    color: waa2,
  },
  {
    gray: wa3,
    color: waa3,
  },
  {
    gray: wa4,
    color: waa4,
  },
  {
    gray: wa5,
    color: waa5,
  },
  {
    gray: wa6,
    color: waa6,
  },
  {
    gray: wa7,
    color: waa7,
  },
  {
    gray: wa8,
    color: waa8,
  },
];

export default function BrandSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* TOP TEXT */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT TITLE */}
          <div>
           <h2 className="uppercase leading-[1.05] text-[#222] text-[30px] md:text-[35px] font-extralight text-right">
  Our Ensemble Is <span className="font-bold">Taking</span>
  <br />

  <span className="font-bold whitespace-nowrap">
    Over The World
  </span>{" "}
  Join Us Now
</h2>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-[15px] md:text-[16px] text-[#8a8a8a] leading-[2] max-w-[520px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              nean commodo ligula eget dolor. Aenean massa. Cum sociis
              Theme natoque penatibus et magnis dis.
            </p>
          </div>

        </div>
      </div>

      {/* BRAND LOGOS */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-[#dddddd]">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {brands.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="
                relative
                h-[190px]
                border-r
                border-b
                border-[#dddddd]
                flex
                items-center
                justify-center
                cursor-pointer
                overflow-hidden
                bg-transparent
              "
            >

              {/* GRAY IMAGE */}
              <img
                src={item.gray}
                alt=""
                className={`
                  absolute
                  w-[120px]
                  md:w-[150px]
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "opacity-0 scale-90"
                      : "opacity-100 scale-100"
                  }
                `}
              />

              {/* COLOR IMAGE */}
              <img
                src={item.color}
                alt=""
                className={`
                  absolute
                  w-[120px]
                  md:w-[150px]
                  transition-all
                  duration-500
                  ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }
                `}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}