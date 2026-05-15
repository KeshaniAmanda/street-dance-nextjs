import Hbg from "../assets/Hbg.jpg";

export default function Hero2() {
  return (
    <div className="w-full overflow-hidden bg-black">

      {/* 🔥 TOP SECTION */}
      <section className="relative bg-[#0f0f0f] py-24 md:py-28 px-6 md:px-20 overflow-hidden">

        {/* GLOW EFFECT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffb347]/10 blur-3xl rounded-full"></div>

        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[60px] md:text-[180px] font-black text-white/5 uppercase tracking-[0.2em] pointer-events-none">
          Events
        </h1>

        {/* HEADING */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[#ffb347] text-xs mb-6">
            Upcoming Experiences
          </p>

          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-[0.12em] leading-[1.2]">
            Dance Events & <br />
            Live Performances
          </h2>

          <div className="w-24 h-[2px] bg-[#ffb347] mx-auto mt-8"></div>

          <p className="text-gray-400 text-sm md:text-base leading-[2] mt-8 max-w-2xl mx-auto">
            Experience unforgettable dance nights, freestyle battles,
            live performances, and creative showcases with talented artists.
          </p>
        </div>

        {/* EVENT CARDS */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">

          {/* CARD 1 */}
          <div className="group relative bg-[#151515] border border-white/10 p-10 overflow-hidden hover:-translate-y-4 transition-all duration-500">

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-[#ffb347]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <p className="relative z-10 text-[#ffb347] text-sm uppercase tracking-[0.3em] mb-5">
              July 18
            </p>

            <h3 className="relative z-10 text-white text-3xl font-light uppercase mb-5 tracking-[0.08em] group-hover:text-[#ffb347] transition duration-500">
              Dance Battle
            </h3>

            <div className="relative z-10 w-16 h-[2px] bg-[#ffb347] mb-6"></div>

            <p className="relative z-10 text-gray-400 text-sm leading-[2]">
              Compete with talented dancers and showcase your unique style
              through energetic freestyle performances.
            </p>

            <p className="relative z-10 mt-8 text-xs uppercase tracking-[0.25em] text-white group-hover:text-[#ffb347] transition duration-500">
              → Explore Event
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group relative bg-[#ffb347] p-10 overflow-hidden hover:-translate-y-4 transition-all duration-500">

            {/* LIGHT EFFECT */}
            <div className="absolute -top-20 -right-20 w-[220px] h-[220px] bg-white/20 rounded-full blur-3xl"></div>

            <p className="relative z-10 text-black text-sm uppercase tracking-[0.3em] mb-5">
              August 05
            </p>

            <h3 className="relative z-10 text-black text-3xl font-light uppercase mb-5 tracking-[0.08em]">
              Music Festival
            </h3>

            <div className="relative z-10 w-16 h-[2px] bg-black mb-6"></div>

            <p className="relative z-10 text-black/80 text-sm leading-[2]">
              Feel the rhythm and enjoy unforgettable live performances
              from world-class dancers and artists.
            </p>

            <p className="relative z-10 mt-8 text-xs uppercase tracking-[0.25em] text-black">
              → Join Festival
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group relative bg-[#151515] border border-white/10 p-10 overflow-hidden hover:-translate-y-4 transition-all duration-500">

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-[#ffb347]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <p className="relative z-10 text-[#ffb347] text-sm uppercase tracking-[0.3em] mb-5">
              September 12
            </p>

            <h3 className="relative z-10 text-white text-3xl font-light uppercase mb-5 tracking-[0.08em] group-hover:text-[#ffb347] transition duration-500">
              Street Session
            </h3>

            <div className="relative z-10 w-16 h-[2px] bg-[#ffb347] mb-6"></div>

            <p className="relative z-10 text-gray-400 text-sm leading-[2]">
              Join freestyle dance sessions and connect with passionate
              performers from around the city.
            </p>

            <p className="relative z-10 mt-8 text-xs uppercase tracking-[0.25em] text-white group-hover:text-[#ffb347] transition duration-500">
              → View Session
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 TEACHERS SECTION */}
      <section
        className="relative py-28 px-6 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${Hbg})` }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffb347]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-right animate-slideLeft">

            <p className="uppercase tracking-[0.4em] text-[#ffb347] text-xs mb-6">
              Meet The Team
            </p>

            <h2 className="text-white text-[34px] sm:text-[46px] md:text-[60px] leading-[1.1] uppercase font-extralight tracking-[0.1em]">
              Creative <span className="text-[#ffb347] font-semibold">Dance</span> <br />
              Instructors
            </h2>

            <div className="w-24 h-[2px] bg-[#ffb347] mt-8 ml-auto mr-auto lg:mr-0"></div>
          </div>

          {/* RIGHT SIDE */}
          <div className="animate-slideRight">

            <p className="text-gray-300 text-sm md:text-base leading-[2.1] max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Learn from experienced dance mentors who inspire confidence,
              creativity, and passion through every movement. Our instructors
              guide dancers to unlock their full artistic potential with modern
              techniques and performance training.
            </p>

            {/* BUTTON */}
            <div className="mt-10 flex justify-center lg:justify-start">

              
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mt-28">

          <div className="group text-center border border-white/10 py-12 backdrop-blur-md bg-white/5 hover:bg-[#ffb347] transition duration-500">

            <h3 className="text-white group-hover:text-black text-4xl md:text-5xl font-bold mb-4 transition duration-500">
              15+
            </h3>

            <p className="text-gray-400 group-hover:text-black uppercase tracking-[0.25em] text-xs transition duration-500">
              Dance Styles
            </p>
          </div>

          <div className="group text-center border border-white/10 py-12 backdrop-blur-md bg-white/5 hover:bg-[#ffb347] transition duration-500">

            <h3 className="text-white group-hover:text-black text-4xl md:text-5xl font-bold mb-4 transition duration-500">
              40+
            </h3>

            <p className="text-gray-400 group-hover:text-black uppercase tracking-[0.25em] text-xs transition duration-500">
              Expert Trainers
            </p>
          </div>

          <div className="group text-center border border-white/10 py-12 backdrop-blur-md bg-white/5 hover:bg-[#ffb347] transition duration-500">

            <h3 className="text-white group-hover:text-black text-4xl md:text-5xl font-bold mb-4 transition duration-500">
              2K+
            </h3>

            <p className="text-gray-400 group-hover:text-black uppercase tracking-[0.25em] text-xs transition duration-500">
              Active Students
            </p>
          </div>

          <div className="group text-center border border-white/10 py-12 backdrop-blur-md bg-white/5 hover:bg-[#ffb347] transition duration-500">

            <h3 className="text-white group-hover:text-black text-4xl md:text-5xl font-bold mb-4 transition duration-500">
              120+
            </h3>

            <p className="text-gray-400 group-hover:text-black uppercase tracking-[0.25em] text-xs transition duration-500">
              Live Events
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 ANIMATIONS */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }
      `}</style>
    </div>
  );
}