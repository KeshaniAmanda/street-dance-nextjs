import React from "react";

import h9a from "../assets/h9a.jpg";
import h9b from "../assets/h9b.jpg";
import h9c from "../assets/h9c.jpg";
import h9d from "../assets/h9d.jpg";
import h9e from "../assets/h9e.jpg";

// BRAND LOGOS
import h9f from "../assets/h9f.png";
import h9g from "../assets/h9g.png";
import h9h from "../assets/h9h.png";
import h9i from "../assets/h9i.png";
import h9j from "../assets/h9j.png";

const Hero9 = () => {

  // 🔥 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">

      {/* ================= TOP SECTION ================= */}
      <div
        className="w-full py-28 px-4 md:px-16 bg-cover relative"
        style={{
          backgroundImage: `url(${h9a})`,
          backgroundPosition: "20% center",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 items-center">

          {/* TITLE */}
          <h2 className="text-black text-2xl md:text-4xl font-light uppercase leading-tight text-right">
            <span className="font-semibold">MEETING OUR</span> AMAZING <br />
            DANCE <span className="font-semibold">TEACHERS</span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            nean commodo ligula eget dolor. Aenean massa. Cum
            sociis Theme natoque penatibus et magnis dis
          </p>

        </div>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4">

        {[
          { img: h9b, name: "DAVID HARRISON", role: "Dancer", dir: "right" },
          { img: h9c, name: "MELANI GRIFIT", role: "Choreographer", dir: "left" },
          { img: h9d, name: "ANTONIO JOHNSON", role: "Choreographer", dir: "right" },
          { img: h9e, name: "JESSICA JUNG", role: "Dancer", dir: "left" },
        ].map((item, index) => (

          <div key={index} className="relative overflow-hidden group">

            {/* IMAGE */}
            <img
              src={item.img}
              alt=""
              className={`
                w-full h-[300px] md:h-[420px] object-cover
                grayscale
                group-hover:grayscale-0
                group-hover:scale-110
                ${
                  item.dir === "right"
                    ? "group-hover:translate-x-4"
                    : "group-hover:-translate-x-4"
                }
                transition duration-700
              `}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* CONTENT */}
            <div
              className="
                absolute inset-0
                flex flex-col items-center justify-center
                text-white text-center

                translate-y-20 opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100

                transition-all duration-700 ease-out
              "
            >

              {/* NAME */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {item.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-gray-300 mb-5 tracking-widest uppercase">
                {item.role}
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 text-lg">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href="https://www.tumblr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  <i className="fab fa-tumblr"></i>
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ================= YELLOW BRAND SECTION ================= */}
      <div className="w-full bg-yellow-500 py-20 px-6 md:px-20">
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

export default Hero9;