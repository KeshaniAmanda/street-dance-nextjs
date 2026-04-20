import React from "react";

// import images
import ds1 from "../assets/ds1.jpg";
import ds2 from "../assets/ds2.jpg";
import ds3 from "../assets/ds3.jpg";
import ds4 from "../assets/ds4.jpg";
import ds5 from "../assets/ds5.jpg";
import ds6 from "../assets/ds6.jpg";

const images = [
  { src: ds1, title: "CLASSICAL BALLET" },
  { src: ds2, title: "CONTEMPORARY" },
  { src: ds3, title: "KIDS DANCE" },
  { src: ds4, title: "LATIN DANCE" },
  { src: ds5, title: "HIP HOP" },
  { src: ds6, title: "AERIAL" },
];

const Ds3 = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">

        {images.map((item, index) => (
          <div key={index} className="relative group overflow-hidden">

            {/* Image */}
            <img
              src={item.src}
              alt={`dance-${index}`}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end items-start text-left p-6">
              
              <p className="text-sm mb-1">
                Find the one for you
              </p>

              <h2 className="text-2xl font-bold tracking-wide">
                {item.title}
              </h2>

              <button className="mt-3 text-[#19c2a0] flex items-center gap-2">
                → Explore
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Ds3;