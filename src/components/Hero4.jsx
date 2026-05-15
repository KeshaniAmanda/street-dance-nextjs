import { useState, useEffect, useRef } from "react";
import quoteImg from "../assets/h4a.png";

export default function Hero4() {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      name: "JAMES NEWBIE",
      role: "Hip Hop Performer",
    },
    {
      text: "Aenean commodo ligula eget dolor. Cum sociis Theme natoque penatibus et magnis dis parturient montes.",
      name: "PATRICIA ANDERSON",
      role: "Dance Instructor",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa.",
      name: "DAVID HARRISON",
      role: "Street Choreographer",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState("next");

  const pauseRef = useRef(false);

  const changeSlide = (newIndex) => {
    setDirection(newIndex > index ? "next" : "prev");
    setVisible(false);

    setTimeout(() => {
      setIndex(newIndex);
      setVisible(true);
    }, 250);
  };

  useEffect(() => {
    if (pauseRef.current) return;

    const interval = setInterval(() => {
      changeSlide((index + 1) % data.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      className="relative w-full overflow-hidden py-6 sm:py-6 px-4 bg-[#0a0a0a]"
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ffb347]/10 rounded-full blur-3xl"></div>

      {/* BACKGROUND TEXT */}
      <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-[50px] sm:text-[100px] md:text-[140px] font-black uppercase tracking-[0.2em] text-white/[0.03] pointer-events-none">
        Reviews
      </h1>

      {/* TITLE */}
      <div className="relative z-20 text-center mb-10">
        <p className="uppercase tracking-[0.35em] text-[#ffb347] text-[11px] mb-4">
          Testimonials
        </p>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[0.1em] leading-[1.2]">
          What Dancers Say
        </h2>

        <div className="w-16 h-[2px] bg-[#ffb347] mx-auto mt-5"></div>
      </div>

      {/* CARD */}
      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-10 rounded-[24px]
        border border-white/10 bg-white/[0.04] backdrop-blur-lg
        shadow-[0_0_40px_rgba(255,179,71,0.08)]
        transition-all duration-500 ease-out transform ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : direction === "next"
            ? "opacity-0 translate-y-5 scale-95"
            : "opacity-0 -translate-y-5 scale-95"
        }`}
      >
        {/* QUOTE */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ffb347]/20 blur-2xl rounded-full"></div>

            <img
              src={quoteImg}
              alt="quote"
              className="relative w-12 sm:w-14 opacity-90"
            />
          </div>
        </div>

        {/* TEXT */}
        <p className="text-gray-300 text-sm sm:text-base leading-[2] text-center max-w-2xl mx-auto font-light">
          “{data[index].text}”
        </p>

        {/* LINE */}
        <div className="w-14 h-[2px] bg-[#ffb347] mx-auto my-6"></div>

        {/* NAME */}
        <div className="text-center">
          <h3 className="uppercase tracking-[0.25em] text-[#ffb347] font-semibold text-sm">
            {data[index].name}
          </h3>

          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
            {data[index].role}
          </p>
        </div>
      </div>

      {/* DOTS */}
      <div className="relative z-20 flex justify-center gap-3 mt-8">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className="group flex items-center justify-center"
          >
            <span
              className={`transition-all duration-500 rounded-full ${
                i === index
                  ? "w-8 h-[3px] bg-[#ffb347]"
                  : "w-2.5 h-2.5 bg-white/20 group-hover:bg-[#ffb347]"
              }`}
            />
          </button>
        ))}
      </div>

      {/* SIDE LINES */}
      <div className="absolute top-1/2 left-6 hidden xl:block -translate-y-1/2">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#ffb347] to-transparent"></div>
      </div>

      <div className="absolute top-1/2 right-6 hidden xl:block -translate-y-1/2">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#ffb347] to-transparent"></div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}