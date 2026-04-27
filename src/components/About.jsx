import React from "react";
import heroImg from "../assets/about-us-title-img.jpg"; // <-- image path

const AboutUs = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl ml-10 md:ml-20 px-6">
          
          <h1 className="text-white text-3xl md:text-5xl font-semi  max-w-4xl text-left">
            ABOUT ME AND DANCE. GET TO KNOW <br />
            ME AND MY WORK
          </h1>

          <p className="text-gray-300 mt-6 max-w-4xl text-xs md:text-base">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem auci elit consequat<br />ipsutissem niuis sed odio
            sit amet nibh vulputate cursus amet.
          </p>

        </div>
      </div>

      {/* NEXT SECTION */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <p className="text-gray-500 leading-relaxed text-right text-lg ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br /> nean
            commodo ligula eget dolor. Aenean massa. Cum<br /> sociis Theme natoque
            penatibus et magnis dis.
          </p>

          <h2 className="text-4xl md:text-4xl text-gray-800 text-center md:text-left">
  CHOOSE THE <span className="font-semibold">RIGHT CLASS FOR</span> <br />
  <span className="font-semibold">YOU AND CHANGE</span> YOUR LIFE
</h2>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;