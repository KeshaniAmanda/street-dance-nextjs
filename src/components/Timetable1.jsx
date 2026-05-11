import React, { useState } from "react";
import aboutImg from "../assets/aboutus.jpg";

const AboutUs = () => {
  const [activeFilter, setActiveFilter] = useState("ALL EVENTS");

  const scheduleData = [
    {
      time: "09:00 - 10:00",
      days: [
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        {
          title: "Ballet",
          teacher: "Brandon Burns",
          category: "BALLET",
        },
        null,
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        null,
      ],
    },

    {
      time: "10:00 - 11:00",
      days: [
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
        {
          title: "Yoga Dance",
          teacher: "Teresa Soto",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        null,
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
      ],
    },

    {
      time: "15:00 - 16:00",
      days: [
        null,
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
        {
          title: "Yoga Dance",
          teacher: "Jacob Spencer",
          category: "YOGA DANCE",
        },
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        null,
        {
          title: "Yoga Dance",
          teacher: "Nathan Shaw",
          category: "YOGA DANCE",
        },
        null,
      ],
    },

    {
      time: "18:00 - 19:00",
      days: [
        {
          title: "Ballet",
          teacher: "Lori Valdez",
          category: "BALLET",
        },
        null,
        {
          title: "Modern Dance",
          teacher: "Gloria Parker",
          category: "MODERN DANCE",
        },
        {
          title: "Ballet",
          teacher: "Donald Cox",
          category: "BALLET",
        },
        {
          title: "Yoga Dance",
          teacher: "Michael Lewis",
          category: "YOGA DANCE",
        },
        null,
        {
          title: "Modern Dance",
          teacher: "Jacob Spencer",
          category: "MODERN DANCE",
        },
      ],
    },
  ];

  const buttons = [
    "ALL EVENTS",
    "YOGA DANCE",
    "MODERN DANCE",
    "BALLET",
  ];

  return (
    <div className="w-full bg-[#f7f7f7]">
      {/* HERO SECTION */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center mt-6"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 flex items-center ">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 w-full items-center">
            {/* LEFT TEXT */}
            <p className="text-gray-300 text-[14px] leading-7 max-w-2xl text-right">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus. Phasellus
              <br />
              viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet.
              <br />
              Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi
            </p>

            {/* RIGHT TITLE */}
            <div className="text-left -ml-6">
              <h1 className="text-white text-4xl md:text-5xl leading-tight">
                <span className="font-bold">ABOUT US</span> AND DANCE
              </h1>

              <h2 className="text-white text-4xl md:text-5xl mt-2">
                GET TO <span className="font-bold">KNOW ME</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 justify-start mt-12 px-6 md:px-16">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(btn)}
            className={`px-6 py-2 text-[12px] tracking-wider transition duration-300
              
              ${
                activeFilter === btn
                  ? "bg-[#21c7a8] text-white"
                  : "bg-[#21c7a8] text-white hover:bg-[#21c7a8]"
              }
            `}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* TIMETABLE */}
      <div className="mt-12 px-4 md:px-16 pb-20">
        <div className="border border-gray-200 overflow-x-auto bg-white">
          <table className="w-full text-center text-[13px]">
            {/* HEADER */}
            <thead>
              <tr className="bg-white text-gray-500 uppercase text-[11px] tracking-wider text-base">
                <th className="py-8 border-r w-[120px]"></th>

                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <th
                    key={day}
                    className="py-8 border-r last:border-r-0"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-gray-600">
              {scheduleData.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t">
                  {/* TIME */}
                  <td className="py-12 border-r text-gray-400 text-base">
                    {row.time}
                  </td>

                  {/* DAYS */}
                  {row.days.map((item, index) => {
                    const shouldShow =
                      activeFilter === "ALL EVENTS" ||
                      item?.category === activeFilter;

                    return (
                      <td
                        key={index}
                        className="py-12 border-r last:border-r-0 text-base"
                      >
                        {item && shouldShow ? (
                          <>
                            <p className="text-[#21c7a8] font-medium">
                              {item.title}
                            </p>

                            <p className="text-gray-400 text-base">
                              {item.teacher}
                            </p>

                            <p className="text-gray-400 text-sm mt-1">
                              09:00 <br /> 10:00
                            </p>
                          </>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;