import React from "react";

// BRAND LOGOS
import h9f from "../assets/h9f.png";
import h9g from "../assets/h9g.png";
import h9h from "../assets/h9h.png";
import h9i from "../assets/h9i.png";
import h9j from "../assets/h9j.png";

const YellowBrandSection = () => {

  // 🔥 Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">

      {/* ================= YELLOW BRAND SECTION ================= */}
      <div className="w-full bg-pink-500 py-20 px-6 md:px-20">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

          {[h9f, h9g, h9h, h9i, h9j].map((logo, index) => (

            <div
              key={index}
              className="flex justify-center overflow-hidden group"
            >

              <img
                src={logo}
                alt="logo"
                onClick={scrollToTop}
                className="
                  h-16 md:h-24 object-contain
                  invert opacity-80
                  cursor-pointer

                  transition-all duration-500 ease-out

                  group-hover:-translate-x-5
                  group-hover:opacity-100
                  group-hover:invert-0
                  group-hover:brightness-0
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default YellowBrandSection;