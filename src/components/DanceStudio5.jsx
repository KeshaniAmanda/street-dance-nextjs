import { useState, useEffect } from "react";
import quoteImg from "../assets/testimonials-custim-img.png";
import videoBg from "../assets/video-background.jpg";

export default function HeroCombined() {

  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "JAMES NEWBIE",
    },
    {
       text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "PATRICIA ANDERSON",
    },
    {
       text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "DAVID HARRISON",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoClick = () => {
    window.open("https://vimeo.com/45031324", "_blank");
  };

  return (
    <div className="w-full">

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className="w-full bg-white py-20 px-6 flex flex-col items-center justify-center text-center">

        <img src={quoteImg} alt="quote" className="w-12 mb-6" />

        <p className="max-w-2xl text-gray-600 text-sm sm:text-base leading-relaxed mb-6 transition duration-500">
          {data[index].text}
        </p>

        <h3 className="uppercase tracking-widest text-gray-800 font-semibold mb-6">
          {data[index].name}
        </h3>

        <div className="flex gap-2">
          {data.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-gray-400" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

      </section>

      {/* ===== VIDEO SECTION (BOTTOM) ===== */}
      <div className="relative w-full h-screen">

        <img
          src={videoBg}
          alt="video background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handleVideoClick}
            className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-white text-white text-2xl hover:scale-110 transition"
          >
            ▶
          </button>
        </div>

      </div>

    </div>
  );
}