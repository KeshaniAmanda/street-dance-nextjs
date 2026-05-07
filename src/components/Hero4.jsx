import { useState, useEffect } from "react";
import quoteImg from "../assets/h4a.png";

export default function Hero4() {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "JAMES NEWBIE",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "PATRICIA ANDERSON",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla.",
      name: "DAVID HARRISON",
    },
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // CHANGE SLIDE
  const changeSlide = (newIndex) => {
    setAnimate(false);

    setTimeout(() => {
      setIndex(newIndex);
      setAnimate(true);
    }, 200);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((index + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* CONTENT */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          animate
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        {/* QUOTE IMAGE */}
        <img
          src={quoteImg}
          alt="quote"
          className="w-12 mb-6 mx-auto"
        />

        {/* TEXT */}
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          {data[index].text}
        </p>

        {/* NAME */}
        <h3 className="uppercase tracking-widest text-gray-800 font-semibold mb-6">
          {data[index].name}
        </h3>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => changeSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index
                ? "bg-gray-500 scale-110"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}