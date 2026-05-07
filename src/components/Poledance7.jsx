import React, { useState } from "react";

import m1 from "../assets/m6.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m1.jpg";

export default function PoleGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [m1, m2, m3, m4, m5, m6];

  return (
    <>
      {/* IMAGE SECTION */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[220px] md:h-[320px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* HOVER DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL SCREEN IMAGE POPUP */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="preview"
            className="max-w-[95%] max-h-[95vh] object-contain rounded-lg"
          />

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}