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
    <div className="w-full overflow-hidden bg-black">

      {/* 🔥 TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* ================= LEFT CARD ================= */}
        <div
          onClick={goToAbout}
          className="relative overflow-hidden group cursor-pointer h-[280px] sm:h-[350px] md:h-[460px]"
        >

          {/* IMAGE */}
          <img
            src={img1}
            alt="dance"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-[1200ms]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* HOVER GLOW */}
          <div className="absolute inset-0 bg-[#ffb347]/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* BORDER EFFECT */}
          <div className="absolute inset-5 border border-white/20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition duration-500"></div>

          {/* CONTENT */}
          <div
            className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white
                       opacity-100 md:opacity-0
                       translate-y-0 md:translate-y-8
                       md:group-hover:opacity-100 md:group-hover:translate-y-0
                       transition duration-500"
          >

            <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-4 font-light">
              Discover Your Energy
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase leading-tight tracking-[0.08em]">
              STREET DANCE
            </h2>

            <div className="w-20 h-[2px] bg-white mt-5 mb-5"></div>

            <p className="text-sm text-gray-100 leading-[1.9] max-w-[300px]">
              Explore high-energy dance styles and unleash your confidence with every move.
            </p>

            <p className="text-white mt-7 text-xs uppercase tracking-[0.25em] group-hover:translate-x-2 transition duration-300">
              → Learn More
            </p>
          </div>
        </div>

        {/* ================= MIDDLE CARD ================= */}
        <div
          onClick={goToEvents}
          className="relative overflow-hidden group cursor-pointer h-[280px] sm:h-[350px] md:h-[460px]"
        >

          {/* IMAGE */}
          <img
            src={img2}
            alt="dance"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-[1200ms]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* HOVER GLOW */}
          <div className="absolute inset-0 bg-[#ffb347]/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* BORDER EFFECT */}
          <div className="absolute inset-5 border border-white/20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition duration-500"></div>

          {/* CONTENT */}
          <div
            className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 text-white
                       opacity-100 md:opacity-0
                       translate-y-0 md:translate-y-8
                       md:group-hover:opacity-100 md:group-hover:translate-y-0
                       transition duration-500"
          >

            <p className="uppercase tracking-[0.35em] text-[10px] sm:text-xs mb-4 font-light">
              Live The Moment
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase leading-tight tracking-[0.08em]">
              DANCE FEST
            </h2>

            <div className="w-20 h-[2px] bg-white mt-5 mb-5"></div>

            <p className="text-sm text-gray-100 leading-[1.9] max-w-[300px]">
              Join exciting dance festivals, live shows, and unforgettable performances.
            </p>

            <p className="text-white mt-7 text-xs uppercase tracking-[0.25em] group-hover:translate-x-2 transition duration-300">
              → Explore Events
            </p>
          </div>
        </div>

        {/* ================= RIGHT BOX ================= */}
        <div className="relative bg-[#111111] flex items-center justify-center text-center px-6 py-16 overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-[#ffb347]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-md">

            <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[10px] sm:text-xs mb-5">
              Dance Lifestyle
            </p>

            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase leading-[1.4] tracking-[0.12em]">
              “Dance is the hidden <br />
              language of the soul”
            </h2>

            <div className="w-24 h-[2px] bg-[#ffb347] mx-auto mt-8"></div>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM HERO SECTION */}
      <div
        className="relative min-h-[520px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* GLOW EFFECT */}
        <div className="absolute w-[500px] h-[500px] bg-[#ffb347]/10 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white px-2 sm:px-6 max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-[#ffb347] text-[10px] sm:text-sm mb-5">
            Feel The Beat
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-[0.15em] leading-[1.2] mb-6">
            START YOUR <br />
            DANCE JOURNEY
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-[2] max-w-2xl mx-auto mb-10">
            Step into a world filled with rhythm, passion, creativity, and movement.
            Join our growing dance community and express yourself through music.
          </p>

          {/* BUTTON */}
          <button
            onClick={goToBreakDance}
            className="group relative overflow-hidden border border-[#ffb347] bg-[#ffb347] text-black px-8 sm:px-10 py-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold transition-all duration-500 hover:bg-transparent hover:text-[#ffb347]"
          >
            <span className="relative z-10">Join Now</span>
          </button>
        </div>
      </div>

    </div>
  );
}