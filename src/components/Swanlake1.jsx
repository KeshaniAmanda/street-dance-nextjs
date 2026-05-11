import React, { useState } from "react";
import { CalendarDays, Clock, MapPin, Phone, User, Globe, Mail } from "lucide-react";

import heroImg from "../assets/slb.jpg";
import signImg from "../assets/slb1.jpg";

const Swanlake1 = () => {

  const [activeBtn, setActiveBtn] = useState("google");

  return (
    <div className="w-full font-sans text-[#222]">

      {/* HERO SECTION */}
      <div
        className="w-full h-[520px] bg-cover bg-center flex items-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16 text-white">

          <div className="max-w-[580px] text-right ml-6 md:ml-24 text-white ">
          
            <p className="text-sm md:text-base opacity-80 leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br /> ligula eget dolor.
              Aenean massa. Cum sociis Theme natoque penatibus et<br /> magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* RIGHT TITLE */}
           <div className="text-left ml-0 md:-ml-10">
              <h1 className="text-white text-4xl md:text-5xl leading-tight">
  <span className="font-bold">SWAN LAKE </span>
</h1>

<h2 className="text-white text-4xl md:text-5xl mt-2">
BALLET<span className="font-semi"></span>
</h2>
            </div>

        </div>
      </div>

      <div className="mt-24 w-[1200px] md:w-[1400px] mx-auto bg-[#e6f0ff] text-gray-400 text-sm px-5 md:px-12 py-3">
  This event has passed.
</div>

      {/* TITLE + PRICE */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 md:px-16 py-10 border-b">

        <div className="flex items-center gap-6">
          <div className="bg-emerald-400 text-white text-center px-6 py-5 shadow-md">
            <p className="text-2xl font-bold leading-none">26</p>
            <p className="text-base font-bold tracking-widest mt-1">DEC</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-wide">
              MUSIC CLASS
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              DECEMBER 26, 2024 @ 8:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <div className="bg-black text-white px-10 py-2 text-lg font-semibold shadow-md -mt-10">
          $120
        </div>
      </div>

      {/* IMAGE + MAP */}
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-14">

        <div className="overflow-hidden">
          <img
            src={signImg}
            alt="event"
            className="w-full h-[450px] object-cover  transition duration-500"
          />
        </div>

        <div className="w-full h-[470px] overflow-hidden shadow">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="px-6 md:px-16 mb-16">

        

        <p className="text-gray-600 text-[15px] leading-relaxed max-w-full">
         Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur<br/>
         ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,<br/>
         blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros<br/>
         faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>

       

      </div>

      {/* EVENT DETAILS */}
      <div className="px-6 md:px-16 pb-24">

        <h3 className="text-2xl font-semibold mb-10 tracking-wide">
          EVENT DETAILS
        </h3>

        <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-600">

          <div className="space-y-5">

            <p className="flex items-center gap-3">
              <CalendarDays size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Date:</span> December 26, 2024 @ 8:00 am - 8:00 pm</span>
            </p>

            <p className="flex items-center gap-3">
              <Clock size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Time:</span> 8:00 am - 8:00 pm</span>
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Venue:</span> HipHop</span>
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Address:</span> 2777 Goethals Rd N</span>
            </p>

          </div>

          <div className="space-y-5">

            <p className="flex items-center gap-3">
              <User size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Organizer Name:</span> David Harrison</span>
            </p>

            <p className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-500" />
              <span><span className="font-semibold text-black">Phone:</span> 1-677-124-44227</span>
            </p>

            <p className="flex items-center gap-3">
              <Globe size={18} className="text-emerald-500" />
              <span>
                <span className="font-semibold text-black">Website:</span>{" "}
                <a href="http://yoursite.com" target="_blank" className="hover:underline">
                  yoursite.com
                </a>
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} className="text-emerald-500" />
              <span>
                <span className="font-semibold text-black">Email:</span>{" "}
                <a href="mailto:info@yoursite.com" className="hover:underline">
                  info@yoursite.com
                </a>
              </span>
            </p>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-5 mt-12">

          <button
            onClick={() => setActiveBtn("google")}
            className="px-7 py-3 text-sm font-semibold shadow transition 
                       bg-emerald-500 text-white 
                       hover:bg-black"
          >
            + GOOGLE CALENDAR
          </button>

          <button
            onClick={() => setActiveBtn("ical")}
            className="px-7 py-3 text-sm font-semibold shadow transition 
                       bg-black text-white 
                       hover:bg-emerald-500"
          >
            + ADD TO ICALENDAR
          </button>

        </div>

      </div>

    </div>
  );
};

export default Swanlake1;