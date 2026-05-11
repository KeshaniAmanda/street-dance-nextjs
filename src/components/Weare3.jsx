import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import arrow1 from "../assets/arrow-img-1.png";
import arrow2 from "../assets/arrow-img-2.png";
import arrow3 from "../assets/arrow-img-3.png";

import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.jpg";
import man4 from "../assets/man4.jpg";

const arrowsTop = [
  arrow1,
  arrow2,
  arrow3,
  arrow1,
  arrow2,
  arrow3,
  arrow1,
  arrow2,
];

const arrowsBottom = [
  arrow3,
  arrow1,
  arrow2,
  arrow3,
  arrow1,
  arrow2,
  arrow3,
  arrow1,
];

const teachers = [
  {
    img: man1,
    name: "DAVID HARRISON",
    role: "Coreographer",
  },
  {
    img: man2,
    name: "ANNA SMITH",
    role: "Dance Teacher",
  },
  {
    img: man3,
    name: "JOHN WALKER",
    role: "HipHop Instructor",
  },
  {
    img: man4,
    name: "EMMA WILLIAMS",
    role: "Modern Dancer",
  },
];

export default function DanceTeachers() {
  return (
    <section className="w-full bg-[#f3f3f3] overflow-hidden">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-14">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-5">

            {/* ARROWS */}
            <div className="space-y-5">

              {/* TOP 8 */}
              <div className="flex flex-wrap gap-4">
                {arrowsTop.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-[40px] md:w-[40px]"
                  />
                ))}
              </div>

              {/* BOTTOM 8 */}
              <div className="flex flex-wrap gap-4">
                {arrowsBottom.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-[40px] md:w-[40px]"
                  />
                ))}
              </div>
            </div>

            {/* TEXT */}
            <div className="relative -top-16">
  <p className="text-[15px] md:text-[16px] text-[#7a7a7a] leading-[1.9] max-w-[650px] text-right">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />
    nean commodo ligula eget dolor. Aenean massa. Cum <br /> sociis
    Theme natoque penatibus et magnis dis 
  </p>
</div>
          </div>

          {/* RIGHT */}
          <div>
           <h2 className="uppercase leading-[1.05] text-[#111] text-[25px] md:text-[42px] font-extralight">
  <span className="font-semibold">Meeting Our</span>{" "}
  <span className="font-semi">Amazing</span>
  <br />
  Dance <span className="font-bold">Teachers</span>
</h2>
          </div>

        </div>
      </div>

      {/* TEACHERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4">

        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            
            {/* IMAGE */}
            <img
              src={teacher.img}
              alt=""
              className="w-full h-[320px] md:h-[400px] object-cover"
            />

            {/* DARK BLUE OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-[#102b33]/80
                translate-y-full
                group-hover:translate-y-0
                transition-all duration-500
                flex flex-col items-center justify-center
              "
            >

              {/* NAME */}
              <h3 className="text-white text-[22px] md:text-[38px] font-bold uppercase text-center">
                {teacher.name}
              </h3>

              {/* ROLE */}
              <p className="text-white text-[16px] md:text-[24px] mt-2">
                {teacher.role}
              </p>

              {/* ICONS */}
              <div className="flex items-center gap-5 mt-7">

                <a href="/instagram">
                  <FaInstagram className="text-white text-[20px] hover:text-[#19d3c5] transition" />
                </a>

                <a href="/twitter">
                  <FaTwitter className="text-white text-[20px] hover:text-[#19d3c5] transition" />
                </a>

                <a href="/facebook">
                  <FaFacebookF className="text-white text-[20px] hover:text-[#19d3c5] transition" />
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}             