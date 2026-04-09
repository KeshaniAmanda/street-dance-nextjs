import React from "react";

import heroImg from "../assets/h5b.jpg";
import signImg from "../assets/sign1.jpg";

const Sanu = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <p className="max-w-[600px] text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
          <h1 className="text-4xl font-bold tracking-widest">
            MUSIC <br /> CLASS
          </h1>
        </div>
      </div>

      {/* EVENT PASSED */}
      <div className="bg-blue-100 text-blue-800 text-sm px-6 py-3">
        This event has passed.
      </div>

      {/* TITLE + PRICE */}
      <div className="flex items-center justify-between px-6 md:px-16 py-6 border-b">
        <div className="flex items-center gap-4">
          {/* DATE BOX */}
          <div className="bg-green-500 text-white text-center px-4 py-3">
            <p className="text-lg font-bold">26</p>
            <p className="text-xs">DEC</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">MUSIC CLASS</h2>
            <p className="text-gray-500 text-sm">
              DECEMBER 26, 2024 @ 8:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* PRICE */}
        <div className="bg-black text-white px-6 py-2 font-semibold">
          $80
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-10">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={signImg}
            alt="event"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* MAP (FAKE UI STYLE) */}
        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center relative">

          <div className="absolute top-3 left-3 bg-white px-3 py-1 text-sm shadow">
            Map
          </div>

          <p className="text-gray-500">Google Map Placeholder</p>
        </div>
      </div>

      {/* EVENT DETAILS */}
      <div className="px-6 md:px-16 pb-16">
        <h3 className="text-xl font-semibold mb-6">EVENT DETAILS</h3>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">

          <div className="space-y-3">
            <p><span className="font-semibold text-black">Date:</span> December 26, 2024</p>
            <p><span className="font-semibold text-black">Time:</span> 8:00 am - 8:00 pm</p>
            <p><span className="font-semibold text-black">Venue:</span> HipHop</p>
            <p><span className="font-semibold text-black">Address:</span> 2777 Goethals Rd N</p>
          </div>

          <div className="space-y-3">
            <p><span className="font-semibold text-black">Organizer:</span> David Harrison</p>
            <p><span className="font-semibold text-black">Phone:</span> 1-677-124-44227</p>
            <p><span className="font-semibold text-black">Website:</span> info@yoursite.com</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Sanu;