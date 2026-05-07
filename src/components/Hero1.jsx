import img1 from "../assets/hero1a.jpg";
import img2 from "../assets/hero1b.jpg";
import bgImg from "../assets/home1.jpg";

export default function DanceSection() {

  // 🔥 FUNCTIONS
  const goToAbout = () => {
    window.open("/aboutUs", "_blank");
  };

  const goToEvents = () => {
    window.open("/event", "_blank");
  };

  const goToBreakDance = () => {
    window.open("/breakdance", "_blank");
  };

  return (
    <div className="w-full">

      {/* 🔥 TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[320px] md:h-[420px]">

        {/* ================= LEFT IMAGE ================= */}
        <div onClick={goToAbout} className="relative overflow-hidden group cursor-pointer">

          <img
            src={img1}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20 "></div>

          <div className="absolute inset-0 bg-[#0f2e2e]/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div
            className="absolute inset-0 flex flex-col justify-center px-8 text-white
                       opacity-0 translate-y-6
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition duration-500"
          >
            <p className="text-sm mb-2">Find the one for you</p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              CLASSES TIMETABLE
            </h2>

            <p className="text-yellow-400 mt-3 text-sm">→ EXPLORE</p>
          </div>
        </div>

        {/* ================= MIDDLE IMAGE ================= */}
        <div onClick={goToEvents} className="relative overflow-hidden group cursor-pointer">

          <img
            src={img2}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 bg-[#0f2e2e]/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div
            className="absolute inset-0 flex flex-col justify-center px-8 text-white
                       opacity-0 translate-y-6
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition duration-500"
          >
            <p className="text-sm mb-2">Find the one for you</p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              EVENTS CALENDAR
            </h2>

            <p className="text-yellow-400 mt-3 text-sm">→ EXPLORE</p>
          </div>
        </div>

        {/* ================= RIGHT BOX ================= */}
        <div className="bg-yellow-400 flex items-center justify-center text-center px-6">
          <h2 className="text-white text-lg md:text-2xl font-semibold uppercase leading-relaxed">
            “We want to dance the <br /> whole night away”
          </h2>
        </div>
      </div>

      {/* 🔥 BOTTOM SECTION */}
      <div
        className="relative h-[420px] md:h-[520px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 text-white px-4">
          <p className="italic text-lg md:text-xl mb-2">
            Let’s Dance Now
          </p>

          <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-4">
            JOIN OUR TRIBE
          </h1>

          <button
            onClick={goToBreakDance}
            className="text-yellow-400 px-6 py-2 uppercase text-sm transition cursor-pointer"
          >
            → Participate
          </button>
        </div>
      </div>

    </div>
  );
}