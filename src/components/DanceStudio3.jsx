import React from "react";

import arrow1 from "../assets/arrow-img-1.png";
import arrow2 from "../assets/arrow-img-2.png";
import arrow3 from "../assets/arrow-img-3.png";

const arrows = [
  arrow1, arrow2, arrow3,
  arrow1, arrow2, arrow3,
  arrow1, arrow2, arrow3,
  arrow1, arrow2, arrow3,
];

const DS3 = () => {
  return (
    <div className="w-full bg-white">

      {/* ================= TOP SECTION ================= */}
      <section className="py-24 px-6 md:px-20 border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md text-right ml-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nean commodo ligula eget dolor.
            Aenean massa. Cum sociis Theme natoque penatibus et magnis dis
          </p>

          {/* RIGHT HEADING */}
          <h2 className="text-3xl md:text-4xl leading-tight tracking-wide text-black text-left ">
            KEEP TRACK OF OUR AMAZING <br />
            UPCOMING EVENTS
          </h2>
        </div>

        {/* EMPTY MESSAGE */}
        <p className="mt-14 text-gray-400 text-sm">
          Sorry, no posts matched your criteria.
        </p>
      </section>


      {/* ================= BOTTOM SECTION ================= */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (ARROWS + TITLE) */}
          <div className="flex items-center gap-8">

            {/* ARROWS */}
            <div className="grid grid-cols-6 gap-3 max-w-xs">
              {arrows.map((arrow, index) => (
                <img
                  key={index}
                  src={arrow}
                  alt="arrow"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              ))}
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl leading-tight text-black text-right md:col-span-2">
              MEETING OUR AMAZING <br />
              DANCE TEACHERS
            </h2>

          </div>

          {/* RIGHT SIDE (DESCRIPTION) */}
          <div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis Theme natoque penatibus et magnis dis.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DS3;