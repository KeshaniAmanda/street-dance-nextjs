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
      <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center text-right">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl leading-snug text-gray-800">
  DANCE COMPETITION <span className="font-bold">CAMP.</span> <br />
  <span className="font-bold">TRAIN YOUR SKILLS</span> TO THE MAX.
</h2>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean<br />
            sollicitu dolor lorem auci elit consequat ipsutissem niuis sed odio sit<br />
            amet nibh cursus sit amet. Aenean commodo ligula eget dolor.<br />
            Aenean massa donec vita. Sapien ut libero.
          </p>
        </div>

        {/* RIGHT PROGRESS BARS */}
        <div className="space-y-6">
          {skills.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-500">{item.value}%</span>
              </div>

              <div className="w-full h-[3px] bg-gray-300">
                <div
                  className="h-[3px] bg-[#20c4b7]"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM COUNTERS */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-semi text-gray-800">
                {item.number}
              </h3>
              <p className="text-black text-sm mt-2 tracking-wide font-semi">
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