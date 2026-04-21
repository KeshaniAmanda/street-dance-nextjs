import bgImg from "../assets/h1-background-img-1.jpg";

import arrowMain from "../assets/arrow-img-1.png";
import arrowSmall from "../assets/arrow-img-2.png";
import arrowLine from "../assets/arrow-img-3.png";

export default function DanceSection() {
  const timeBlocks = [
    "MONTHS",
    "DAYS",
    "HOURS",
    "MINUTES",
    "SECONDS",
  ];

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full min-h-screen overflow-hidden text-white">

        {/* BACKGROUND */}
        <img
          src={bgImg}
          alt=""
          className="absolute w-full h-full object-cover scale-110 animate-bgZoom"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* DIAGONAL SHAPE */}
        <div className="absolute right-0 bottom-0 w-[50%] h-full bg-black/80 clip-diagonal"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center min-h-screen">

          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-20">

            <p className="text-gray-300 max-w-md text-center md:text-left mb-6 md:mb-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              nean commodo ligula eget dolor. Aenean massa. Cum sociis
              Theme natoque penatibus et magnis dis
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-right leading-tight">
              COUNT EVERY SECOND <br /> UNTIL THE EVENT
            </h1>

          </div>

          {/* TIMER */}
          <div className="flex justify-between items-center text-center mb-16">
            {timeBlocks.map((label, i) => (
              <div key={i}>
                <h2 className="text-6xl font-light tracking-wider">00</h2>
                <p className="text-[#19c2a0] text-sm tracking-widest mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="flex gap-4 max-w-3xl">
            <input
              type="email"
              placeholder="e-mail"
              className="flex-1 px-6 py-4 bg-transparent border border-[#19c2a0] text-white outline-none"
            />

            <button className="bg-[#19c2a0] px-10 py-4 font-semibold tracking-wide hover:bg-[#19c2a0] transition">
              PARTICIPATE
            </button>
          </div>

        </div>
      </div>

      {/* ================= WHITE SECTION ================= */}
      <div className="relative w-full bg-[#f5f5f5] py-24 overflow-hidden">

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

          <h2 className="text-4xl md:text-4xl text-right text-gray-800">
            MEETING OUR AMAZING <br /> DANCE TEACHERS
          </h2>

          <p className="text-gray-500 max-w-md text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            nean commodo ligula eget dolor. Aenean massa. Cum sociis
            Theme natoque penatibus et magnis dis
          </p>

        </div>

        {/* 🔥 ARROWS (2 ROWS: 8 + 8) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] overflow-hidden">

          <div className="flex flex-col gap-6 animate-arrowFlow">

            {/* ROW 1 */}
            <div className="flex gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 shrink-0 rotate-180"
                >
                  <img src={arrowMain} className="w-8" />
                  <img src={arrowSmall} className="w-5 opacity-80" />
                  <img src={arrowLine} className="w-6 opacity-60" />
                </div>
              ))}
            </div>

            {/* ROW 2 */}
            <div className="flex gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 shrink-0 rotate-180"
                >
                  <img src={arrowMain} className="w-8" />
                  <img src={arrowSmall} className="w-5 opacity-80" />
                  <img src={arrowLine} className="w-6 opacity-60" />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}