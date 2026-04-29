import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/about1.jpg";
import img2 from "../assets/ds5.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";

const About1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const data = [
    {
      img: img1,
      title: "BREAKDANCE",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
    {
      img: img2,
      title: "HIP HOP",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
    {
      img: img3,
      title: "POLE DANCING",
      desc: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.",
    },
  ];

  return (
    <div className="bg-gray-100">

      {/* 🔥 TOP 3 CARDS */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={handleClick}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-wide text-black">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM SECTION (IMAGE + TEXT) */}
      <div className="grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
  src={img4}
  alt="dance"
  className="w-full h-full object-cover"
/>

          {/* ▶ PLAY BUTTON */}
         <div
  onClick={() =>
    window.open(
      "https://player.vimeo.com/video/167769701?title=0&byline=0&portrait=0&autoplay=1",
      "_blank"
    )
  }
  className="absolute inset-0 flex items-center justify-center cursor-pointer"
>
  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
  </div>
</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-black text-white flex items-center">
          <div className="p-12 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semi leading-snug">
              DANCE COMPETITION CAMP.
              <br />
              TRAIN YOUR SKILLS TO THE MAX.
            </h2>

            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
              Lorem Ipsum gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
              vulputate cursus a sit amet mauris.
            </p>

           <button
  onClick={() => window.open("/moderndance", "_blank")}
  className="mt-4 text-[#20c4b7] text-xs font-bold flex items-center gap-2"
>
  → PARTICIPATE
</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About1;