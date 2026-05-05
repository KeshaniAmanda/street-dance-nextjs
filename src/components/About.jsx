import React from "react";
import heroImg from "../assets/about-us-title-img.jpg";

const AboutUs = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="
          relative w-full 
          h-[300px] sm:h-[450px] md:h-[60vh] lg:h-[70vh] 
          bg-cover bg-center 
          flex items-center
        "
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        {/* CONTENT */}
        <div className="
          relative z-10 
          max-w-6xl 
          ml-4 sm:ml-10 md:ml-20 
          px-4 sm:px-6
        ">
          
          <h1 className="
            text-white 
            text-xl sm:text-3xl md:text-5xl 
            font-semibold 
            max-w-4xl 
            text-left
          ">
            ABOUT ME AND DANCE. GET TO KNOW <br className="hidden sm:block" />
            ME AND MY WORK
          </h1>

          <p className="
            text-gray-300 
            mt-4 sm:mt-6 
            max-w-4xl 
            text-xs sm:text-sm md:text-base 
            leading-5 sm:leading-7
          ">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem auci elit consequat
            ipsutissem niuis sed odio sit amet nibh vulputate cursus amet.
          </p>

        </div>
      </div>

      {/* NEXT SECTION */}
      <div className="bg-gray-100 py-10 sm:py-16 md:py-20">
        <div className="
          max-w-6xl mx-auto 
          px-4 sm:px-6 
          grid grid-cols-1 md:grid-cols-2 
          gap-6 sm:gap-10 
          items-center
        ">
          
          <p className="
            text-gray-500 
            text-sm sm:text-base md:text-lg 
            leading-6 sm:leading-relaxed 
            text-center md:text-right
          ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis dis.
          </p>

          <h2 className="
            text-xl sm:text-3xl md:text-4xl 
            text-gray-800 
            text-center md:text-left
          ">
            CHOOSE THE <span className="font-semibold">RIGHT CLASS FOR</span> <br />
            <span className="font-semibold">YOU AND CHANGE</span> YOUR LIFE
          </h2>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;