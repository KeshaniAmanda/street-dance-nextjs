import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiUser } from "react-icons/fi";

import h6a from "../assets/lp6a.jpg";
import h6b from "../assets/pd2.jpg";
import h6c from "../assets/lp6b.jpg";

const data = [
  {
    id: 1,
    img: h6a,
    title: "SHARE YOUR KNOWLEDGE",
    desc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa ...",
    date: "March 15, 2017",
  },
  {
    id: 2,
    img: h6b,
    title: "FREESTYLE BATTLE",
    desc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa ...",
    date: "April 10, 2017",
  },
  {
    id: 3,
    img: h6c,
    title: "CREW COMPETITION",
    desc: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa ...",
    date: "May 22, 2017",
  },
];

const Hero6 = () => {
  const navigate = useNavigate();

  // 🔥 TITLE CLICK NAVIGATION
  const handleTitleClick = (id) => {
    if (id === 1) navigate("/blog");
    if (id === 2) navigate("/blog1");
    if (id === 3) navigate("/blog2");
  };

  return (
    <section className="w-full bg-white py-20 md:py-48 px-4 sm:px-6 md:px-16">

      {/* TOP TEXT */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12 md:-mt-16">
        
        <p className="text-gray-500 leading-relaxed max-w-md text-left md:text-right mx-auto md:ml-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo
          ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus
          et magnis dis
        </p>

        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide leading-tight text-center md:text-left">
          Keep Track Of 
          <span className="font-semibold"> Our Amazing </span> <br />
          <span className="font-semibold">Upcoming</span> Events
        </h2>

      </div>

      {/* CARDS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="group cursor-pointer">

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                onClick={() => handleTitleClick(item.id)}
                className="w-full h-[200px] sm:h-[220px] object-cover group-hover:scale-105 transition duration-500 cursor-pointer hover:opacity-90"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-4">

              {/* ICON ROW */}
              <div className="text-xs flex flex-wrap items-center gap-4 mb-2">

                {/* DATE */}
                <span
                  onClick={() => navigate("/march")}
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 cursor-pointer transition duration-300"
                >
                  <FiCalendar className="text-pink-500 text-sm" />
                  {item.date}
                </span>

                {/* ADMIN */}
                <span className="flex items-center gap-1 text-gray-400">
                  <FiUser className="text-pink-500 text-sm" />

                  <span>By</span>

                  <span
                    onClick={() => navigate("/admin")}
                    className="hover:text-pink-500 cursor-pointer transition duration-300"
                  >
                    admin
                  </span>
                </span>

              </div>

              {/* TITLE */}
              <h3
                onClick={() => handleTitleClick(item.id)}
                className="text-lg font-semibold text-black hover:text-pink-500 cursor-pointer transition duration-300 mb-2"
              >
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {item.desc}
              </p>

              <button
                onClick={() => handleTitleClick(item.id)}
                className="text-pink-500 font-semibold text-xs tracking-widest flex items-center gap-2 hover:gap-3 transition-all mt-2"
              >
                → READ MORE
              </button>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Hero6;