import React from "react";
import eventImg from "../assets/event.jpg";
import { Link } from "react-router-dom";

const days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

const dates = [
  ["30","31","1","2","3","4","5"],
  ["6","7","8","9","10","11","12"],
  ["13","14","15","16","17","18","19"],
  ["20","21","22","23","24","25","26"],
  ["27","28","29","30","1","2","3"],
];

export default function Events() {
  return (
    <div className="bg-[#f3f3f3]">

      {/* HERO */}
      <div
        className="
          h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] 
          bg-cover bg-center relative
        "
        style={{ backgroundImage: `url(${eventImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="
            text-2xl sm:text-4xl md:text-5xl 
            tracking-widest font-semibold
          ">
            EVENTS CALENDAR
          </h1>

          <p className="text-xs sm:text-sm mt-2 text-gray-200">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Events Archive
          </p>
        </div>
      </div>

      {/* SEARCH SECTION */}
      <div className="px-4 sm:px-6 md:px-10 py-10 sm:py-16">

        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-6 sm:gap-10 items-end
        ">
          
          <div>
            <p className="text-[12px] sm:text-[13px] mb-2">EVENTS IN</p>
            <input
              value="2026-04"
              readOnly
              className="w-full border h-[45px] sm:h-[55px] px-4 bg-white text-sm"
            />
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] mb-2">SEARCH</p>
            <input
              placeholder="Keyword"
              className="w-full border h-[45px] sm:h-[55px] px-4 bg-white text-sm"
            />
          </div>

          <button className="
            h-[45px] sm:h-[55px] 
            bg-[#1abc9c] text-white 
            text-xs sm:text-sm 
            font-semibold tracking-widest
          ">
            FIND EVENTS
          </button>
        </div>

        {/* VIEW */}
        <div className="mt-8 sm:mt-10">
          <p className="text-[12px] sm:text-[13px] mb-2">VIEW AS:</p>

          <div className="
            border h-[40px] sm:h-[45px] 
            flex items-center px-4 
            bg-white text-sm justify-between
          ">
            Month
            <span>▲</span>
          </div>
        </div>

        {/* INFO BAR */}
        <div className="
          mt-6 sm:mt-10 
          bg-[#cfe8f3] text-[#3a7ca5] 
          px-4 py-2 sm:py-3 
          text-xs sm:text-sm
        ">
          &lt; March &nbsp;&nbsp; There were no results found.
        </div>
      </div>

      {/* CALENDAR */}
      <div className="px-2 sm:px-6 md:px-10 pb-10 sm:pb-20 overflow-x-auto">

        <div className="min-w-[700px] border border-[#e5e5e5] bg-white">

          {/* DAYS */}
          <div className="grid grid-cols-7 border-b border-[#e5e5e5]">
            {days.map((day) => (
              <div
                key={day}
                className="
                  text-center py-3 sm:py-5 
                  text-[10px] sm:text-[12px] 
                  tracking-[1px] sm:tracking-[2px] 
                  text-[#333] 
                  border-r border-[#e5e5e5] last:border-r-0
                "
              >
                {day}
              </div>
            ))}
          </div>

          {/* WEEKS */}
          {dates.map((week, i) => (
            <div key={i} className="grid grid-cols-7 border-b border-[#e5e5e5] last:border-b-0">
              {week.map((date, idx) => (
                <div
                  key={idx}
                  className={`
                    h-[90px] sm:h-[120px] md:h-[140px] 
                    p-2 sm:p-3 
                    border-r border-[#e5e5e5] last:border-r-0
                    ${date === "10"
                      ? "bg-[#1abc9c] text-white"
                      : "bg-[#fafafa] text-[#999]"
                    }
                  `}
                >
                  <span className="text-[12px] sm:text-[14px]">{date}</span>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}