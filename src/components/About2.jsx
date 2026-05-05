import React from "react";

const About2 = () => {
  const skills = [
    { name: "Adobe Photoshop", value: 68 },
    { name: "Adobe Illustrator", value: 55 },
    { name: "High Lunges", value: 87 },
    { name: "PHP,JS programming", value: 43 },
  ];

  const stats = [
    { number: "9859", label: "TEAM ENERGY RAISED" },
    { number: "8197", label: "LINES OF CODE" },
    { number: "1143", label: "COOL PROJECTS" },
    { number: "2197", label: "CUPS OF COFFEE" },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 TOP SECTION */}
      <div className="
        max-w-7xl mx-auto 
        py-10 sm:py-16 
        px-4 sm:px-6 
        grid grid-cols-1 md:grid-cols-2 
        gap-8 sm:gap-12 
        items-center 
        text-center md:text-right
      ">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="
            text-lg sm:text-2xl md:text-3xl 
            leading-snug 
            text-gray-800
          ">
            DANCE COMPETITION <span className="font-bold">CAMP.</span> <br />
            <span className="font-bold">TRAIN YOUR SKILLS</span> TO THE MAX.
          </h2>

          <p className="
            text-gray-500 
            mt-4 sm:mt-6 
            text-xs sm:text-sm 
            leading-6 sm:leading-relaxed
          ">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitu dolor lorem auci elit consequat ipsutissem niuis sed odio sit
            amet nibh cursus sit amet. Aenean commodo ligula eget dolor.
            Aenean massa donec vita. Sapien ut libero.
          </p>
        </div>

        {/* RIGHT PROGRESS BARS */}
        <div className="space-y-5 sm:space-y-6">
          {skills.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-500">{item.value}%</span>
              </div>

              <div className="w-full h-[3px] bg-gray-300">
                <div
                  className="h-[3px] bg-[#20c4b7] transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM COUNTERS */}
      <div className="bg-gray-100 py-10 sm:py-12">
        <div className="
          max-w-6xl mx-auto 
          px-4 sm:px-6 
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
          gap-6 sm:gap-8 
          text-center
        ">
          
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="
                text-2xl sm:text-4xl md:text-5xl 
                font-semibold 
                text-gray-800
              ">
                {item.number}
              </h3>

              <p className="
                text-black 
                text-xs sm:text-sm 
                mt-2 
                tracking-wide 
                font-medium
              ">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default About2;